import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import {setupPlayer,addTrack} from "../musicPlayerService"
import MusicPlayer from './screens/MusicPlayer';

export default function App() {
  const [isPlayerReady,setisPlayerReady]=useState<Boolean>(false);

  async function setup(){
    const isSetup=await setupPlayer();
    if(isSetup){
      await addTrack();
    }
    setisPlayerReady(isSetup); 
  }

  useEffect(()=>{
    setup();
  },[])

  if(!isPlayerReady){
    return (
      <SafeAreaView>
        <ActivityIndicator/> 
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
     <StatusBar barStyle={"light-content"}/>
     <MusicPlayer/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})