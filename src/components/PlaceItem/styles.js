import {StyleSheet} from 'react-native';
import {Colors} from '../../themes';

const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Colors.blue,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    color: Colors.black,
    fontSize: 18,
    marginBottom: 5,
  },
  address: {
    fontSize: 16,
    color: Colors.grayText,
  },
});

export default styles;
