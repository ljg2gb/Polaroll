import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import * as SecureStore from 'expo-secure-store';
import { globalStyles } from '../styles/global'

const loginURL = "https://polaroll.herokuapp.com/login"

export default class LoginForm extends Component {

    state = {
        username: '',
        password: ''
    }

    submit = () => {
        console.log('submit loading!')
        fetch(loginURL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(this.state)
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
        return errorMessage ? <Text>{errorMessage}</Text> : null
    }

    handleResult = (result) => {
        console.log("got result!")
        this.remember(result)
    }
    
    remember = async ({token, user_id, user_name}) => {
        const credentials = { token, user_id, user_name };
        try {
            await SecureStore.setItemAsync( 'userInfo', JSON.stringify(credentials) );
            console.log("set user info")
            this.navigateToProfile()
        //   this.setState({ email: '', password: '' });
        } catch (e) {
          console.log(e);
        }
      };

    // read = async () => {
    //     try {
    //         const credentials = await SecureStore.getItemAsync('userInfo');
    //         console.log('value of credentials: ', credentials);

    //         // if (credentials) {
    //         // const myJson = JSON.parse(credentials);
    //         // this.setState({
    //         //     email: myJson.email,
    //         //     password: myJson.password,
    //         // });
    //         // }
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };
    
    navigateToProfile = () => {
        this.props.navigation.navigate('Profile')
    }

    render() {
        return (
            <View style={globalStyles.body}>
                <Text style={globalStyles.h2}>Login Form</Text>
                <TextInput style={globalStyles.input} placeholder="username" onChangeText={(text) => {this.setState({username: text} )}}/>
                <TextInput style={globalStyles.input} placeholder="password" secureTextEntry={true} onChangeText={(text) => {this.setState({password: text} )}}/>
                <Button title="submit" onPress={this.submit}/>
                <Button title="show credentials" onPress={this.read}/>
                {this.displayError}
            </View>
        )
    }
}