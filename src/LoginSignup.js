import React from 'react'
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

export default function LoginSignup({navigation}) {

    return ( 
        <View style={styles.body}>
            <View style={styles.screen}>
                <ScrollView>
                    <LoginForm navigation={navigation}></LoginForm>
                    <SignupForm navigation={navigation}></SignupForm>
                    <View style={styles.workaround}></View>
                </ScrollView>
            </View>
        </View>
    )
}

let screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    body: {
        paddingTop: 100,
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center"
    },
    
    workaround: {
        height: 400
    },

    screen: {
        height: screenHeight
    }
})