import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
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

    componentDidMount() {
        this.getFromSecureStore()
    }

    getFromSecureStore = async () => {
        try {
            const credentials = await SecureStore.getItemAsync('userInfo');
            if (credentials) {
                const userInfo = JSON.parse(credentials);
                this.setState({
                    userInfo: userInfo,
                    photos: userInfo.photos,
                    name: userInfo.user_name
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    displaySavedPhotos = () => {
        console.log("photos", this.state.photos)
        // const photos = ["photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo"]
        // return userInfo.photos.map( photo => <SavedPhoto key={photo.id}/> )
    }

    render() {
        const { navigation } = this.props
        return(
            <View>
                <ScrollView>
                    <ProfileHeader navigation={navigation} name={this.state.name} ></ProfileHeader>
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