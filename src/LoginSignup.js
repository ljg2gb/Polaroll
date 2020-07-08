import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, Button } from 'react-native'

import LoginForm from './LoginForm'
import SignupForm from './SignupForm'


export default class LoginSignup extends Component {
    state = {
        error: '',
        isLogin: true,
        token: '',
        name: '',
        id: '',
        photos: []
    } 

    userFetch = (url, body) => {
        fetch(url, {
          method: "POST",
          headers: {
              "Content-Type": "Application/json"
          },
          body: JSON.stringify(body)
        })
            .then(response => {
                if (response.status === 200) {
                    this.setState({error: ""})
                    return response.json() 
                } else if (response.status === 401) {
                    throw new Error("Something is wrong with the username or password")
                }
            })
            .then(response => this.handleResult(response))
            .catch(error => this.displayError(error.message))
      }

    displayError = (errorMessage) => {
        alert(errorMessage)
    }

    handleResult = (result) => {
        console.log(result)
        this.setState({
            token: result.token,
            name: result.user_name,
            id: result.user_id,
            photos: result.photos
        })
        console.log("photos", this.state.photos)
        // this.SetInSecureStore(result)
        this.navigateToProfile()
    }
    
    // SetInSecureStore = async ({token, user_id, user_name}) => {
    //     const credentials = { token, user_id, user_name };
    //     try {
    //         await SecureStore.setItemAsync( 'userInfo', JSON.stringify(credentials) );
    //     } catch (e) {
    //       console.log(e);
    //     }
    // };
    
    navigateToProfile = () => {
        const {token, name, id, photos} = this.state
        this.props.navigation.navigate('Profile', { token, name, id, photos })
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
                        { isLogin 
                        ? <LoginForm navigation={navigation} userFetch={this.userFetch} ></LoginForm> 
                        : <SignupForm navigation={navigation} userFetch={this.userFetch} ></SignupForm>
                        }
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