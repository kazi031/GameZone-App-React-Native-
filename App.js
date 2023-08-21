import React from 'react';
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import Home from './screens/home';
import Navigator from './routes/homeStack';

export default function App() {
  const [fontsLoaded] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading fonts...</Text>
      </View>
    );
  } else {
    return (
      <Navigator />
    );
  }
}