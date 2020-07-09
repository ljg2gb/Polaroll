import React from 'react';
import {View, StyleSheet, Text, Image} from "react-native";

export default function SavedPhoto({ link }) {

    console.log(link)

    return(
        <View style={styles.film}>
            {/* <View style={styles.photo}> */}
                <Image  style={styles.photo} source={{uri: link}}></Image>
            {/* </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    film: {
        backgroundColor: 'white', 
        height: 100, 
        width: '22%', 
        margin: 5
    },

    photo: {
        height: 70, 
        width: '90%', 
        resizeMode: "contain",
        position: 'absolute', 
        top: '5%', 
        left: '5%',
    },

    image: {
        width: '100%', 
        height: '100%', 
        resizeMode: "cover"
    }
})