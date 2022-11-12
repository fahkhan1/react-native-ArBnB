import { View, Text,ImageBackground, Pressable } from 'react-native'
import React from 'react'
import styles from './style';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
const HomeScreen = (props) => {
       const navigation = useNavigation();
  return (
    <View>
        <Pressable 
        style={styles.searchbtn}
        onPress={() => navigation.navigate('Destination Search')}
        > 
        <Fontisto name="search" size={25} color={"#f15454"} />
        <Text style={styles.searchbtntext}>Where are you going?</Text>

        </Pressable>
      <ImageBackground source={require('../../../assets/images/img3.jpg')} style={styles.image}>
        <Text style={styles.title}>GO Near</Text> 
        <Pressable style={styles.button}
        onPress={()=>console.warn('Explorebtn clicked')}
        > 
        <Text style={styles.btntext}>Explore NearBy Stays</Text>

        </Pressable>

      </ImageBackground>
      
    </View>
  )
}

export default HomeScreen