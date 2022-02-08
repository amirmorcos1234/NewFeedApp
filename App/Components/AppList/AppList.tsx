import React, {useState, useEffect, useRef} from 'react';
import {ActivityIndicator, FlatList, ListRenderItemInfo} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

import Article from '../../Models/Article';

import styles from './AppList.styles';

type AppListProps = {
  loading: boolean;
  data: Article[];
  renderArticleItem: ({
    item,
    index,
  }: ListRenderItemInfo<Article>) => JSX.Element;
  totalOffset: number;
  callApi: (pageIndex: number) => void;
};

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

type AppListState = {
  isFetching: boolean;
  offset: number;
  loadingMore: boolean;
  pageIndex: number;
};

const AppList: React.FC<AppListProps> = props => {
  const {loading, data, renderArticleItem, totalOffset, callApi} = props;

  const [state, setState] = useState<AppListState>({
    isFetching: false,
    offset: -1,
    loadingMore: false,
    pageIndex: 0,
  });

  const {loadingMore, offset, pageIndex} = state;

  const isEndReached = useRef(false);

  useEffect(() => {
    if (!loading) {
      setState(prevState => ({
        ...prevState,
        isFetching: false,
        loadingMore: false,
      }));
    }
  }, [loading]);

  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      loadingMore: false,
    }));
  }, [data]);

  const renderLoading = () => {
    const loadinArr = new Array(4).fill(0);
    return loadinArr.map((_, index) => (
      <ShimmerPlaceHolder key={index} style={styles.loading} />
    ));
  };

  const getNextPage = () => {
    if (offset < totalOffset) {
      if (isEndReached.current === true) {
        setState(prevState => ({
          ...prevState,
          offset: totalOffset,
          pageIndex: prevState.pageIndex + 1,
          loadingMore: true,
        }));
        callApi(pageIndex + 1);
        isEndReached.current = false;
      }
    } else {
      isEndReached.current = false;
      if (loadingMore) {
        setState(prevState => ({
          ...prevState,
          loadingMore: false,
        }));
      }
    }
  };
  return loading ? (
    renderLoading()
  ) : (
    <FlatList
      data={data}
      onMomentumScrollBegin={() => {
        isEndReached.current = true;
      }}
      onScrollBeginDrag={() => {
        isEndReached.current = true;
      }}
      ListFooterComponent={() =>
        loadingMore ? <ActivityIndicator style={[styles.listLoading]} /> : null
      }
      renderItem={renderArticleItem}
      onEndReached={getNextPage}
    />
  );
};

export default AppList;
