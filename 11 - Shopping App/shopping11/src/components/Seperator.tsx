import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Seperator = () => {
  return (
    <View style={styles.seprator}> 
    </View>
  )
}

export default Seperator

const styles = StyleSheet.create({
    seprator: {
        height: 0.8,
        backgroundColor: '#CAD5E2'
    }
})