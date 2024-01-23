import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

type IconProps = PropsWithChildren<{
    name: string;
}>

export default function Icons({name}: IconProps) {
    switch (name) {
        case 'circle':
            return <Icon name="circle-thin" size={38} color="#F7CD2E" />;
        case 'cross':
            return <Icon name="times" size={45} color="#38CC77" />;
        default:
            return <Icon name="pencil" size={45} color="#38CC77" />;
    }
  return (
    <View>
      <Text>Icons</Text>
    </View>
  )
}

const styles = StyleSheet.create({})