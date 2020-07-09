import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import ProfileHeader from './ProfileHeader'
import SavedPhoto from './SavedPhoto'

export default class Profile extends Component {

    state = {
        name: '',
        photos: {},
        userInfo: {},
    }

    displaySavedPhotos = () => {
        const { photos } = this.props.route.params
        let result = photos.map( photo => <SavedPhoto link={photo.link} key={photo.id}/> )
        return result
    }

    render() {
        const { navigation } = this.props
        const { token, name, id } = this.props.route.params
        return(
            <View>
                <ScrollView>
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
    },
     film: {
        backgroundColor: 'white', 
        height: 100, 
        width: '22%', 
        margin: 5
    },

    photo: {
        backgroundColor: 'black', 
        height: 70, 
        width: '90%', 
        position: 'absolute', 
        top: '5%', 
        left: '5%',
    },

})