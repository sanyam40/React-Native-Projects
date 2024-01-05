import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>

        <View style={[styles.card,styles.elevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text>more</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text>...</Text>
        </View>

      </ScrollView>
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
        padding:8
    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
        
    },
    elevated:{
        backgroundColor:'#CAD5E2',
        elevation:4,
        shadowOffset:{
            width:1,
            height:2
        },
        shadowColor:'#EF5354',
        shadowOpacity:0.5,
        shadowRadius:2
    }
})