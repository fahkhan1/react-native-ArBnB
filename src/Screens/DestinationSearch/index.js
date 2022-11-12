import React, {useState} from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import styles from './styles.js';
import search from '../../../assets/data/search'
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import SuggestionRow from "./SuggestionRow";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
const DestinationSearchScreen = () => {
  const[inputText,setinputText]=useState( initialState='' );
  const navigation=useNavigation();
  console.log(inputText);
  return (
    <View>
 {/* <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder='Where are you going?'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests', { viewport: details.geometry.viewport });
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyBpa2EzN8gl86Y9a7TkGVqfGxHLPSrB8Lw',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />}
      />
    </View> */}


      <TextInput
      style={styles.textInput}
      value={inputText}
      onChangeText={setinputText}
      placeholder="Where are you going ?"
      />
      {/* List of destenation */}
      <FlatList
      data={search}
      renderItem={({item})=>(
      <Pressable style={styles.row}
      //  onPress={()=>navigation.navigate('Demo',{
      //     data: {
      //             latitude:item.latitude,
      //            longitude:item.longitude,
      //           }
      //  })}
      //onPress={()=>navigation.navigate('Guests')}
        onPress={()=>navigation.navigate('Guests',{
           data: {
                   latitude:item.latitude,
                  longitude:item.longitude,
                 }
        })}
       >
        <View style={styles.iconContainer}>
     <Entypo name={"location-pin"} size={35} />
        </View>
      <Text style={styles. locationText}>{item.description} </Text>
      </Pressable>
      
      )}
      />
    </View>
  )
}

export default DestinationSearchScreen