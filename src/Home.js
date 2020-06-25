import React, { Component, useRef, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, Animated, Button } from 'react-native';
import FadeInView from './FadeInView'
import NewCamera from './NewCamera'



export default class Home extends Component {
  state = {
   cameraClicked: false
  }

  handleClick = () => {
    this.setState({ cameraClicked: true })
  }

  displayCamera = () => {
    return <NewCamera/>
  }

  displayFilm = () => {
    return (
      <View style={styles.photoPaper}>
        <FadeInView style={styles.photo}></FadeInView>
      </View>
    )
  }

  render(){
    const { navigation } = this.props
    return (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.cameraContainer}>
              <View style={styles.cameraViewfinder}></View>
              <View style={styles.cameraBody}>
                <TouchableHighlight style={styles.button} onPress={this.handleClick}></TouchableHighlight>
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
    padding: 20,
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
