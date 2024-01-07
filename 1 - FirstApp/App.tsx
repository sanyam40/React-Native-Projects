import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, useColorScheme } from 'react-native';
import Hello from './components/Hello';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  // It is a custom hook that returns the current color scheme of the device.
  // useColorScheme() returns 'dark' or 'light' depending on the device's settings.

  return (
    <SafeAreaView>
      <View>
        <Text style={isDarkMode ? styles.dark : styles.white}>
          Hello World
        </Text>
      </View>
      <View>
        <Text>nnn</Text>
      </View>
      <Hello/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  white: {
    color: '#ffffff'
  },
  dark: {
    color: '#000000' 
  }
});

export default App;
