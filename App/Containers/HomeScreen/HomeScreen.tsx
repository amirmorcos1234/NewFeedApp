import React, {useCallback, useEffect, useState} from 'react';
import {View, Image, ListRenderItemInfo} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {debounce} from 'lodash';

import {SearchInput, ArticleContainer, AppList} from '../../Components';

import {useAppSelector} from '../../Hooks/Redux/Redux';
import {getArticles} from '../../Redux/Article/ArticleSlice';

import Article from '../../Models/Article';

import {HomeStackParamList} from '../../Navigation/AppNavigationTypes';

import ApiConstants from '../../Utils/ApiConstants';

import {Images} from '../../Theme';

import styles from './HomeScreen.styles';

type HomeState = {
  input: string;
};

const HomeScreen = () => {
  const [state, setState] = useState<HomeState>({
    input: '',
  });

  const navigation =
    useNavigation<StackNavigationProp<HomeStackParamList, 'Home'>>();

  const {items, loading} = useAppSelector(selector => selector.article);

  const {input} = state;

  const {articles, meta} = items;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles({search: input, pageIndex: 0}));
  }, [dispatch, input]);

  const onSearch = useCallback((text: string) => {
    setState(prevState => ({
      ...prevState,
      input: text || '',
    }));
  }, []);

  const optimizedSearch = useCallback(debounce(onSearch, 1000), []);

  const onArticlePress = (item: Article) => {
    navigation.navigate('Details', {item});
  };

  const renderArticleItem = ({item, index}: ListRenderItemInfo<Article>) => (
    <ArticleContainer
      onPress={() => onArticlePress(item)}
      key={index}
      details={item.abstract}
      title={item.headline.main}
      image={`${ApiConstants.imageUrl}${item.multimedia[0]?.url}`}
    />
  );

  const getMoreData = (pageIndex: number) => {
    dispatch(getArticles({search: input, pageIndex}));
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={Images.homeImage}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.searchContainer}>
          <SearchInput onChange={optimizedSearch} />
        </View>
      </View>
      <AppList
        callApi={getMoreData}
        totalOffset={meta.offset}
        loading={loading}
        data={articles}
        renderArticleItem={renderArticleItem}
      />
    </View>
  );
};

export default HomeScreen;
