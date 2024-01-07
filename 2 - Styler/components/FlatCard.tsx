import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Card</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card,styles.cardtwo]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card,styles.cardthree]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardthree]}>
            <Text>Blue</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:50,
        fontWeight:'bold',
        alignSelf:'center'
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:8,
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8
    },
    cardOne:{
        backgroundColor:'#EF5354'
    },
    cardtwo:{
        backgroundColor:'#50DBB4'
    },
    cardthree:{
        backgroundColor:'#5DA3FA'
    },
})