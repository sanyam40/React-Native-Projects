import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import {setupPlayer,addTrack} from "../musicPlayerService"

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
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})