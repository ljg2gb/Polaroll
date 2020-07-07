import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, Button, Text } from 'react-native'

import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { render } from 'react-dom'
import { TouchableHighlight } from 'react-native-gesture-handler'

export default class LoginSignup extends Component {
    state = {
        isLogin: true
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
                        {isLogin ? <LoginForm navigation={navigation}></LoginForm> : <SignupForm navigation={navigation}></SignupForm>}
                    </View>
                </ScrollView>
                {/* <View style={styles.workaround}></View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        // flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center"
    },
    
    workaround: {
        height: 400
    },

    forms: {
        flex: 1,
        // height: 470,
    },
})