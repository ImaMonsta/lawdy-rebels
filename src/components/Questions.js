import React, { Component } from 'react';
import { Card, List } from 'material-ui';
import Question from './Question'


class componentName extends Component {
    render() {
        const { questions } = this.props;
        return (
            <Card style={{ flexGrow: 2,  marginLeft: 10, marginRight: 10 }}>
                <List>
                {   
                    Object
                        .keys(questions)
                        .filter(key => questions[key].status==="open")
                        .sort((a, b) => Object.keys(questions[b].votes || {}).length - Object.keys(questions[a].votes || {}).length)
                        .map((key, i) => 
                                <Question 
                                    key={key} 
                                    id={key} 
                                    details={questions[key]} 
                                    index={i} 
                                    user={this.props.user}
                                    voteForQuestion={this.props.voteForQuestion}
                                    closeQuestion={this.props.closeQuestion}   />
                            )
                    }
                </List>
            </Card>
        );
    }
}

export default componentName;