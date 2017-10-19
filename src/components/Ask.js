import React, { Component } from 'react';
import { TextField, Button } from 'material-ui';

class Ask extends Component {
    constructor(){
        super();
        this.ask = this.ask.bind(this);
        this.state = {
            questionValue: ""
        }
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
    
    ask(event){
        event.preventDefault();
        if(this.state.questionValue === "") return;
        
        const question = {
            question: this.state.questionValue,
            status: "open",
            author: this.props.user.email,
            when: Date.now(),
            photo: this.props.user.photoURL,
            votes: { 
                [this.props.user.uid]: Date.now()
            },
        };
        this.props.addNewQuestion(question);
        this.setState({questionValue: ""});
    }

    render() {
        return (
            <form ref={(input) => this.questionForm = input} noValidate autoComplete="off" style={{margin: 5}}>
                <TextField
                    id="full-width"
                    label="What's your question?"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    placeholder="Ask!"
                    margin="normal"
                    style={{width:'70%'}}
                    value={this.state.questionValue}
                    onChange={this.handleChange('questionValue')}
                    />
                <Button raised color="primary"  style={{marginLeft:30}} onClick={this.ask}>
                    Ask
                </Button>
            </form>
        );
    }
}

export default Ask;