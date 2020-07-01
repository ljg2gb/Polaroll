import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Button, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import FadeInView from './FadeInView'


export default class Home extends Component {
    state = {
        cameraClicked: false,
        hasPermission: null,
        cameraType: Camera.Constants.Type.back,
        photo: null,
        // user_id: '',
        // user_name: ''
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
        console.log(this.props.route.params.photo)
        this.setState({
            photo: this.props.route.params.photo
        })
    }

    async componentDidMount() {
        // this.getPermissionAsync()
        this.setPhoto()
    }  

    render() {
        const { navigation } = this.props
        return (
            <ScrollView>
                <View style={styles.container}>
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
                    </View>
                    <View style={styles.photoContainer}>
                        <View>
                            <View style={styles.photoPaper}>
                                <FadeInView style={styles.photo}>
                                    <Image style={styles.image} source={{ uri: this.props.route.params.photo.uri }} ></Image>
                                </FadeInView>
                            </View>
                            <Button title={"Save photo"} onPress={ () => this.props.navigation.navigate('LoginSignup')} />
                        </View>
                    </View>  
                </View>
                <Button navigation={navigation} title={"Go to Login/Signup"} onPress={ () => navigation.navigate('LoginSignup')}/>
                <Button navigation={navigation} title={"Viewfinder"} onPress={ () => navigation.navigate('Viewfinder')}/>
                {/* <Button title={"Go to Accelerometer"} onPress={ () => navigation.navigate('AccelerometerComponent')}/>
                <Button title={"Go to Pedometer"} onPress={ () => navigation.navigate('PedometerComponent')}/> */}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fonts: {
    fontSize: 16,
    color: 'blue'
  },
  cameraContainer: {
    backgroundColor: 'rgb(210,220,230)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // height: '90%',
    width: '100%',
    padding: 20,
  },
  cameraViewfinder: {
    backgroundColor: 'hsl(43, 82%, 55%)',
    height: 15,
    width: 60,
  },
  cameraBody: {
    backgroundColor: 'hsl(194, 9%, 95%)',
    height: 150,
    width: 250,
  },
  button: {
    backgroundColor: 'hsl(6, 87%, 42%)',
    height: 30,
    width: 30,
    position: 'absolute',
    left: 20,
    top: 20,
    borderRadius: 50,
  },
  lens: {
    backgroundColor: 'hsl(43, 82%, 55%)',
    height: 100,
    width: 100,
    position: 'absolute',
    left: 75,
    top: 25,
    borderRadius: 50,
  },
  innerLens: {
    backgroundColor: 'hsl(43, 82%, 20%)',
    height: 80,
    width: 80,
    position: 'absolute',
    left: 10,
    top: 10,
    borderRadius: 50,
  },
  cameraBase: {
    backgroundColor: 'hsl(199, 82%, 55%)',
    height: 50,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 20,
  },
  photoPaper: {
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




