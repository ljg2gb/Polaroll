import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function ViewfinderNav({ navigation, buttonText }) {

    navigateTo = () => {
        navigation.navigate('LoginSignup'
            )
    }

    return (
        <View style={styles.navbar}>
            <TouchableHighlight
                underlayColor='none'
                navigation={navigation}
                onPress={this.navigateTo}
                style={styles.navButton}>
                    <View>
                        <Text style={styles.navButtonText}>{buttonText}</Text>
                    </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: 'transparent',
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
    },

    navButton: {
        padding: 3,
        paddingVertical: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderBottomColor: '#F04733',
        borderRightColor: '#ECA827',
        borderTopColor: '#85BC3D',
        borderLeftColor: '#3490CC',
        backgroundColor: 'white',
        alignSelf: 'center',
        flexWrap: 'wrap',

    },

    navButtonText: {
        fontFamily: 'HelveticaNeue-Bold'
    },
})