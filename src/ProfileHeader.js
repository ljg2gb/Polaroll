import React from 'react';
import {View, Text} from "react-native";

export default function ProfileHeader() {

    return(
        <View style={{backgroundColor: 'skyblue', width: '100%',}}>
            <Text style={{fontSize: 30, alignSelf: 'center', margin: 15,}}>Hi Meredith!</Text>
        </View>
    )
}