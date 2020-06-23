import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Animated } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


export default class App extends Component {
  state = {
   develop: 0
  }

  fadeInView = () => {
    // console.log(this.state.develop)
  }

  // componentDidMount() {
  //   this.FadeInView
  // }

  render(){
    return (
      <NavigationContainer>
        <ScrollView>
          <View style={styles.container}>
            <Text>Notorious Native App</Text>
            <View style={styles.cameraContainer}>
              <View style={styles.cameraViewfinder}></View>
              <View style={styles.cameraBody}>
                <View style={styles.button}></View>
                <View style={styles.lens}></View>
              </View>
              <View style={styles.cameraBase}>
                <View style={styles.printer}></View>
              </View>
            <View style={styles.photoPaper}>
              <View style={styles.photo}></View>
            </View>
            </View>
          </View>
        </ScrollView>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: '90%',
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
