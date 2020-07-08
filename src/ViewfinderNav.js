import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class ViewfinderNav extends Component {

    navigateTo = () => {
        const { userInfo, navigation, photo } = this.props
        if (userInfo.token) {
            navigation.navigate('Profile', { userInfo } )
        } else {
            navigation.navigate('LoginSignup', { photo } )
        }
    }

    render() {
        const { navigation, buttonText } = this.props
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