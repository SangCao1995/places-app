import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {Colors} from '../../themes';
import styles from './styles';
import {launchCamera} from 'react-native-image-picker';

export const ImgPicker = ({onImageTaken}) => {
  const [image, setImage] = useState();

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert(
            'Insufficient permissions!',
            'You need to grant camera to use this app.',
            [{text: 'Okay'}],
          );
          return false;
        }
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert(
            'Insufficient permissions!',
            'You need to grant camera to use this app.',
            [{text: 'Okay'}],
          );
          return false;
        }
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const takeImageHandle = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (!isCameraPermitted || !isStoragePermitted) {
      return;
    }
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        setImage(response.assets[0].uri);
        onImageTaken(response.assets[0].uri);
      });
    }
  };

  return (
    <View style={{alignItems: 'center', marginBottom: 15}}>
      <View style={styles.imagePreview}>
        {!image ? (
          <Text>No image picked yet.</Text>
        ) : (
          <Image
            source={{uri: image}}
            style={{width: '100%', height: '100%'}}
          />
        )}
      </View>
      <Button
        title={'Take Image'}
        color={Colors.primary}
        onPress={() => takeImageHandle('photo')}
      />
    </View>
  );
};
