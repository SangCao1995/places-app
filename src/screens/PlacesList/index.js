import React from 'react';
import {View, Text} from 'react-native';
import {Header} from '../../components';
import {SCREEN} from '../../routes/Screen';

export const PlacesListScreen = props => {
  return (
    <View style={{flex: 1}}>
      <Header
        title={'All Places'}
        isHeaderRight
        onAddClick={() => props.navigation.navigate(SCREEN.NEW_PLACE)}
      />
      <Text>Places List Screen</Text>
    </View>
  );
};
