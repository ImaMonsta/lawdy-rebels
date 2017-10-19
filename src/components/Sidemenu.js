import React, { Component } from 'react';
import { Drawer, List } from 'material-ui';
import SidemenuItem from './SidemenuItem'

class Sidemenu extends Component {
    constructor(){
        super();
        this.toggle = this.toggle.bind(this);
    }
    
    toggle(event){
        event.preventDefault();
        this.props.toggleSidemenu(false);
    }

    render() {
        const {rooms} = this.props;
        const roomsKeys = Object.keys(rooms);
        console.log(rooms);
        return (
            <Drawer open={this.props.sidemenu} onRequestClose={this.toggle}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggle}
                    onKeyDown={this.toggle}
                    >
                    <List>
                        { roomsKeys.map(key => <SidemenuItem key={key} id={key} details={rooms[key]} changeRoom={this.props.changeRoom}/> ) }
                    </List>
                </div>
            </Drawer>
        );
    }
}

export default Sidemenu;