import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ProfileHeader({navigation}) {

    const handleLogout = () => {
        navigation.navigate('Viewfinder')
    }

    const handleRetake = () => {
        navigation.navigate('Viewfinder')
    }

    return(
        <View style={styles.welcomeContainer}>
            {/* <Text style={styles.welcome}>{this.props.name}</Text> */}
            <Text style={styles.welcome}>Lydia</Text>

            <TouchableOpacity onPress={handleLogout}>
                <Text style={styles.logout}>Logout</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleRetake}>
                <Text style={styles.logout}>Retake Photo</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    welcomeContainer: {
        backgroundColor: '#282C34',
        paddingVertical: 20,
        paddingHorizontal: 15,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    welcome: {
        fontFamily: 'HelveticaNeue',
        fontSize: 30,
        color: 'white'

    },

    logout: {
        fontFamily: 'Courier',
        color: '#F7B227',
        textDecorationLine: 'underline'

    }
})