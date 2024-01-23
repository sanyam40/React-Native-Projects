import { ImageSourcePropType, StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import type { PropsWithChildren } from 'react'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

import DiceOne from '../assests/One.png'
import DiceTwo from '../assests/Two.png'
import DiceThree from '../assests/Three.png'
import DiceFour from '../assests/Four.png'
import DiceFive from '../assests/Five.png'
import DiceSix from '../assests/Six.png'

type DiceProps=PropsWithChildren<{
  imageUrl:ImageSourcePropType
}>

const Dice=({imageUrl}:DiceProps):JSX.Element=>{
  return(
    <View>
      <Image source={imageUrl} style={styles.diceImage}/>
    </View>
  )
}

export default function App() {
  const[diceImg,setDiceImg]=useState<ImageSourcePropType>(DiceOne);

  function rollDice(){
    let randomNumber=Math.floor(Math.random()*6)+1;
    switch(randomNumber){
      case 1:
        setDiceImg(DiceOne);
        break;
      case 2:
        setDiceImg(DiceTwo);
        break;
      case 3:
        setDiceImg(DiceThree);
        break;
      case 4:
        setDiceImg(DiceFour);
        break;
      case 5:
        setDiceImg(DiceFive);
        break;
      case 6:
        setDiceImg(DiceSix);
        break;
      default:
        setDiceImg(DiceOne);
        break;
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImg}/>
      <Pressable onPress={rollDice}>
        <Text style={styles.rollDiceBtnText}>Roll Dice</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FFF2F2',
},
diceContainer: {
  margin: 12,
},
diceImage: {
  width: 200,
  height: 200,
},
rollDiceBtnText: {
  paddingVertical: 10,
  paddingHorizontal: 40,
  borderWidth: 2,
  borderRadius: 8,
  borderColor: '#E5E0FF',
  fontSize: 16,
  color: '#8EA7E9',
  fontWeight: '700',
  textTransform: 'uppercase',
},
});