import React, { Component } from 'react';
import { storage } from '../Firebase/config';
import { View, Button, Alert, StyleSheet, Text } from 'react-native';

export default class SaveToFirebase extends Component {
    state = {
        isLoaded: true,
        url: '',
    }

    onChooseImagePress = async () => {
        const { photo } = this.props.route.params
        this.setState({isLoaded: false})
        this.uploadImage(photo.uri, "otro")
            .then(() => {
                this.setState({isLoaded: true})
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

    

    render() {
        const { isLoaded } = this.state
        return( 
            <View style={styles.container}>
                <Button title='Upload to Firebase' onPress={this.onChooseImagePress}/>
                {!isLoaded ? <Text>Loading!</Text> : null}
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