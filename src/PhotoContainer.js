import React from 'react';
import {View} from "react-native";

export default function PhotoContainer() {

    return(
        <View style={{backgroundColor: 'rgb(50, 60, 200)', height: 130, width: 110}}>
            <View style={{backgroundColor: 'rgb(245, 230, 240)', height: 100, width: 100, position: 'absolute', top: 5, left: 5, }}></View>
        </View>
    )
}