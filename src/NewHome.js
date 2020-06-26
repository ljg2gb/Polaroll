import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Button, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import CameraGraphic from './CameraGraphic'
import FadeInView from './FadeInView'
import NewCamera from './NewCamera'


{/* <View style={{flex: 1}}>
{this.state.photo ? this.displayPicture(this.state.photo) : null}
</View> */}


export default class NewHome extends Component {
    state = {
        cameraClicked: false,
        hasPermission: null,
        cameraType: Camera.Constants.Type.back,
        photo: null
    }

    handleClick = () => {
        this.takePicture()
        this.setState({ cameraClicked: !this.state.cameraClicked })
    }
    
    takePicture = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            this.setState({ photo })
        }
    }
    
    async componentDidMount() {
        this.getPermissionAsync()
    }  
    
    getPermissionAsync = async () => {
        // Camera roll Permission 
        if (Platform.OS === 'ios') {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
        // Camera Permission
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasPermission: status === 'granted' });
    }
    
    handleCameraType = () => {
        const { cameraType } = this.state
        this.setState({cameraType:
            cameraType === Camera.Constants.Type.back
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back
        })
    }
    
                    
    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });
    }
    
    displayFilm = () => {
        return (
            <View style={styles.photoPaper}>
                <FadeInView style={styles.photo}>
                <Image 
                style={{
                    width: '100%', 
                    height: '100%',
                    resizeMode: "contain"
                }}
                source={{
                    uri: this.state.photo.uri,
                }} ></Image>
                </FadeInView>
            </View>
        )
    }

    displayCamera = () => {
        const { hasPermission } = this.state
        if (hasPermission === null) {
            return <View />;
        } else if (hasPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ height: 320, width: '100%'}} >
                <Camera style={{flex: 1}}  type={this.state.cameraType} ref={ ref => { this.camera = ref }} >
                    <View style={{flex: 1, flexDirection:"row", justifyContent:"space-between", margin: 20}}>
                        <TouchableOpacity
                            style={{
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            backgroundColor: 'transparent',                  
                            }}
                            onPress={()=>this.pickImage()}
                            >
                            <Ionicons
                                name="ios-photos"
                                style={{ color: "#fff", fontSize: 40}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            backgroundColor: 'transparent',
                            }}
                            onPress={()=>this.takePicture()}
                            >
                            <FontAwesome
                                name="camera"
                                style={{ color: "#fff", fontSize: 40}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            backgroundColor: 'transparent',
                            }}
                            onPress={()=>this.handleCameraType()}
                            >
                            <MaterialCommunityIcons
                                name="camera-switch"
                                style={{ color: "#fff", fontSize: 40}}
                            />
                        </TouchableOpacity>
                    </View>
                </Camera>
                {/* <View style={{flex: 1}}>
                    {this.state.photo ? this.displayPicture(this.state.photo) : null}
                </View> */}
                </View>
            )
        }
    }

    render() {
        const { navigation } = this.props
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.cameraContainer}>
                <View style={styles.cameraViewfinder}></View>
                <View style={styles.cameraBody}>
                    <TouchableHighlight onPress={this.handleClick}>
                    <View style={styles.button} ></View>
                    </TouchableHighlight>
                    <View style={styles.lens}></View>
                </View>    
                <View style={styles.cameraBase}>
                    <View style={styles.printer}></View>
                </View>
                </View>
                <View style={styles.photoContainer}>
                {this.state.cameraClicked ? this.displayFilm() : this.displayCamera() }
                </View>  
            </View>
            <Button title={"Go to Animation"} onPress={ () => navigation.navigate('CameraAnimation')}/>
            <Button title={"Go to New Camera"} onPress={ () => navigation.navigate('NewCamera')}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fonts: {
    fontSize: 16,
    color: 'blue'
  },
  cameraContainer: {
    backgroundColor: 'hsl(168, 36%, 29%)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // height: '90%',
    width: '100%',
    padding: 20,
  },
  cameraViewfinder: {
    backgroundColor: 'hsl(43, 82%, 55%)',
    height: 30,
    width: 80,
  },
  cameraBody: {
    backgroundColor: 'hsl(194, 9%, 95%)',
    height: 150,
    width: 300,
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
    left: 100,
    top: 25,
    borderRadius: 50,
  },
  cameraBase: {
    backgroundColor: 'hsl(199, 82%, 55%)',
    height: 70,
    width: 300
  },
  printer: {
    backgroundColor: 'hsl(199, 82%, 24%)',
    height: 10,
    width: 250,
    position: 'absolute',
    left: 25,
    top: 30,
  },

  photoContainer: {
    backgroundColor: 'hsl(250, 36%, 29%)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    // padding: 20,
  },
  photoPaper: {
    backgroundColor: 'hsl(194, 9%, 95%)',
    height: 300,
    width: 230,
    margin: 20,
  },
  photo: {
    backgroundColor: 'hsl(199, 82%, 24%)',
    height: 220,
    width: 200,
    position: 'absolute',
    top: 15,
    left: 15,
  }
});




