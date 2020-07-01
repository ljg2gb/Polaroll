import React from 'react'
import {View, Text} from 'react-native'
import * as SecureStore from 'expo-secure-store';
import ProfileHeader from './ProfileHeader'
import PhotoContainer from './PhotoContainer'

export default function Profile() {
    // const token = SecureStore.getItemAsync("token")
    // console.log("stored token", token)
    // const id = SecureStore.getItemAsync("user_id")
    // console.log("stored id", id)
    // const name = SecureStore.getItemAsync("user_name")
    // console.log("stored name", name)

    const displayPhotos = () => {
        const photos = ["photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo"]
        return photos.map( photo => <PhotoContainer/> )
    }

    return(
        <View>
            <ProfileHeader></ProfileHeader>
            <Text>Profile Page</Text>
            {/* {token ? <Text>My photos</Text> : null} */}
            <View style={{flex: 1,}}>
                {displayPhotos()}
            </View>
        </View>
    )
}