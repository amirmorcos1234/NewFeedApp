import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import SeeMore from 'react-native-see-more-inline';

import {ArticleShare} from '../../Components';

import {HomeStackParamList} from '../../Navigation/AppNavigationTypes';

import ApiConstants from '../../Utils/ApiConstants';

import styles from './DetailsScreen.styles';

const DetailsScreen = () => {
  const route = useRoute<RouteProp<HomeStackParamList, 'Details'>>();
  const {item} = route.params;
  return (
    <React.Fragment>
      <ScrollView style={styles.container}>
        <Image
          source={{uri: `${ApiConstants.imageUrl}${item.multimedia[0]?.url}`}}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{item.headline.main}</Text>
          <View style={styles.authorContainer}>
            <Text style={styles.author}>{item.byline.original}</Text>
            <Text style={styles.author}>{item.document_type}</Text>
          </View>
          <SeeMore style={styles.description} numberOfLines={4}>
            {item.lead_paragraph}
          </SeeMore>
        </View>
      </ScrollView>
      <ArticleShare message={item.web_url} />
    </React.Fragment>
  );
};

export default DetailsScreen;
