import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Button, Image } from 'react-native';

import FadeInView from './FadeInView'
import TransitionDownView from './TransitionDownView'


export default class Home extends Component {
    state = {
        photo: null,
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

    render() {
        const { navigation, route } = this.props
        return (
            <View style={styles.main}>
                <ScrollView>
                        <View style={styles.cameraContainer}>
                            <View style={styles.cameraViewfinder}></View>
                            <View style={styles.cameraBody}>
                                <View style={styles.button} ></View>
                                <View style={styles.lens}>
                                    <View style={styles.innerLens}></View>
                                </View>
                            </View>    
                            <View style={styles.cameraBase}>
                                <View style={styles.printer}></View>
                            </View>
                            <View style={styles.cameraBase2}>
                            </View>
                        {/* <View style={styles.photoContainer}> */}
                            <View>
                                <TransitionDownView style={styles.photoPaper}>
                                    <FadeInView style={styles.photo}>
                                        <Image style={styles.image} source={{ uri: route.params.photo.uri }} ></Image>
                                    </FadeInView>
                                </TransitionDownView>
                            </View>
                        {/* </View>   */}
                        {/* <Button title={"Go to Accelerometer"} onPress={ () => navigation.navigate('AccelerometerComponent')}/>
                        <Button title={"Go to Pedometer"} onPress={ () => navigation.navigate('PedometerComponent')}/> */}
                    </View>
                </ScrollView>
                        <Button title={"Save photo"} onPress={ () => navigation.navigate('LoginSignup')} />
                        <Button navigation={navigation} title={"Go to Login/Signup"} onPress={ () => navigation.navigate('LoginSignup')}/>
                        <Button navigation={navigation} title={"Viewfinder"} onPress={ () => navigation.navigate('Viewfinder')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'red',
    },
  fonts: {
    fontSize: 16,
    color: 'blue'
  },
  cameraContainer: {
    zIndex: 500,
    backgroundColor: 'rgb(210,220,230)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 70,
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
  button: {
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

  photoContainer: {
    backgroundColor: 'rgb(210,220,230)',
  },
  photoPaper: {
    position: 'absolute',
    top: -250,
    alignSelf: "center",
    backgroundColor: 'hsl(194, 9%, 95%)',
    height: 220,
    width: 180,
    margin: 20,
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
  }
});




