import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/Home'
import LoginSignup from './src/LoginSignup'
import Profile from './src/Profile'
import Viewfinder from './src/Viewfinder'
import SaveToFirebase from './src/SaveToFirebase'

const Stack = createStackNavigator();
console.disableYellowBox = true

export default function App() {
    

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={"Viewfinder"} component={Viewfinder} options={{ title: 'Take Photo' }} />
          <Stack.Screen name={"Home"} component={Home} options={{ title: 'Print Photo' }}/>
          <Stack.Screen name={"LoginSignup"} component={LoginSignup} options={{ title: 'Login or Signup' }}/>
          <Stack.Screen name={"Profile"} component={Profile} options={{ title: 'My Profile' }} />
          <Stack.Screen name={"SaveToFirebase"} component={SaveToFirebase} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
