import React from 'react';
import {View, Text, Platform} from 'react-native';
import {Colors} from '../../themes';
import Icon from '../../images/icons';
import styles from './styles';

export const Header = ({
  title,
  onBackClick,
  onAddClick,
  isHeaderRight,
  isHeaderLeft,
}) => {
  return (
    <View style={styles.header}>
      {onBackClick && (
        <Icon.MaterialIcons
          name={'arrow-back-ios'}
          size={24}
          color={Platform.OS === 'android' ? 'white' : Colors.primary}
          onPress={onBackClick}
        />
      )}
      {!isHeaderLeft && <View style={{width: 24}} />}
      <Text style={styles.title}>{title}</Text>
      {!isHeaderRight && <View style={{width: 24}} />}
      {onAddClick && (
        <Icon.Ionicons
          name={'md-add'}
          size={24}
          color={Platform.OS === 'android' ? 'white' : Colors.primary}
          onPress={onAddClick}
        />
      )}
    </View>
  );
};
