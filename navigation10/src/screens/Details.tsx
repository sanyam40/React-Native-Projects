import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details</Text>
    </View>
  )
}

export default Details

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