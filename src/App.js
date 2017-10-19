import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { RouteConfig } from './settings/RouteConfig';
import firebase from 'firebase'

const theme = createMuiTheme({
    palette: {
      type: 'light', // Switching the dark mode on is a single property value change.
    },
  });

class App extends Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDjhVJdmcD8WXZ-VDhbX3sAA6tkrHTjqk0",
            authDomain: "bawdy-rebels.firebaseapp.com",
            databaseURL: "https://bawdy-rebels.firebaseio.com",
            projectId: "bawdy-rebels",
        });
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <RouteConfig />
            </MuiThemeProvider>
        );
    }
}

export default App;