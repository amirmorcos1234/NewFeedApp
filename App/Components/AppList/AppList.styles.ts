import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  loading: {
    margin: 10,
    alignSelf: 'center',
    width: width * 0.9,
    height: height * 0.35,
    borderRadius: 10,
  },
  listLoading: {
    alignSelf: 'center',
    backgroundColor: 'black',
    flex: 1,
    marginHorizontal: 5,
  },
});
