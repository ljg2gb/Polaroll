import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/Home'
import LoginSignup from './src/LoginSignup'
import AccelerometerComponent from './src/AccelerometerComponent'
import PedometerComponent from './src/PedometerComponent'
import Profile from './src/Profile'
import Viewfinder from './src/Viewfinder'
import UploadPhotoToFirebase from './src/Viewfinder'

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Viewfinder"} component={Viewfinder} options={{ title: 'Viewfinder' }} />
        <Stack.Screen name={"Home"} component={Home} options={{ title: 'Polaroll - the Polaroid Camera App' }}/>
        <Stack.Screen name={"LoginSignup"} component={LoginSignup} options={{ title: 'Login or Signup' }}/>
        <Stack.Screen name={"AccelerometerComponent"} component={AccelerometerComponent} />
        <Stack.Screen name={"PedometerComponent"} component={PedometerComponent} />
        <Stack.Screen name={"Profile"} component={Profile} options={{ title: 'My Profile' }} />
        <Stack.Screen name={"UploadPhotoToFirebase"} component={UploadPhotoToFirebase} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
