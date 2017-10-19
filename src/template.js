import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Card, List, ListItem, Avatar,  ListItemText, CardHeader, Divider, ListItemSecondaryAction, Badge, TextField} from 'material-ui';
import {Menu as MenuIcon, Folder as FolderIcon, Like as LikeIcon, ThumbUp as ThumbUpIcon} from 'material-ui-icons';

const styles = theme => ({
  root: {
    width: '100%',
    background: theme.palette.background.paper,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Title
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>
      <div style={{
        display: 'flex',
        flexFlow: 'row wrap',
        width: '100%',
        margin: '30px auto 30px',
        
      }}> 
        <Card style={{ flexGrow: 1, marginLeft:30 }}>
        <CardHeader
              title="Rooms"
            />
            <Divider light />
          <List>
            <ListItem button>
              <Avatar alt="Remy Sharp" src="https://cdn.css-tricks.com/wp-content/uploads/2017/06/reactfirebase.png" />
              <ListItemText primary="Real Time App with React & Firebase" secondary="Octubre 21 5:20pm, by German Garcia" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Make a chatbot" secondary="Octubre 21 5:20pm, by Rafa" />
            </ListItem>
          </List>
        </Card>
        <Card style={{ flexGrow: 2, marginLeft: 30}}>
          <CardHeader
              title="Questions for 'Real Time App with React & Firebase'"
              subheader="Octubre 21 5:20pm, by German Garcia" 
            />
          <Divider light />
          <List>
            <ListItem>
              <Avatar alt="user" src="https://lh6.googleusercontent.com/-sinrz8tbs3I/AAAAAAAAAAI/AAAAAAAAAEo/Qfc1NadcT4Q/photo.jpg"/>
              <ListItemText primary="What is a component?" secondary="by ggarciar@nearsoft onJan 9, 2016" style={{ flex: 1 }} />
              <ListItemSecondaryAction>
              <Badge  badgeContent={4} color="primary" style={{margin: `0 60px`,}} button>
                <ThumbUpIcon style={{margin: `0 10px`,}} />
              </Badge>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Card>
      </div>
      <Card> 
        <form className={classes.container} noValidate autoComplete="off" style={{margin: 30}}>
          <TextField
              id="full-width"
              label="Label"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Placeholder"
              helperText="Full width!"
              margin="normal"
              style={{flex: 1, width:'50%'}}
            />
          <Button raised color="primary" className={classes.button} style={{marginLeft:30}}>
            Primary
          </Button>
        </form>
      </Card>
    </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
