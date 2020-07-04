import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import FadeInView from './FadeInView'
import TransitionDownView from './TransitionDownView'
import polaroid600 from '../assets/polaroid600.png'


export default class Home extends Component {
    state = {
        photo: null,
        animComplete: false,
    }

    completedAnimation = () => {
        this.setState({
            animComplete: true
        })
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

    setPhoto = () => {
        this.setState({
            photo: this.props.route.params.photo
        })
    }

    async componentDidUpdate() {
        this.setPhoto()
    }  

    displaySaveButton = () => {
        if (this.state.animComplete) {
            return (
                <TouchableHighlight
                    navigation={navigation}
                    onPress={ () => navigation.navigate('LoginSignup')}>
                    <LinearGradient
                        colors={['#F04733', '#F88517', '#F7B227', '#85BC3D','#3188C2']}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Save</Text>
                    </LinearGradient>
                </TouchableHighlight>
            );
        };
    }

    render() {
        const { navigation, route } = this.props
        return (
            <View style={styles.main}>
                <ScrollView>
                    <View style={styles.cameraContainer}>
                        <View style={styles.cameraBody}>
                            <View style={{ width: 300, height: 260, position: 'absolute', left: 25,}}>
                                <Image style={{ width: '100%', height: '100%', resizeMode: "contain"}} source={polaroid600}></Image>
                            </View>
                        </View>
                        <View>
                            <TransitionDownView style={styles.photoPaper}>
                                <View style={styles.photoBase}></View>
                                <FadeInView style={styles.photo} completedAnimation={this.completedAnimation}>
                                    <Image style={styles.image} source={{ uri: route.params.photo.uri }} ></Image>
                                </FadeInView>
                            </TransitionDownView>
                        </View>
                    </View>
                </ScrollView>
                <FadeInView>
                    <TouchableHighlight
                        navigation={navigation}
                        onPress={this.navigate}>
                        <LinearGradient
                            colors={['#F04733', '#F88517', '#F7B227', '#85BC3D','#3188C2']}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Save</Text>
                        </LinearGradient>
                    </TouchableHighlight>
                </FadeInView>
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
        zIndex: 500,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingTop: 10,
    },
    cameraBody: {
        zIndex: 500,
        backgroundColor: 'rgb(210,220,230)',
        // backgroundColor: 'red',
        height: 260,
        width: 360,
        
    },
    cameraButtons: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },

    photoPaper: {
        position: 'absolute',
        top: -275,
        alignSelf: "center",
        backgroundColor: 'hsl(194, 9%, 95%)',
        height: 220,
        width: 180,
        margin: 20,
    },

    photoBase: {
        backgroundColor: 'hsl(204, 5%, 65%)',
        height: 160,
        width: 160,
        position: 'absolute',
        top: 10,
        left: 10,
    },

    photo: {
        backgroundColor: 'hsl(199, 82%, 24%)',
        height: 160,
        width: 160,
        position: 'absolute',
        top: 10,
        left: 10,
    },
    image: {
        width: '100%', 
        height: '100%',
        resizeMode: "cover"
    },

    button: {
        width: 180,
        marginBottom: 15,
        padding: 15, 
        alignItems: 'center', 
        borderRadius: 5,
    },

buttonText: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontFamily: "HelveticaNeue-Bold",
    color: '#fff',
},
});




