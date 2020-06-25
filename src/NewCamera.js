import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default class NewCamera extends Component {

    state = {
        hasPermission: null,
        cameraType: Camera.Constants.Type.back,
        // photo: null
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

    takePicture = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            this.props.takePicture(photo)
        }
    }

    // displayPicture = (photo) => {
    //     return(
    //         <Image 
    //         style={{
    //             width: '100%', 
    //             height: '100%',
    //             resizeMode: "contain"
    //         }}
    //         source={{
    //             uri: photo.uri,
    //         }} ></Image>
    //     )
    // }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });
      }

    render() {
        const { hasPermission } = this.state
        if (hasPermission === null) {
          return <View />;
        } else if (hasPermission === false) {
          return <Text>No access to camera</Text>;
        } else {
          return (
              <View style={{ height: 320, width: '100%'}} >
                <Camera style={{flex: 1}}  type={this.state.cameraType} ref={ ref => { this.camera = ref }} >
                    <View style={{flex: 1, flexDirection:"row", justifyContent:"space-between", margin:20}}>
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
          );
        }
    }   

}


