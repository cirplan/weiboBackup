import axiosInstance from './instance';
import { POST_LIST_API } from './constants';
import { BaseUser } from './base';
import { PostsList } from './list';

/**
 * 获取基本用户数据
 * @param uid
 * @returns
 */
export async function getBaseUser(uid: string) {
  try {
    const path = `${POST_LIST_API}?type=uid${_formatPostPath(uid)}`;
    const { data } = await axiosInstance.get<BaseUser>(path);
    return data;
  } catch (e) {
    return Promise.reject(e);
  }
}

/**
 * 获取博文数据
 * @param uid
 * @param containerid
 * @returns
 */
export async function getPostsList(
  uid: string,
  containerid: string,
  since_id?: number
) {
  try {
    const path = `${POST_LIST_API}?type=uid${_formatPostPath(
      uid,
      containerid,
      since_id
    )}`;
    const { data } = await axiosInstance.get<PostsList>(path);
    return data;
  } catch (e) {
    return Promise.reject(e);
  }
}

interface FormatPathParams {
  [key: string]: string | number | undefined;
  value: string;
  containerid?: string;
  since_id?: number;
}

/**
 * 对请求url进行拼接
 * @param uid
 * @param containerid
 * @returns
 */
function _formatPostPath(
  uid: string,
  containerid?: string,
  since_id?: number
): string {
  const params: FormatPathParams = {
    value: uid,
    containerid,
    since_id
  };
  let str = '';
  Object.keys(params).forEach((k) => {
    if (params[k]) {
      str += `&${k}=${params[k]}`;
    }
  });

  return str;
}
