import React, {useState} from 'react';
import {View, Text, ScrollView, TextInput, Button} from 'react-native';
import {Header, ImgPicker} from '../../components';
import styles from './styles';
import {Colors} from '../../themes';
import {useDispatch} from 'react-redux';
import {placesActions} from '../../redux/actions';

export const NewPlaceScreen = props => {
  const [textInputValue, setTextInputValue] = useState('');
  const [selectedImage, setSelectedImage] = useState();
  const dispatch = useDispatch();

  const savePlaceHandle = () => {
    const data = {
      title: textInputValue,
      image: selectedImage,
    };
    dispatch(placesActions.addPlace(data));
    setTextInputValue('');
    props.navigation.goBack();
  };

  const imageTakenHandle = path => {
    setSelectedImage(path);
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
          <ImgPicker onImageTaken={imageTakenHandle} />
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
