import React from 'react';
import {View, Text} from 'react-native';
import {Header} from '../../components';

export const NewPlaceScreen = props => {
  return (
    <View style={{flex: 1}}>
      <Header
        title={'Add Place'}
        isHeaderLeft
        onBackClick={() => props.navigation.goBack()}
      />
      <Text>New Place Screen</Text>
    </View>
  );
};
