import React, {useState} from 'react';
import {View, Text, ScrollView, TextInput, Button} from 'react-native';
import {Header} from '../../components';
import styles from './styles';
import {Colors} from '../../themes';
import {useDispatch, useSelector} from 'react-redux';
import {placesActions} from '../../redux/actions';

export const NewPlaceScreen = props => {
  const [textInputValue, setTextInputValue] = useState('');
  const dispatch = useDispatch();
  const places = useSelector(state => state.places.places);

  const savePlaceHandle = () => {
    const data = {
      title: textInputValue,
    };
    dispatch(placesActions.addPlace(data));
    setTextInputValue('');
    props.navigation.goBack();
  };

  return (
    <View style={{flex: 1}}>
      <Header
        title={'Add Place'}
        isHeaderLeft
        onBackClick={() => props.navigation.goBack()}
      />
      <ScrollView>
        <View style={{margin: 30}}>
          <Text style={{marginBottom: 15, fontSize: 18}}>Title</Text>
          <TextInput
            style={styles.textInput}
            value={textInputValue}
            onChangeText={text => setTextInputValue(text)}
          />
          <Button
            title={'Save Place'}
            color={Colors.primary}
            onPress={savePlaceHandle}
          />
        </View>
      </ScrollView>
    </View>
  );
};
