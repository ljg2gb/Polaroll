import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import FadeInView from './FadeInView'
import TransitionDownView from './TransitionDownView'


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

    // setUser = (id, name) => {
    //     this.setState({
    //         user_id: id,
    //         user_name: name
    //     })
    //     console.log("name", name)
    //     console.log("id", id)
    // }

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
                            <View style={styles.cameraViewfinder}></View>
                            <View style={styles.cameraBody}>
                                <View style={styles.cameraButton} ></View>
                                <View style={styles.lens}>
                                    <View style={styles.innerLens}></View>
                                </View>
                            </View>    
                            <View style={styles.cameraBase}>
                                <View style={styles.printer}></View>
                            </View>
                            <View style={styles.cameraBase2}>
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
                        onPress={ () => navigation.navigate('LoginSignup')}>
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
  fonts: {
    fontSize: 16,
    color: 'blue'
  },
  cameraContainer: {
    zIndex: 500,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 40,
  },
  cameraViewfinder: {
    zIndex: 500,
    backgroundColor: 'hsl(43, 82%, 55%)',
    height: 15,
    width: 60,
  },
  cameraBody: {
    zIndex: 500,
    backgroundColor: 'hsl(194, 9%, 95%)',
    height: 150,
    width: 250,
  },
  cameraButton: {
    zIndex: 500,
    backgroundColor: 'hsl(6, 87%, 42%)',
    height: 30,
    width: 30,
    position: 'absolute',
    left: 20,
    top: 20,
    borderRadius: 50,
  },
  lens: {
    zIndex: 500,
    backgroundColor: 'hsl(43, 82%, 55%)',
    height: 100,
    width: 100,
    position: 'absolute',
    left: 75,
    top: 25,
    borderRadius: 50,
  },
  innerLens: {
    zIndex: 500,
    backgroundColor: 'hsl(43, 82%, 20%)',
    height: 80,
    width: 80,
    position: 'absolute',
    left: 10,
    top: 10,
    borderRadius: 50,
  },
  cameraBase: {
    zIndex: 500,
    backgroundColor: 'hsl(199, 82%, 55%)',
    height: 25,
    width: 250
  },
  cameraBase2: {
    backgroundColor: 'hsl(199, 82%, 55%)',
    height: 25,
    width: 250
  },
  printer: {
    backgroundColor: 'hsl(199, 82%, 24%)',
    height: 6,
    width: 200,
    position: 'absolute',
    left: 25,
    top: 22,
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
    marginBottom: 35,
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




