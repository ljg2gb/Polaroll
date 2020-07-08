import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


import { globalStyles } from '../styles/global';
import ViewfinderNav from './ViewfinderNav';

export default class Viewfinder extends Component {
    state = {
        cameraClicked: false,
        hasPermission: null,
        cameraType: Camera.Constants.Type.back,
        photo: null,
        buttonText: 'Login or Signup',
        welcomeMessage: 'Welcome to',
        userInfo: {},
    }

    async componentDidMount() {
        this.getFromSecureStore()
        this.getPermissionAsync()
    }
    
    componentDidUpdate() {
        if (this.state.photo) {
            this.navigateToHome()
        };
    }

    checkForUserInfo = () => {
        if(this.props.route.params.userInfo) {
            this.setDynamicContent(this.props.route.params.userInfo)
        }
        else {
            this.getFromSecureStore()
        }
    }

    getFromSecureStore = async () => {
        try {
            const credentials = await SecureStore.getItemAsync('userInfo');
            if (credentials) {
                const userInfo = JSON.parse(credentials);
                if (userInfo.token) {
                    this.setDynamicContent(userInfo)
                } else {
                    this.resetGenericContent()
                }
            } else {
                this.resetGenericContent()
            }
        } catch (e) {
            console.log(e);
        }
    }
    
    setDynamicContent = (userInfo) => {
        this.setState({
            userInfo,
            buttonText: 'Go to My Profile',
            welcomeMessage: `Hi ${userInfo.user_name} welcome back!`
        })
    };

    resetGenericContent = () => {
        this.setState({
            buttonText: 'Login or Signup',
            welcomeMessage: 'Welcome to'
        })
    }

    navigateToHome = () => {
        this.props.navigation.navigate('Home', { 
            photo: this.state.photo,
            userInfo: this.state.userInfo
        })
    }
    
    takePicture = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            this.setState({ photo })
        }
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
        this.setState({ photo: result });
    }
    
    render() {
        const { hasPermission, cameraType, welcomeMessage } = this.state;
        const { navigation } = this.props;
        if (hasPermission === null) {
            return <View />;
        } else if (hasPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={styles.mainContainer}>
                    <View style={{flex: 1}}>
                        <Text style={styles.intro} >{welcomeMessage}</Text>
                        <Text style={globalStyles.h1} >Polaroll</Text>
                    </View>

                    <Camera style={styles.viewfinder}  type={cameraType} ref={ ref => { this.camera = ref }} >
                        <View style={styles.iconContainer}>

                            <TouchableOpacity style={styles.cameraButtons} onPress={()=>this.pickImage()} >
                                <Ionicons name="ios-photos" style={styles.sideIcon} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.cameraButtons} onPress={this.takePicture} >
                                <FontAwesome name="circle" style={styles.circleButton} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.cameraButtons} onPress={()=>this.handleCameraType()} >
                                <MaterialCommunityIcons name="camera-switch" style={styles.sideIcon} />
                            </TouchableOpacity>

                        </View>
                    </Camera>

                    <ViewfinderNav 
                        navigation={navigation} 
                        userInfo={this.state.userInfo}
                        buttonText={this.state.buttonText}
                        photo={this.state.photo}
                    ></ViewfinderNav>
           
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    mainContainer: { 
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
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

    button: {
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
    intro: {
        fontFamily: 'Courier',
        color: 'white',
        fontSize: 18,
        marginTop: 20,
        textAlign: 'center'

    },
    
});




