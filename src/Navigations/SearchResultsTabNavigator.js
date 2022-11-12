import React, {useState, useEffect} from "react";
import {  createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResultsScreen from '../Screens/SearchResults/index';
import SearchResultsMaps from "../Screens/SearchResultsMap";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {
  return (
    <Tab.Navigator  tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        }
      }}>
    <Tab.Screen name={"list"} component={SearchResultsScreen}  />
    <Tab.Screen name={"map"} component={SearchResultsMaps}  />
    </Tab.Navigator>
  )
}

export default SearchResultsTabNavigator;