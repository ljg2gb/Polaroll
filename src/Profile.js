import React from 'react'
import {View, Text} from 'react-native'
import * as SecureStore from 'expo-secure-store';

export default function Profile() {
    const token = SecureStore.getItemAsync("token")
    console.log("stored token", token)
    const id = SecureStore.getItemAsync("user_id")
    console.log("stored id", id)
    const name = SecureStore.getItemAsync("user_name")
    console.log("stored name", name)

    return(
        <View>
            <Text>Profile Page</Text>
            {token ? <Text>My photos</Text> : null}
            {/* <Text>User's id is ${id}</Text>
            <Text>User's name is ${name}</Text> */}
        </View>
    )
}