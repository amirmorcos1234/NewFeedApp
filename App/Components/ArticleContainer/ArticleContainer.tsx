import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

import styles from './ArticleContainer.styles';

type ArticleProps = {
  image: string;
  title: string;
  details: string;
  onPress: () => void;
};

const ArticleContainer: React.FC<ArticleProps> = props => {
  const {details, image, title, onPress} = props;
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.details} ellipsizeMode="tail" numberOfLines={2}>
          {details}
        </Text>
      </View>
    </Pressable>
  );
};

export default ArticleContainer;
