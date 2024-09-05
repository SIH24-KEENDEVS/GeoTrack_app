import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import {Marker} from 'react-native-maps';

export default function Myroute() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}  
    initialRegion={{
    latitude: 23.2504,
    longitude: 77.525,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}/>
  <Marker
        coordinate={{latitude:  23.2504, longitude: 77.525}}
        image={{uri:'https://i.pinimg.com/originals/fc/48/7b/fc487b390a02aa1e82be4c32dd53b0ab.jpg'}}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    
    width: '100%',
    height: '100%',
  },
});
