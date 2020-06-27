import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

export default function LoginSignup() {
    return ( 
        <View style={styles.body}>
            <LoginForm></LoginForm>
            <SignupForm></SignupForm>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})