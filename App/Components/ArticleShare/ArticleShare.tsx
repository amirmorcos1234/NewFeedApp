import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-share';

import styles from './ArticleShare.styles';

type ArticleShareProps = {
  message: string;
};
const ArticleShare: React.FC<ArticleShareProps> = props => {
  const {message} = props;

  const options = {
    title: 'Article Link',
    message,
  };

  const onShare = async () => {
    try {
      await Share.open(options);
    } catch (e) {}
  };

  return (
    <Pressable onPress={onShare} style={styles.shareContainer}>
      <Icon name="share-social-outline" size={25} color="white" />
    </Pressable>
  );
};

export default ArticleShare;
