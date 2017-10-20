import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { RouteConfig } from './settings/RouteConfig';
import firebase from 'firebase'
import {colors} from 'material-ui';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: colors.grey,
        secondary: colors.teal,
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