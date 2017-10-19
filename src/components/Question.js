import React, { Component } from 'react';
import { ListItemText, ListItemSecondaryAction, Badge, ListItem, Avatar, IconButton } from 'material-ui';
import { ThumbUp as ThumbUpIcon, ThumbDown as ThumbDownIcon, Delete as DeleteIcon } from 'material-ui-icons';
import moment from 'moment';

class Question extends Component {
    constructor(){
        super();
        this.vote = this.vote.bind(this);
        this.close = this.close.bind(this);
    }

    vote(event){
        event.preventDefault();
        if(!this.props.user) return;
        this.props.voteForQuestion(this.props.id);
    }

    close(event){
        event.preventDefault();
        if(!this.props.user) return;
        this.props.closeQuestion(this.props.id);
    }

    render() {
        const votes = Object.keys(this.props.details.votes || {});
        const votesCount = votes.length;
        let icon =null;
        if(this.props.user)
            icon = votes.find(key => this.props.user.uid === key) ? <ThumbDownIcon style={{margin: `0 8px`,}} /> : <ThumbUpIcon style={{margin: `0 8px`,}} /> 
        return (
            <div>
                <ListItem>
                <Avatar alt="user" src={this.props.details.photo}/>
                <ListItemText primary={this.props.details.question} secondary={`by ${this.props.details.author} on ${moment(this.props.details.when).calendar()}`} />
                <ListItemSecondaryAction>
                    <Badge  badgeContent={votesCount} color="accent" onClick={this.vote}>
                        {icon}
                    </Badge>
                    <IconButton aria-label="Delete" onClick={this.close}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
                </ListItem>
            </div>
        );
    }
}

export default Question;