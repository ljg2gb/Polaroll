import React from 'react'
import {View, Text} from 'react-native'
import * as SecureStore from 'expo-secure-store';
import ProfileHeader from './ProfileHeader'
import PhotoContainer from './PhotoContainer'
import { ScrollView } from 'react-native-gesture-handler';

export default function Profile() {
    // const token = SecureStore.getItemAsync("token")
    // console.log("stored token", token)
    // const id = SecureStore.getItemAsync("user_id")
    // console.log("stored id", id)
    // const name = SecureStore.getItemAsync("user_name")
    // console.log("stored name", name)

    const displayPhotos = () => {
        const photos = ["photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo"]
        return photos.map( photo => <PhotoContainer/> )
    }

    return(
        <View>
            <ScrollView>
                <ProfileHeader></ProfileHeader>
                <View style={{backgroundColor: 'hsl(198, 100%, 42%)', justifyContent: 'center', flex: 1, flexWrap: 'wrap', flexDirection: 'row', marginTop: 5,}}>
                    {displayPhotos()}
                </View>
            </ScrollView>
        </View>
    )
}