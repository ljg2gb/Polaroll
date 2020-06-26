import React from 'react'
import { View, Text } from 'react-native'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

export default function LoginSignup() {
    return ( 
        <View>
            <Text>Login or Signup</Text>
            <LoginForm></LoginForm>
            <SignupForm></SignupForm>
        </View>
    )
}