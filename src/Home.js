import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, Text, Button } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; 


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
        animComplete: false,
        uniqueValue: 0,
        currentPolaroidIndex: 0
    }
    
    completedAnimation = () => {
        this.setState({
            animComplete: true
        })
    }

    nextPolaroid = () => {
        if (currentPolaroidIndex === 2){
            currentPolaroidIndex = 0
        } else {
            currentPolaroidIndex = ++currentPolaroidIndex
        }
        this.setUniquenessValue()
    }
    
    setUniquenessValue = () => {
        this.setState({
            uniqueValue: this.state.uniqueValue + 1
        })
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
        const { currentPolaroidIndex } = this.state
        return (
            <View style={styles.main}>
                <ScrollView>
                    <View style={styles.cameraContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center', zIndex: 500}}>
                            <TouchableOpacity  onPress={() => this.backPolaroid()} >
                                <AntDesign name="left" size={24} color="black" />
                            </TouchableOpacity>
                            <View style={styles.cameraBody}>
                                <View style={{ width: 300, height: 260, zIndex: 500,}} key={this.state.uniqueValue}>
                                    <Image style={{ width: '100%', height: '100%', resizeMode: "contain", zIndex: 500}} source={this.displayCurrentPolaroid()}></Image>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.cameraButtons} onPress={() => this.nextPolaroid()} >
                                <AntDesign name="right" size={24} color="black" />
                            </TouchableOpacity>
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

                <View style={styles.navbar} >
                    <TouchableHighlight  
                        onPress={() => navigation.navigate('Viewfinder')}>
                        <View>
                            <Text>Retake Photo</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight >
                        <View>
                            <Text>Save to Camera Roll</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        navigation={navigation}
                        onPress={this.navigate}>
                        <View>
                            <Text>Save to Polaroll</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                {/* <FadeInView>
                    <TouchableHighlight
                        navigation={navigation}
                        onPress={this.navigate}>
                        <LinearGradient
                            colors={['#F04733', '#F88517', '#F7B227', '#85BC3D','#3188C2']}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Save</Text>
                        </LinearGradient>
                    </TouchableHighlight>
                </FadeInView> */}
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

    navbar: {
        backgroundColor: 'red',
        width: '100%',
        height: 50,
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
        // alignItems: 'space-between'

    },

    // polaroidBackArrow: {
    //     zIndex: 1000,
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    // },

});




