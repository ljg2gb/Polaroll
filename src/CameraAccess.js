import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraAccess() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref => { this.camera = ref;}} > 
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

// import React from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import { Camera, Permission } from 'expo';

// export default class CameraPage extends React.Component {
//     camera = null;

//     state = {
//         hasCameraPermission: null,
//     };

//     async componentDidMount() {
//         const camera = await Permission.askAsync(Permissions.CAMERA);
//         const audio = await Permission.askAsync(Permissions.AUDIO_RECORDING);
//         const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');

//         this.setState({ hasCameraPermission });
//     };

//     render() {
//         const { hasCameraPermission } = this.state;

//         if (hasCameraPermission === null) {
//             return <View />;
//         } else if (hasCameraPermission === false) {
//             return <Text>Access to camera has been denied.</Text>;
//         }

//         return (
//             <View>
//                 <Camera
//                     style={styles.preview}
//                     ref={camera => this.camera = camera}
//                 />
//             </View>
//         );
//     };
// };

// const { width: winWidth, height: winHeight } = Dimensions.get('window');
// const styles = StyleSheet.create({
//     preview: {
//         height: winHeight,
//         width: winWidth,
//         position: 'absolute',
//         left: 0,
//         top: 0,
//         right: 0,
//         bottom: 0,
//     },
// });