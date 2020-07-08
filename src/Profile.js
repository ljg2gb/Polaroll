import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as SecureStore from 'expo-secure-store';

import ProfileHeader from './ProfileHeader'
import SavedPhoto from './SavedPhoto'
import { render } from 'react-dom';

export default class Profile extends Component {

    state = {
        name: '',
        photos: {},
        userInfo: {},
    }

    displaySavedPhotos = () => {
        const { photos } = this.props.route.params
        console.log(photos)
        // // const photos = ["photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo"]
        // return photos.map( photo => <SavedPhoto key={photo.id}/> )
    }

    render() {
        const { navigation } = this.props
        const { token, name, id } = this.props.route.params
        return(
            <View>
                <ScrollView>
                    <Text>{token}</Text>
                    <Text>{name}</Text>
                    <Text>{id}</Text>
                    <ProfileHeader navigation={navigation} name={name} ></ProfileHeader>
                    <View style={styles.photosContainer}>
                        {this.displaySavedPhotos()}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    photosContainer: {
        backgroundColor: 'hsl(198, 100%, 42%)', 
        justifyContent: 'center', 
        flex: 1, 
        flexWrap: 'wrap', 
        flexDirection: 'row', 
        marginTop: 5
    }

})