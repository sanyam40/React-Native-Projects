import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from "../App"

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">

const Home = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home</Text>
      {/* <Button title="Go to Details" onPress={()=>navigation.navigate("Details", {productId: "123"})}/> */}
      <Button title="Go to Details" onPress={()=>navigation.push("Details", {productId: "123"})}/>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    smallText:{
        color:"#000000"
    }
})