import {StyleSheet} from 'react-native';

import {Colors} from '../../Theme';

export default StyleSheet.create({
  searchInputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    padding: 0,
    paddingHorizontal: 10,
    color: Colors.black,
    fontSize: 15,
  },
});
