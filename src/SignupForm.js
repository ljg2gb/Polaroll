import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import * as SecureStore from 'expo-secure-store';

import { globalStyles } from '../styles/global'

const usersURL = "https://polaroll.herokuapp.com/users"

export default class SignupForm extends Component {

    state = {
        name: '',
        username: '',
        email: '',
        password: ''
    }

    submit = () => {
        fetch(usersURL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({user: this.state})
        })
            .then(response => {
                if (response.status === 200) {
                    this.setState({error: ""})
                    return response.json() 
                } else if (response.status === 401) {
                    throw new Error("Something is wrong with the username or password")
                }
            }) 
            .then(result => this.handleResult(result))
            .catch(error => this.displayError(error.message))
    }

    displayError = (errorMessage) => {
        alert(errorMessage)
    }

    handleResult = (result) => {
        this.SetInSecureStore(result)
        this.navigateToProfile(result)
    }

    SetInSecureStore = async ({token, user_id, user_name}) => {
        const credentials = { token, user_id, user_name };
        try {
            await SecureStore.setItemAsync( 'userInfo', JSON.stringify(credentials) );
        } catch (e) {
          console.log(e);
        }
    };
    
    navigateToProfile = (userInfo) => {
        this.props.navigation.navigate('Profile', { userInfo })
    }

    render() {
        return (
            <View style={globalStyles.body}>
                <Text style={globalStyles.h2}>Signup Form</Text>
                <TextInput style={globalStyles.input} placeholder="name" onChangeText={(text) => {this.setState({name: text})}}/>
                <TextInput style={globalStyles.input} placeholder="username" onChangeText={(text) => {this.setState({username: text})}}/>
                <TextInput style={globalStyles.input} placeholder="email" onChangeText={(text) => {this.setState({email: text})}}/>
                <TextInput style={globalStyles.input} placeholder="password" secureTextEntry={true} onChangeText={(text) => {this.setState({password: text})}}/>
                <Button title="submit" onPress={this.submit}/>
            </View>
        )
    }
}