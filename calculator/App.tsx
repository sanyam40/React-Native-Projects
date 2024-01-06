import {StyleSheet} from 'react-native';
import React from 'react';
import { AppContextProvider } from './context/AppContext';
import Home from './components/Home';

export default function App() {

  return (
    <AppContextProvider>
      <Home/>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({});
