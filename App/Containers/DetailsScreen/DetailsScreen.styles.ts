import {StyleSheet, Dimensions} from 'react-native';

import {Colors} from '../../Theme';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  image: {
    height: height * 0.3,
    width: width,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  authorContainer: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  author: {
    fontSize: 13,
    color: Colors.lightBlack,
  },
  description: {
    fontSize: 16,
    color: Colors.blueGrey,
  },
});
