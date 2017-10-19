import React, { Component } from 'react';
import { ListItem, ListItemText, Avatar } from 'material-ui';
import {MD5} from '../helpers'

class SidemenuItem extends Component {
    constructor(){
        super();
        this.change = this.change.bind(this);

    }

    change(event){
        event.preventDefault();
        console.log(`Changed to room ${this.props.id}`);
        this.props.changeRoom(this.props.id);
    }

    render() {
        return (
            <ListItem button onClick={this.change} >
                <Avatar alt="Remy Sharp" src={`https://gravatar.com/avatar/${MD5(this.props.details.email || '')}?s=400`} />
                <ListItemText primary={this.props.details.name} />
            </ListItem>
        );
    }
}

export default SidemenuItem;