import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

export default class LoginSignup extends Component {
    state = {
        height: 100
    }
    
    render() {
        let screenHeight = Dimensions.get('window').height;
        return ( 
            <View style={styles.body}>
                <View style={{ height: screenHeight}}>
                    <ScrollView>
                        <LoginForm navigation={this.props.navigation} ></LoginForm>
                        <SignupForm ></SignupForm>
                        <View style={{ height: 300 }}></View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 100,
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center"
    }
})