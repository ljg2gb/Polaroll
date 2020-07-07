import React, { Component } from 'react';
import * as firebase from 'firebase';
import firebaseConfig from '../Firebase/config';
import { View, Button, Alert, StyleSheet } from 'react-native';

firebase.initializeApp(firebaseConfig);

export default class SaveToFirebase extends Component {

    onChooseImagePress = async () => {
        const { photo } = this.props.route.params
        this.uploadImage(photo.uri, "new-test-image")
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
            var photoRef = storageRef.child('images/'+ imageName);
            return photoRef.put(blob)
            console.log("firebase", photoRef)
        } catch (error) {
            console.log("whoops",error.message)
        }
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