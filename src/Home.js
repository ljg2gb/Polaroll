import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

import PolaroidGraphic from './PolaroidGraphic'
import FilmPrint from './FilmPrint'
import NavBarHome from './NavBarHome'

export default class Home extends Component {
    
    componentDidMount() {
        this.getPermissionAsync()
    }

    getPermissionAsync = async () => {
        if (Platform.OS === 'ios') {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasPermission: status === 'granted' });
    }
    
    saveToCameraRoll = () => {
        const { uri } = this.props.route.params.photo
        if (uri) {
            MediaLibrary.saveToLibraryAsync(uri)
            alert('Saved to Camera Roll!')
        } else {
            alert('No photo selected!')
        }
    }

    navigate = () => {
        const {userInfo} = this.props.route.params;
        const { navigation } = this.props;
        if (userInfo.token) {
            navigation.navigate('Profile', { userInfo })
        } else {
            navigation.navigate('LoginSignup')
        }
    }

    uploadToFirebase = () => {
        const { photo } = this.props.route.params
        const { navigation } = this.props
        navigation.navigate('SaveToFirebase', { photo })
    }
 

    render() {
        const { navigation, route } = this.props
        return (
            <View style={styles.main}>

                <ScrollView>
                    <View style={styles.cameraContainer}>
                        <PolaroidGraphic/>
                        <FilmPrint localLink={route.params.photo.uri}/>
                    </View>
                </ScrollView>

                <NavBarHome 
                    navigation={navigation} 
                    uploadToFirebase={this.uploadToFirebase} 
                    navigate={this.navigate} 
                    saveToCameraRoll={this.saveToCameraRoll}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'rgb(210,220,230)',
        alignItems: 'center',
    },

    cameraContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingTop: 10,
    }
});




