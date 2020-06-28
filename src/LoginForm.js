import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const loginURL = "http://localhost:3000/login"

export default class LoginForm extends Component {

    state = {
        username: 'ljg2gb',
        password: 'Lydia'
    }

    submit = () => {
        fetch(loginURL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(this.state)
        })
            .then(console.log)
            // .then(response => {
            //     if (response.status === 200) {
            //     this.setState({error: ""})
            //     return response.json() 
            //     } else if (response.status === 401) {
            //         throw new Error("Something is wrong with the username or password")
            //     }
            // }) 
            // .then(result => handleResult(result))
            // // .catch(error => displayError(error.message))
    }

    // handleResult = (result) => {
    //     console.log(result)
    // }

    render() {
        return (
            <View style={styles.body}>
                <Text style={styles.h1} >Login Form</Text>
                <TextInput placeholder="username" onChangeText={(text) => {this.setState({username: text})}} style={styles.input}/>
                <TextInput placeholder="password" secureTextEntry={true} onChangeText={(text) => {this.setState({password: text})}} style={styles.input}/>
                <Button title="submit" onPress={this.submit}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        padding: 20,
        flex: 1,
        // justifyContent: "center"
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