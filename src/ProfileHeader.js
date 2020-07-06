import React, { Component } from 'react';
import {View, Text, StyleSheet} from "react-native";
import * as SecureStore from 'expo-secure-store';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';

export default class ProfileHeader extends Component {
    state = {
        name: '',
        userInfo: {},
    }

    componentDidMount() {
        this.getFromSecureStore()
    }

    getFromSecureStore = async () => {
        try {
            const credentials = await SecureStore.getItemAsync('userInfo');
            if (credentials) {
                const userInfo = JSON.parse(credentials);
                this.setState({
                    userInfo: userInfo,
                    name: userInfo.user_name
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    handleLogout = () => {
        this.logout()
        this.props.navigation.navigate('Viewfinder')
    }

    handleTakePhoto = () => {
        const { userInfo } = this.state
        this.props.navigation.navigate('Viewfinder', { userInfo })
    }

    logout = async () => {
        try {
            await SecureStore.deleteItemAsync('userInfo');
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return(
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcome}>{this.state.name}</Text>

                <TouchableOpacity onPress={this.handleLogout}>
                    <Text style={styles.logout}>Logout</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.handleClick}>
                    <Text style={styles.logout}>Retake Photo</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    welcomeContainer: {
        backgroundColor: '#282C34',
        paddingVertical: 20,
        paddingHorizontal: 15,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    welcome: {
        fontFamily: 'HelveticaNeue',
        fontSize: 30,
        color: 'white'

    },

    logout: {
        fontFamily: 'Courier',
        color: '#F7B227',
        textDecorationLine: 'underline'

    }
})