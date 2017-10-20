import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Avatar, Chip } from 'material-ui';
import { Menu as MenuIcon } from 'material-ui-icons';

class Navbar extends Component {
    constructor(){
        super();
        this.toggle = this.toggle.bind(this);
    }

    toggle(event){
        event.preventDefault();
        this.props.toggleSidemenu(true);
    }

    render() {
        const { classes } = this.props
        let signIn = null;
        if(this.props.user){
            signIn = (
                <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                     <Chip color="accent"
                        avatar={<Avatar src={this.props.user.photoURL} />}
                        label={`Hi ${this.props.user.displayName}!`}
                        className={classes.chip}
                    />
                    <Button color="inherit" onClick={this.props.signOut}>Sign Out</Button>
                </div>
            );
        }
        else {
            signIn = <Button color="contrast" onClick={this.props.signIn}>Login</Button>;
        }
        return (
            <AppBar position="static" style={{background: 'linear-gradient(to right, #b3ffab, #12fff7)'}} >
                <Toolbar>
                <IconButton className={classes.menuButton} color="contrast" aria-label="Menu" onClick={this.toggle}>
                    <MenuIcon />
                </IconButton>
                <Typography type="title" color="inherit" className={classes.flex}>
                    I'VE GOT A QUESTION
                </Typography>
                {signIn}
                </Toolbar>
            </AppBar>
        );
    }
}

export default Navbar;