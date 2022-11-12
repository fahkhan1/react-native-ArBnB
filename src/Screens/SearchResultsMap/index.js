import React, {useState, useEffect, useRef} from "react";
import { View, FlatList, useWindowDimensions,StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE,Marker,Callout,Polygon,Polyline,} from 'react-native-maps';
import feed from "../../../assets/data/feed";
import CustomMarker from '../../Components/CustomMarker';
import PostCarouselItem from '../../Components/PostCarouselItem/index';


const SearchResultsMaps = (props) => {
  const flatlist = useRef();
  const map = useRef();
 
  const { posts } = props;
  const width = useWindowDimensions().width;
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
   
   
    useEffect(() => {
      if (!selectedPlaceId || !flatlist) {
        return;
      }
      const index = feed.findIndex(place => place.id === selectedPlaceId)
      flatlist.current.scrollToIndex({index})
  
      const selectedPlace = feed[index];
      const Region = {
        latitude: selectedPlace.coordinate.latitude,
        longitude: selectedPlace.coordinate.longitude,
        latitudeDelta: 0.8,
        longitudeDelta: 0.8,
      }
      map.current.animateToRegion(Region);
    }, [selectedPlaceId])
  
    const viewConfig = useRef({itemVisiblePercentThreshold: 70})
    const onViewChanged = useRef(({viewableItems}) => {
      if (viewableItems.length > 0) {
        const selectedPlace = viewableItems[0].item;
        setSelectedPlaceId(selectedPlace.id)
      }
    })
    
  return (
    <View style={{width: '100%', height: '100%'}}>
       <MapView
      ref={map}
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      //style={styles.map}
      initialRegion={{
       latitude: 33.668077,
       longitude: 72.981587,
       latitudeDelta: 0.8,
        longitudeDelta: 0.8,
     }}
    
      >
       {feed.map(place=>
       <CustomMarker 
       coordinate={place.coordinate} 
       price={place.newPrice}
       isSelected={place.id === selectedPlaceId}
       onPress={() => setSelectedPlaceId(place.id)}
       />)}
        </MapView>
        <View style={{position: 'absolute', bottom: 10}}>
       
        <FlatList
          ref={flatlist}
          data={feed}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  )
}
// const styles = StyleSheet.create({
//   container: {
    
//     height: '100%',
//     width: 400,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
//  });

export default SearchResultsMaps