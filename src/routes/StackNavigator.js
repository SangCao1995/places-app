import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREEN} from './Screen';
import {
  MapScreen,
  NewPlaceScreen,
  PlaceDetailScreen,
  PlacesListScreen,
} from '../screens';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN.PLACES_LIST} component={PlacesListScreen} />
      <Stack.Screen name={SCREEN.PLACE_DETAIL} component={PlaceDetailScreen} />
      <Stack.Screen name={SCREEN.NEW_PLACE} component={NewPlaceScreen} />
      <Stack.Screen name={SCREEN.MAP} component={MapScreen} />
    </Stack.Navigator>
  );
};
