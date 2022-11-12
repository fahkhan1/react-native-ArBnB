import { StyleSheet, Text, TouchableOpacity, View ,Image,Alert} from 'react-native'
import React,{Component, useState} from 'react'
import MapView, { PROVIDER_GOOGLE,Marker,Callout,Polygon,Polyline,} from 'react-native-maps';


const Demo = ({route}) => {
  const {latitude,longitude}=route.params.data;
  
  const[coordinates,setcoordinates]=useState({
    lat:latitude,
    long:longitude,
  })
  
  return (
    <View style={styles.container}>
       <MapView
      
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      initialRegion={{
       latitude: coordinates.lat,
       longitude: coordinates.long,
       latitudeDelta: 0.20000,
       longitudeDelta: 0.0121,
     }}
    
      >
        <Marker
            coordinate={{latitude: coordinates.lat,
            longitude: coordinates.long}}
            title={"title"}
            description={"description"}
         />
        </MapView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    
    height: '88%',
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

export default Demo