import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

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
            body: JSON.stringify(this.state)
        })
            .then(response => console.log(response))
            // .then(response => {
            //     if (response.status === 200) {
            //     this.setState({error: ""})
            //     return response.json() 
            //     } else if (response.status === 401) {
            //         throw new Error("Something is wrong with the username or password")
            //     }
            // }) 
            // .then(result => this.handleResult(result))
            // // .catch(error => displayError(error.message))
    }

    navigateToProfile = () => {
        this.props.navigation.navigate('Profile')
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

const styles = StyleSheet.create({
    body: {
        padding: 20,
        flex: 1
    },
    h1: {
        textAlign: "center",
        fontSize: 30,
    },
    input: {
        borderWidth: 2, 
        borderColor: 'skyblue', 
        margin: 10,
        padding: 5,
        width: 300
    }
})