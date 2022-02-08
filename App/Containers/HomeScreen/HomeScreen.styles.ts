import {StyleSheet, Dimensions} from 'react-native';

import {shadowing} from '../../Utils/AppConstants';

import {Colors} from '../../Theme';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  image: {
    height: height * 0.3,
    width: width * 1.5,
  },
  topContainer: {
    marginBottom: height * 0.12,
  },
  searchContainer: {
    padding: 10,
    position: 'absolute',
    justifyContent: 'center',
    bottom: -height * 0.09,
    alignSelf: 'center',
    height: height * 0.15,
    width: width * 0.9,
    backgroundColor: 'white',
    ...shadowing,
  },
});
