import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { globalStyles } from '../styles/global';


export default class Viewfinder extends Component {
    state = {
        cameraClicked: false,
        hasPermission: null,
        cameraType: Camera.Constants.Type.back,
        photo: null,
    }

    componentDidUpdate() {
        if (this.state.photo) {
            this.navigateToHome()
        }
    }

    navigateToHome = () => {
        this.props.navigation.navigate('Home', { 
            photo: this.state.photo 
        })
    }

    handleClick = () => {
        this.takePicture()
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
        if (Platform.OS === 'ios') {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
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
        this.setState({ photo: result })
    }
    
    render() {
        const { hasPermission, cameraType } = this.state
        if (hasPermission === null) {
            return <View />;
        } else if (hasPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                    <LinearGradient colors={['#6a5299','#f25851', '#f76b2b', '#ffc53d', '#80cb5f','#79b8c6']}
                        style={{
                            height: '100%',
                            width: '100%',
                            flex: 1,
                            alignItems: 'center',
                        }}>
                        <Text style={globalStyles.h1} >Welcome to Polaroll!</Text>
                        <Camera style={styles.viewfinder}  type={cameraType} ref={ ref => { this.camera = ref }} >
                            <View style={styles.iconContainer}>
                                <TouchableOpacity style={styles.cameraButtons} onPress={()=>this.pickImage()} >
                                    <Ionicons name="ios-photos" style={styles.sideIcon} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.cameraButtons} onPress={this.handleClick} >
                                    <FontAwesome name="circle" style={styles.circleButton} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.cameraButtons} onPress={()=>this.handleCameraType()} >
                                    <MaterialCommunityIcons name="camera-switch" style={styles.sideIcon} />
                                </TouchableOpacity>
                            </View>
                        </Camera>
                    </LinearGradient>
            )
        }
    }
}

const styles = StyleSheet.create({
    mainContainer: { 
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'hsl(240, 90%, 3%)',
        height: '100%',
    },

    viewfinder: {
        flex: 1,
        position: 'absolute',
        top: 130,
        width: 350,
        height: 350,
    },

    iconContainer: {
        flex: 1, 
        flexDirection:"row", 
        justifyContent:"space-between", 
        margin: 20
    },

    sideIcon: { 
        color: "#fff", 
        fontSize: 30
    },

    circleButton: {
        color: "red", 
        fontSize: 40
    },

    cameraButtons: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },

});




