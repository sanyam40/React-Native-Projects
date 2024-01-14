import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App():JSX.Element {
  const[randomBackground,setrandomBackground]=useState("#ffffff");

  const generateColor=()=>{
    const hexRange="0123456789ABCDEF";
    let color="#";

    for (let index = 0; index < 6; index++) {
      color+=hexRange[Math.floor(Math.random()*16)];
    }
    setrandomBackground(color);
  }

  return (
    <>
    <StatusBar backgroundColor={randomBackground}/>
    <View style={[styles.container,{backgroundColor:randomBackground}]}>
      <TouchableOpacity onPress={generateColor}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnTxt}>Press me</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  actionBtn:{
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical:10,
    paddingHorizontal:40
  },
  actionBtnTxt:{
    fontSize:24,
    color:"#FFFFFF",
    textTransform:"uppercase"
  }
})