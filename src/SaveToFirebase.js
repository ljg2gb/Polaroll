import React, { Component } from 'react';
import * as firebase from 'firebase';
import firebaseConfig from '../Firebase/config';
import { View, Button, Alert, StyleSheet } from 'react-native';

firebase.initializeApp(firebaseConfig);

export default class SaveToFirebase extends Component {

    onChooseImagePress = async () => {
        const { photo } = this.props.route.params
        this.uploadImage(photo.uri, "test-image")
            .then(() => {
                Alert.alert("Success")
            })
            .catch((error) => {
                Alert.alert(error);
            })
    }

    uploadImage = async (uri, imageName) => {
        try {
            const response = await fetch(uri);
            const blob = await response.blob();
            const storageRef = firebase.storage().ref();
            var photoRef = storageRef.child('../assets/icon_polaroll_google.png')
            var photoImagesRef = storageRef.child('images/../assets/icon_polaroll_google.png')
            return photoRef.put(blob)
            // console.log("firebase", photoRef)
        } catch (error) {

            console.log("whoops",error.message)
        }
        
        // var ref = firebase.storage().ref().child("images/test-image")
        // console.log("firebase", storageRef)
    }

    render() {
        return( 
            <View style={styles.container}>
                <Button title='Upload to Firebase' onPress={this.onChooseImagePress}/>
            </View>
        )
    } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center'
    }
})