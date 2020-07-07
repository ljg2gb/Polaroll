import React from 'react'
import { StyleSheet, View, Image } from 'react-native';

import FadeInView from './FadeInView'
import TransitionDownView from './TransitionDownView'

export default function FilmPrint({ localLink }) {
    return (
        <View>
            <TransitionDownView style={styles.photoPaper}>

                <View style={styles.photoBase}></View>

                <FadeInView style={styles.photo}>
                    <Image style={styles.image} source={{ uri: localLink }} ></Image>
                </FadeInView>

            </TransitionDownView>
        </View>
    )
}

const styles = StyleSheet.create({
    photoPaper: {
        position: 'absolute',
        top: -275,
        alignSelf: "center",
        backgroundColor: 'hsl(194, 9%, 95%)',
        height: 220,
        width: 180,
        margin: 20,
    },

    photoBase: {
        backgroundColor: 'hsl(204, 5%, 65%)',
        height: 160,
        width: 160,
        position: 'absolute',
        top: 10,
        left: 10,
    },

    photo: {
        backgroundColor: 'hsl(199, 82%, 24%)',
        height: 160,
        width: 160,
        position: 'absolute',
        top: 10,
        left: 10,
    },

    image: {
        width: '100%', 
        height: '100%',
        resizeMode: "cover"
    },
})