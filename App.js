import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import CameraAnimation from './src/CameraAnimation';
import NewCamera from './src/NewCamera';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={Home}/>
        <Stack.Screen name={"CameraAnimation"} component={CameraAnimation} />
        <Stack.Screen name={"NewCamera"} component={NewCamera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colors: {
    // purple
    color: 'hsl(276, 29%, 55%)', 
    // red
    color: 'hsl(4, 85%, 63%)',
    // orange
    color: 'hsl(32, 82%, 51%)',
    // yellow
    color: 'hsl(47, 100%, 51%)',
    // green
    color: 'hsl(132, 41%, 59%)',
    // blue
    color: 'hsl(198, 100%, 42%)',
    
  }
});

