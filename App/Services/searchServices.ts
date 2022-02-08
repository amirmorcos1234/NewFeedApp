import axiosInstance from './';

import apiConstants from '../Utils/ApiConstants';

class SearchServices {
  getSearchedNews(searchInput: string, pageIndex = 0) {
    return axiosInstance.get(apiConstants.searchUrl, {
      params: {
        q: searchInput,
        'api-key': 'OAD0Qz0csaoDZLpw5ZR74TCeSjynnabJ',
        page: pageIndex,
        sort: 'newest',
      },
    });
  }
}

export default new SearchServices();
