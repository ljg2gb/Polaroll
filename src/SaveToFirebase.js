import React, { Component } from 'react';
import { storage } from '../Firebase/config';
import { View, Alert, StyleSheet, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class SaveToFirebase extends Component {
    state = {
        isLoaded: true,
        url: '',
    }

    saveToPolaroll = async () => {
        this.setState({isLoaded: false})
        this.uploadImage()
            .then(() => {
                this.setState({isLoaded: true})
                Alert.alert("Success")
            })
            .catch((error) => {
                Alert.alert(error.message);
            })
    }

    uploadImage = async () => {
        const { uri } = this.props.photo
        // let uniqueName = Date.now();
        // let imageName = uniqueName.toString()
        // console.log(typeof imageName)
        const imageName = 'pardon-me'

        try {
            const response = await fetch(uri);
            const blob = await response.blob();
            const storageRef = storage.ref().child('images/'+ imageName);
            storageRef.put(blob)
            storageRef.getDownloadURL()
                .then(url => {
                    this.navigateToLoginSignup(url)
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

    navigateToLoginSignup = (link) => {
        this.props.navigation.navigate('LoginSignup', { link } )
    }

    render() {
        const { isLoaded } = this.state
        const { navigation } = this.props
        return( 
            <TouchableHighlight
                underlayColor='rgb(210,220,230)'
                style={styles.navButton}
                navigation={navigation}
                onPress={this.saveToPolaroll}>
                <View>
                    <Text style={styles.navButtonText}>Save to Polaroll</Text>
                </View>
            </TouchableHighlight>
        )
    } 
}

const styles = StyleSheet.create({
    navButton: {
        backgroundColor: 'white',
        padding: 2,
        paddingVertical: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderBottomColor: '#F04733',
        borderRightColor: '#ECA827',
        borderTopColor: '#85BC3D',
        borderLeftColor: '#3490CC',
        alignSelf: 'center',
        flexWrap: 'wrap',
    },
    navButtonText: {
        fontFamily: 'HelveticaNeue-Bold'
    },
})