import React from 'react';
import {View, Text, StyleSheet} from "react-native";

export default function ProfileHeader() {

    return(
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcome}>Hi Meredith!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    welcomeContainer: {
        backgroundColor: 'skyblue', 
        width: '100%'
    },

    welcome: {
        fontSize: 30, 
        alignSelf: 'center', 
        margin: 15,
    }
})