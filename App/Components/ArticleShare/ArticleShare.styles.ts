import {StyleSheet} from 'react-native';

import {Colors} from '../../Theme';

export default StyleSheet.create({
  shareContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.salmon,
    position: 'absolute',
    bottom: 20,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
