import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, Button } from 'react-native'

import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const loginURL = "https://polaroll.herokuapp.com/login"

export default class LoginSignup extends Component {
    state = {
        isLogin: true,

    } 

    userLogin = (loginInfo) => {
        fetch(loginURL, {
          method: "POST",
          headers: {
              "Content-Type": "Application/json"
          },
          body: JSON.stringify(loginInfo)
        })
            .then(response => response.json())
            .then(response => alert(response))
        //   .then(response => {
        //     if (response.status === 200) {
        //         this.setState({error: ""})
        //         return response.json() 
        //     } else if (response.status === 401) {
        //         throw new Error("Something is wrong with the username or password")
        //     }
        //   }) 
        //   .then(result => this.handleResult(result))
        //   .catch(error => this.displayError(error.message))
      }

    displayError = (errorMessage) => {
        alert(errorMessage)
    }

    handleResult = (result) => {
        console.log("result", result)
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

    toggleForms = () => {
        this.setState({ isLogin: !this.state.isLogin})
    }

    render() {
        const { isLogin } = this.state
        const { navigation } = this.props
        return( 
            <View style={styles.body}>
                <ScrollView>
                <Button onPress={this.toggleForms} title={isLogin ? "Need to Signup?" : "Need to Login?" } ></Button>
                    <View style={styles.forms}>
                        {isLogin ? <LoginForm navigation={navigation} userLogin={this.userLogin} ></LoginForm> : <SignupForm navigation={navigation}></SignupForm>}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center"
    },
    workaround: {
        height: 400
    },
    forms: {
        flex: 1
    },
})