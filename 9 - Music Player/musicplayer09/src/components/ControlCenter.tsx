import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {playbackService} from '../../musicPlayerService'
import TrackPlayer, { PlaybackState, State, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function ControlCenter() {
  const playBackState=usePlaybackState();
  const prev="<   "
  const next="   >"
  const pause="|| "
  const play=">"

  const skipToNext=async()=>{
    await TrackPlayer.skipToNext();
  }
  const skipToPrevious=async()=>{
    await TrackPlayer.skipToPrevious();
  }
  const togglePlayBack=async(playback:PlaybackState | {state:undefined})=>{
    const currentTrack=await TrackPlayer.getActiveTrack();
    if(currentTrack!==null){
      if(playback.state===State.Paused || playback.state===State.Ready){
        await TrackPlayer.play();
      }
      else{
        await TrackPlayer.pause();
      }
    }
  }
  
  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
        <Text style={styles.control}>{prev} </Text>
      </Pressable>

      <Pressable onPress={() => togglePlayBack(playBackState)}>
            {
              playBackState.state=== State.Playing ?(<Text style={styles.control}>{pause}</Text>) : (<Text style={styles.control}>{play}</Text>)
            }
        </Pressable>

      <Pressable onPress={skipToNext}>
        <Text style={styles.control}>{next}</Text>
      </Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  control:{
    fontSize:40
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    marginHorizontal: 24,
  },
})