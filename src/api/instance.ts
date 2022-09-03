import Axios from 'axios';
import {
  BASE_URL,
  HEADER_USER_AGENT,
  HEADER_REFERER,
  RESPONST_STATUS_OK
} from './constants';

const instance = Axios.create({
  baseURL: BASE_URL,
  headers: {
    'user-agent': HEADER_USER_AGENT,
    referer: HEADER_REFERER
  }
});

// 对响应数据简要过滤
instance.interceptors.response.use(
  (res) => {
    const { data } = res;
    if (data.ok !== RESPONST_STATUS_OK) {
      return Promise.reject(data);
    }
    return data;
  },
  (e) => {
    console.error('response err', e);
    return Promise.reject(e);
  }
);

export default instance;
