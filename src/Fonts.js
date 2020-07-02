import React from 'react';
import { useFonts, Inter_900Black } from '@use-expo/font';
import { Text, View } from 'react-native';
import { AppLoading } from 'expo';

export default function Fonts(props) {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Helvetica Neue', fontSize: 40 }}>Helvetica Neue</Text>
        <Text style={{fontFamily: 'Inter_900Black', fontSize: 40 }}>Inter 900 black</Text>
      </View>
    );
  }
};