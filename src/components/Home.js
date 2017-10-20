import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import firebase from 'firebase';
import rebase from 're-base';
import PropTypes from 'prop-types';
////
import { styles } from '../settings/ThemeConfig'
import Navbar from './Navbar';
import Room from './Room';
import Questions from './Questions';
import Sidemenu from './Sidemenu';

class Home extends Component {
    constructor(){
        super();
        this.signIn = this.signIn.bind(this);
        this.base = rebase.createClass(firebase.database());
        this.addNewQuestion = this.addNewQuestion.bind(this);
        this.voteForQuestion = this.voteForQuestion.bind(this);
        this.closeQuestion = this.closeQuestion.bind(this);
        this.toggleSidemenu = this.toggleSidemenu.bind(this);
        this.changeRoom = this.changeRoom.bind(this);
        this.state = {
            currentUser: {},
            questions: {},
            rooms: {},
            room: {},
            sidemenu: false,
            currentRoom: 'awesome-react-from-scratch',
        }
    }
    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({currentUser: user});
          });
        this.ref= this.base.syncState(`/rooms/${this.state.currentRoom}/questions`,
            {
                context: this,
                state: "questions",
            });
        this.refRooms= this.base.syncState(`/rooms`,
        {
            context: this,
            state: "rooms",
        });
        this.refRoom= this.base.syncState(`/rooms/${this.state.currentRoom}`,
        {
            context: this,
            state: "room",
        });
    }

    toggleSidemenu(open){
        
        this.setState({sidemenu: open});
    }

    changeRoom(room){
        
        this.base.removeBinding(this.ref);
        this.base.removeBinding(this.refRoom);
        this.setState({questions: {}, room: {} });

        this.ref= this.base.syncState(`/rooms/${room}/questions`,
        {
            context: this,
            state: "questions",
        });
        this.refRoom= this.base.syncState(`/rooms/${room}`,
        {
            context: this,
            state: "room",
        });
        this.setState({currentRoom: room});
        
        
    }

    componentWillUnmount() {
        this.base.removeBinding(this.ref);
        this.base.removeBinding(this.refRooms);
        this.base.removeBinding(this.refRoom);
    }

    addNewQuestion(question){
        const questions = {...this.state.questions};
        questions[`question-${Date.now()}`] = question;
        console.log(question);
        this.setState({questions: questions});
    }
    
    closeQuestion(questionKey){
        const questions = {...this.state.questions};
        questions[questionKey].status = 'closed';
        this.setState({questions: questions});
    }

    voteForQuestion(questionKey){
        if(!this.state.currentUser) return;
        const questions = {...this.state.questions};
        console.log(`You voted for question ${questionKey} ⁉️`)
        if(!questions[questionKey].votes) questions[questionKey].votes = {};
        questions[questionKey].votes[this.state.currentUser.uid] = questions[questionKey].votes[this.state.currentUser.uid] ? null : Date.now();
        this.setState({questions: questions});
    }

    signOut() {
        firebase.auth().signOut();
    }

    signIn(events) {
        events.preventDefault();
        console.log("You changed the URL");
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.login');
        firebase.auth().signInWithPopup(provider).then(authData => {
            console.log(authData);
            this.setState({currentUser: authData.user})
        }).catch(error => {
            console.log(error);
        });
	}

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Navbar classes={classes} signIn={this.signIn} user={this.state.currentUser} signOut={this.signOut} toggleSidemenu={this.toggleSidemenu}/>
                <Sidemenu toggleSidemenu={this.toggleSidemenu} sidemenu={this.state.sidemenu} rooms={this.state.rooms} changeRoom={this.changeRoom}/>
                <div style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    width: '100%',
                    marginTop: 30,
                }}> 
                    <Room user={this.state.currentUser} addNewQuestion={this.addNewQuestion} room={this.state.room} />
                    <Questions user={this.state.currentUser} questions={this.state.questions} voteForQuestion={this.voteForQuestion} closeQuestion={this.closeQuestion}/>
                </div>
            </div>
        );
    }
}

Home.contextTypes = {
	router: PropTypes.object,
}

export default withStyles(styles)(Home);