import Article from '../Models/Article';

export type HomeStackParamList = {
  Home: undefined;
  Details: {
    item: Article;
  };
};
