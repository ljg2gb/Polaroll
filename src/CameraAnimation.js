import React from 'react';
import { View, Text, Button } from 'react-native';

export default function CameraAnimation({navigation}) {
    return(
        <View>
            <Text>Camera Animation</Text>
            <Button title={"Go to Home"} onPress={ () => navigation.navigate('Home') } />
            <Button title={"Go to CameraAccess"} onPress={ () => navigation.navigate('CameraAccess') } />
        </View>
    )

}