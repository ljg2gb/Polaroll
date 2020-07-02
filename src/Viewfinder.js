import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


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
                <View style={styles.mainContainer} >
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
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    mainContainer: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'hsl(240, 90%, 3%)',
        // height: 320, 
        width: '100%'
    },

    viewfinder: {
        // flex: 1,
        position: 'absolute',
        top: 12,
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




