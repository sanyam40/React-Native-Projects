import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TrackPlayer ,{Event,Track,useTrackPlayerEvents} from 'react-native-track-player'
import { playListData } from '../constant'
import SongInfo from '../components/SongInfo'
import SongsSlider from '../components/SongsSlider'
import ControlCenter from '../components/ControlCenter'

const {width}=Dimensions.get('window')


export default function MusicPlayer() {
    const [track,setTrack]=useState<Track | null>();

    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async (event) => {
      switch (event.type) {
          case Event.PlaybackActiveTrackChanged:
              if (event.track) {
                  setTrack(event.track);
              }
              break;
      }
  });
    const renderArtWork=()=>{
        return(
            <>
            <View style={styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    {track?.artwork && (
                        <Image style={styles.albumArtImg} source={{uri:track?.artwork?.toString()}}>

                        </Image>
                    )}
                </View>
            </View>      
            </>
        )
    }



  return (
<View style={styles.container}>
        <FlatList
        horizontal
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={song => song.id.toString()}
        />

        <SongInfo track={track}/>
        <SongsSlider />
        <ControlCenter />
    </View>  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#001d23',
    },
    listArtWrapper: {
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    albumContainer: {
      width: 300,
      height: 300,
    },
    albumArtImg: {
      height: '100%',
      borderRadius: 4,
    },
  });