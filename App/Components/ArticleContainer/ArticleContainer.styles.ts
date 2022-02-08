import {StyleSheet, Dimensions} from 'react-native';

import {shadowing} from '../../Utils/AppConstants';

import {Colors} from '../../Theme';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    margin: 10,
    width: width * 0.9,
    height: height * 0.35,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...shadowing,
  },
  image: {
    height: height * 0.2,
    width: width * 0.9,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    fontSize: 13,
  },
  content: {
    padding: 10,
  },
});
