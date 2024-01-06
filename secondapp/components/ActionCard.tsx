import {Image, Linking, ScrollView, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink).catch(err=>console.error("Couldn't load page",err));
    }
  return (
    <View>
      <Text style={styles.heading}>Blog Card</Text>
      <ScrollView horizontal={true} style={styles.card}>
        <View style={styles.headingContainer}>
            <Text style={styles.headingContainer}>
                What's New
            </Text>
        </View>
        <Image 
        source={{

        }} style={styles.image}/>
      </ScrollView>
      <View style={styles.bodyContainer}>
        <Text numberOfLines={3}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, sapiente sequi dolorum deserunt hic sed eligendi eveniet perferendis voluptate sunt odit voluptatem, officiis id, nisi similique cupiditate! Itaque, tenetur eos.
        </Text>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={()=>openWebsite('https://google.com/')}>
          <Text>Read More</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>openWebsite('https://google.com/')}>
          <Text>Follow Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    heading:{

    },
    card:{

    },
    headingContainer:{

    }, 
    image:{
      height:100,
    },
    bodyContainer:{

    },
    footerContainer:{

    }
});
