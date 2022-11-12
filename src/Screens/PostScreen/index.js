import React from "react";
import { View, Text } from "react-native";
import DetailedPost from '../../Components/DetailedPost/index';
import {useRoute} from '@react-navigation/native';
import Post from "../../Components/Post/Index";
import feed from "../../../assets/data/feed";


const PostScreen = (props) => {
  const route = useRoute();

  const post = feed.find(place => place.id === route.params.postId);
 // post = feed[0];
  return (
    <View style={{backgroundColor: 'white'}}>
      <DetailedPost post={post} />
      <Post post={post} />
    </View>
  );
};

export default PostScreen;