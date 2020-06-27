import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default class SignupForm extends Component {

    state = {
        name: '',
        username: '',
        email: '',
        password: ''
    }

    render() {
        return (
            <View style={styles.body}>
                <Text style={styles.h1}>Signup Form</Text>
                <TextInput placeholder="name" onChangeText={(text) => {this.setState({name: text})}} style={styles.input}/>
                <TextInput placeholder="username" onChangeText={(text) => {this.setState({username: text})}} style={styles.input}/>
                <TextInput placeholder="email" onChangeText={(text) => {this.setState({email: text})}} style={styles.input}/>
                <TextInput placeholder="password" secureTextEntry={true} onChangeText={(text) => {this.setState({password: text})}} style={styles.input}/>
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