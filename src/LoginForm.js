import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

import { globalStyles } from '../styles/global'

export default class LoginForm extends Component {

    state = {
        username: '',
        password: ''
    }

    render() {
        return (
            <View style={globalStyles.body}>
                <Text style={globalStyles.h2}>Login Form</Text>
                <TextInput style={globalStyles.input} placeholder="username" onChangeText={(text) => {this.setState({username: text} )}}/>
                <TextInput style={globalStyles.input} placeholder="password" secureTextEntry={true} onChangeText={(text) => {this.setState({password: text} )}}/>
                <TouchableHighlight onPress={() => this.props.userFetch("https://polaroll.herokuapp.com/login", this.state)} underlayColor='rgb(210,220,230)'>
                    <Text style={globalStyles.button}>Submit</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

