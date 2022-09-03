import { BaseUser } from '../api/base';
import { CardlistInfo } from '../api/list';
import { getBaseUser, getPostsList } from '../api/index';

/**
 * 获取用户信息
 * @param uid
 * @returns
 */
export async function getUserInfo(uid: string) {
  try {
    const data = await getBaseUser(uid);
    return data;
  } catch (e) {
    return Promise.reject(e);
  }
}

/**
 * 获取分页博文数据
 * @param uid
 * @param containerid
 * @param since_id
 * @returns
 */
export async function getPosts(
  uid: string,
  containerid: string,
  since_id?: number
) {
  try {
    const data = await getPostsList(uid, containerid, since_id);
    return data;
  } catch (e) {
    return Promise.reject(e);
  }
}

/**
 * 根据用户对象查找containerid
 * @param userInfo
 * @returns
 */
export function getContainerid(userInfo: BaseUser) {
  return userInfo?.tabsInfo?.tabs?.[1]?.containerid;
}

/**
 * 获取分页的since_id
 * @param cardlistInfo
 * @returns
 */
export function getSinceId(cardlistInfo: CardlistInfo) {
  return cardlistInfo?.since_id;
}
