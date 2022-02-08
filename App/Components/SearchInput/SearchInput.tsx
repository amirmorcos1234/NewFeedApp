import React from 'react';
import {TextInput, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Colors} from '../../Theme';

import styles from './SearchInput.styles';

type SearchInputProps = {
  containerStyle?: ViewStyle;
  onChange: (text: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = props => {
  const {onChange, containerStyle} = props;
  return (
    <View style={[styles.searchInputContainer, containerStyle]}>
      <Icon name="search-outline" size={20} />
      <TextInput
        onChangeText={onChange}
        placeholder="Search"
        style={styles.input}
        placeholderTextColor={Colors.grey}
      />
    </View>
  );
};

export default SearchInput;
