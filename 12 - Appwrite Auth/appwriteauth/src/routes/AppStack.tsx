import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Home from '../screens/Home'

export type AppStackParamList = {
    Home:undefined;
}

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign:'center',headerBackTitleVisible:false}}>
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})