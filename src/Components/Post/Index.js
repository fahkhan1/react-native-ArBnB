import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
const days = 7;
const Post = (props) => {
  const post = props.post;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  }
  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
      {/* Image */}
      <Image style={styles.Image} 
      source={{uri: post.image}} />
      
      {/* Bad and Badroom */}
      <Text style={styles.Bedrooms}>{post.bed} bed {post.bedroom} Bedrooms </Text>

      {/* type and description */}
      <Text style={styles.des} numberOfLines={2}> {post.type}.{post.title} </Text>

      {/* old and new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldprices}>${post.oldPrice} </Text>
        <Text style={styles.newprices}>  {post.newPrice}</Text>
        / night
         </Text>


      {/* Total price */}
      <Text style={styles.totalprices}>${post.totalPrice}  total</Text>
      </Pressable>
  )
}

export default Post;