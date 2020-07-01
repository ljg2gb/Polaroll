import React from 'react';
import {View} from "react-native";

export default function PhotoContainer() {

    return(
        <View style={{backgroundColor: 'white', height: 100, width: '22%', margin: 5}}>
            <View style={{backgroundColor: 'hsl(198, 100%, 12%)', height: 70, width: '90%', position: 'absolute', top: '5%', left: '5%', }}></View>
        </View>
    )
}