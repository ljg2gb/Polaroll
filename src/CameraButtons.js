import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function CameraButtons({pickImage, takePicture, handleCameraType}) {
    
    return(
        <View style={styles.iconContainer}>

            <TouchableOpacity style={styles.cameraButtons} onPress={pickImage} >
                <Ionicons name="ios-photos" style={styles.sideIcon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.cameraButtons} onPress={takePicture} >
                <FontAwesome name="circle" style={styles.circleButton} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.cameraButtons} onPress={handleCameraType} >
                <MaterialCommunityIcons name="camera-switch" style={styles.sideIcon} />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        flex: 1, 
        flexDirection:"row", 
        justifyContent:"space-between", 
        margin: 20
    },

    sideIcon: { 
        color: "#fff", 
        fontSize: 30
    },

    circleButton: {
        color: "red", 
        fontSize: 40
    },

    cameraButtons: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
})