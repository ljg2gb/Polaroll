import React from 'react';
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    body: {
        padding: 20,
        flex: 1
    },

    h1: {
        fontFamily: "HelveticaNeue-Bold",
        color: 'white',
        fontSize: 36,
        margin: 20,
        textAlign: 'center'
    },

    h2: {
        fontFamily: "HelveticaNeue-Medium",
        fontSize: 30,
        textAlign: "center",
    },
    input: {
        fontFamily: "Courier",
        fontSize: 18,
        borderRadius: 5,
        borderWidth: 2, 
        borderColor: 'skyblue', 
        margin: 10,
        padding: 5,
        width: 300
    }
})