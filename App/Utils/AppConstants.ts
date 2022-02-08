import {Platform} from 'react-native';

const shadowing = Platform.select({
  ios: {
    shadowColor: '#000',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  android: {
    elevation: 6,
  },
});

export {shadowing};
