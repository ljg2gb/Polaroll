import React, { Component } from 'react';
import * as firebase from 'firebase';
import firebaseConfig from '../Firebase/config';


export default class SaveToFirebase extends Component {
    state = {

    }

    if (!firebase) {firebase.initializeApp(firebaseConfig);}

    render() {
        
    }
}