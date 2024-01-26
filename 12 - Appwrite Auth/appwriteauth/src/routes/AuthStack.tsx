import React from 'react'

export type AuthStackParamList = {
    Signup:undefined;
    Login:undefined;
}

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signup from '../screens/Signup';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign:'center',headerBackTitleVisible:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  )
}

export default AuthStack

