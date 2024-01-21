import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {playbackService} from '../../musicPlayerService'
import TrackPlayer, { PlaybackState, State, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function ControlCenter() {
  const playBackState=usePlaybackState();

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
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>

      <Pressable onPress={() => togglePlayBack(playBackState)}>
            <Icon 
            style={styles.icon} 
            name={playBackState.state === State.Playing ? "pause" : "play-arrow"}
            size={75} />
        </Pressable>

      <Pressable onPress={skipToNext}>
        <Icon style={styles.icon} name="skip-next" size={40} />
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
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    marginHorizontal: 24,
  },
})