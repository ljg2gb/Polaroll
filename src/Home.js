import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; 
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

import FadeInView from './FadeInView'
import TransitionDownView from './TransitionDownView'
import polaroid600 from '../assets/polaroid600.png'
import polroidOneStep from '../assets/polaroidOneStep.png'
import polaroidSX70 from '../assets/polaroidSX70.png'

const polaroids = [polroidOneStep, polaroid600, polaroidSX70]
let currentPolaroidIndex = 0

export default class Home extends Component {
    state = {
        photo: null,
        uniqueValue: 0
    }

    componentDidMount() {
        this.getPermissionAsync()
    }

    async componentDidUpdate() {
        this.setPhoto()
    }

    nextPolaroid = () => {
        if (currentPolaroidIndex === 2){
            currentPolaroidIndex = 0
        } else {
            currentPolaroidIndex = ++currentPolaroidIndex
        }
        this.setUniquenessValue()
    }
    
    backPolaroid = () => {
        if (currentPolaroidIndex === 0){
            currentPolaroidIndex = 2
        } else {
            currentPolaroidIndex = --currentPolaroidIndex
        }
        this.setUniquenessValue()
    }
    
    displayCurrentPolaroid = () => {
        return polaroids[currentPolaroidIndex]
    }

    setUniquenessValue = () => {
        this.setState({
            uniqueValue: this.state.uniqueValue + 1
        })
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
        const uri = this.state.photo.uri
        if (uri) {
            MediaLibrary.saveToLibraryAsync(uri)
            this.successfulSaveMessage()
        } else {
            alert('No photo selected!')
        }
    }

    successfulSaveMessage = () => {
        alert('Saved to Camera Roll!');
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

    render() {
        const { navigation, route } = this.props
        return (
            <View style={styles.main}>
                <ScrollView>
                    <View style={styles.cameraContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center', zIndex: 500}}>
                            <TouchableOpacity onPress={() => this.backPolaroid()} >
                                <AntDesign name="left" size={24} color="black" />
                            </TouchableOpacity>
                            <View style={styles.cameraBody}>
                                <View style={{ width: 300, height: 260, zIndex: 500,}} key={this.state.uniqueValue}>
                                    <Image style={{ width: '100%', height: '100%', resizeMode: "contain", zIndex: 500}} source={this.displayCurrentPolaroid()}></Image>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => this.nextPolaroid()} >
                                <AntDesign name="right" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TransitionDownView style={styles.photoPaper}>
                                <View style={styles.photoBase}></View>
                                <FadeInView style={styles.photo}>
                                    <Image style={styles.image} source={{ uri: route.params.photo.uri }} ></Image>
                                </FadeInView>
                            </TransitionDownView>
                        </View>
                    </View>
                </ScrollView>

                <View style={styles.navbar} >
                    <TouchableHighlight
                        style={styles.navButton}  
                        onPress={() => navigation.navigate('Viewfinder')}>
                        <View>
                            <Text>Retake Photo</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        style={styles.navButton}
                        onPress={this.saveToCameraRoll}>
                        <View>
                            <Text>Save to Camera Roll</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.navButton}
                        navigation={navigation}
                        onPress={this.navigate}>
                        <View>
                            <Text>Save to Polaroll</Text>
                        </View>
                    </TouchableHighlight>
                </View>
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
    },
    cameraBody: {
        zIndex: 500,
        backgroundColor: 'rgb(210,220,230)',
        height: 260,
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

    buttonText: {
        backgroundColor: 'transparent',
        fontSize: 18,
        fontFamily: "HelveticaNeue-Bold",
        color: '#fff',
    },

    navbar: {
        backgroundColor: 'red',
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    navButton: {
        textDecorationLine: 'underline'
    },

});




