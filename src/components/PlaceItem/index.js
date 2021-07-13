import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

export const PlaceItem = ({onPress, image, title, address}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.placeItem}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};
