import React from 'react';
import {View, FlatList} from 'react-native';
import {Header} from '../../components';
import {SCREEN} from '../../routes/Screen';
import {useSelector} from 'react-redux';
import {PlaceItem} from '../../components/PlaceItem';

export const PlacesListScreen = props => {
  const places = useSelector(state => state.places.places);

  return (
    <View style={{flex: 1}}>
      <Header
        title={'All Places'}
        isHeaderRight
        onAddClick={() => props.navigation.navigate(SCREEN.NEW_PLACE)}
      />
      <FlatList
        data={places}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <PlaceItem
            image={item.image}
            address={null}
            title={item.title}
            onPress={() =>
              props.navigation.navigate(SCREEN.PLACE_DETAIL, {place: item})
            }
          />
        )}
      />
    </View>
  );
};
