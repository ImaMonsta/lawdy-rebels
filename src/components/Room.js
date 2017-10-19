import React, { Component } from 'react';
import { Card, CardHeader, CardMedia, Avatar, CardContent, Typography, Divider} from 'material-ui';
import Ask from './Ask'

class Room extends Component {
    render() {
        const {room} = this.props;
        console.log(room);
        return (
            <div>
                <Card style={{ flexGrow: 1, marginLeft: 10, marginRight: 10 }} >
                <CardHeader
                    avatar={
                    <Avatar aria-label="Recipe" >
                        G 
                    </Avatar>
                    }
                    title={room.name}
                    subheader={room.subHeader}
                />
                <CardMedia
                    style={{height: 120 }}
                    image={room.image}
                    title="React & Firebase"
                />
                <CardContent>
                    <Typography component="p">
                        {room.description}
                    </Typography>
                    { this.props.user ? <Ask addNewQuestion={this.props.addNewQuestion} user={this.props.user}/> : <Divider/>}
                </CardContent>
                </Card>
            </div>
        );
    }
}

export default Room;