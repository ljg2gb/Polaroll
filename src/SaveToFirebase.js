import React, { Component } from 'react';
// import axios from 'axois'
import { storage } from '../Firebase/config';
import { View, Button, Alert, StyleSheet, Image, Text } from 'react-native';

export default class SaveToFirebase extends Component {
    state = {
        isLoaded: true,
        isURL: false,
        url: '',
    }

    onChooseImagePress = async () => {
        const { photo } = this.props.route.params
        this.setState({isLoaded: false})
        this.uploadImage(photo.uri, "otro")
            .then(() => {

                this.setState({isLoaded: true, isUrl: true})
                Alert.alert("Success")
            })
            .catch((error) => {
                Alert.alert(error.message);
            })
    }

    uploadImage = async (uri, imageName) => {
        try {
            const response = await fetch(uri);
            const blob = await response.blob();
            const storageRef = storage.ref().child('images/'+ imageName);
            storageRef.put(blob)
            storageRef.getDownloadURL()
                .then(url => {
                    this.setState({ url: url })
                    console.log(this.state.url)
                })
                .catch ( error =>
                    console.log(error)
                )

        } catch (error) {
            console.log("whoops",error.message)
        }
    }

    // downloadURL = () => {
    //     storage
    //     .ref("images")
    //     .child(image.name)
    //     .getDownloadURL()
    //     .then(url => {
    //         this.setState({url: url, isUrl: true, isLoaded: true})
    //         console.log("Success!")
            
    //     //    this.props.addImage(this.state.url)
    // }

    // handleUpload = async () => {
    //     const blob = this.generateBlob()
    //     console.log("blob2", blob)
    //     const photoName = "another-test-image"
    //     this.setState({isLoaded: false})

    //     const uploadTask = storage.ref(`images/${photoName}`).put(blob);
    //     console.log(uploadTask) 
    //     uploadTask.on(
    //     //    "state_changed",
    //     //    snapshot => {},
    //        error => {
    //            console.log("whoops", error);
    //        },
    //        () => {
    //            storage
    //            .ref("images")
    //            .child(image.name)
    //            .getDownloadURL()
    //            .then(url => {
    //                this.setState({url: url, isUrl: true, isLoaded: true})
    //                console.log("Success!")
                   
    //             //    this.props.addImage(this.state.url)
    //            })
    //       }
    //     )
        
    // }

    render() {
        const { isLoaded, url } = this.state
        return( 
            <View style={styles.container}>
                <Button title='Upload to Firebase' onPress={this.onChooseImagePress}/>
                {!isLoaded ? <Text>Loading!</Text> : null}
                {url ? <Image source={this.state.url}></Image> : null }
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