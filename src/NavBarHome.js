import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import SaveToFirebase from './SaveToFirebase';

export default function NavBarHome({navigation, saveToCameraRoll, photo}) {

    return(
        <View style={styles.navbar}>
            <TouchableHighlight
                underlayColor='rgb(210,220,230)'
                style={styles.navButton}  
                onPress={() => navigation.navigate('Viewfinder')}>
                <View>
                    <Text style={styles.navButtonText}>Retake Photo</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight 
                underlayColor='rgb(210,220,230)'
                style={styles.navButton}
                onPress={saveToCameraRoll}>
                <View>
                    <Text style={styles.navButtonText}>Save to Camera Roll</Text>
                </View>
            </TouchableHighlight>
            <SaveToFirebase navigation={navigation} photo={photo} ></SaveToFirebase>
        </View>
    )
}

const styles = StyleSheet.create({

    navbar: {
        backgroundColor: 'transparent',
        width: '100%',
        height: 58,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
    },

    navButton: {
        backgroundColor: 'white',
        padding: 2,
        paddingVertical: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderBottomColor: '#F04733',
        borderRightColor: '#ECA827',
        borderTopColor: '#85BC3D',
        borderLeftColor: '#3490CC',
        alignSelf: 'center',
        flexWrap: 'wrap',

    },

    navButtonText: {
        fontFamily: 'HelveticaNeue-Bold'
    },
})