import { BaseUser } from '../api/base';
import { CardlistInfo } from '../api/list';
import { getBaseUser, getPostsList } from '../api/index';

export async function getUserInfo(uid: string) {
  try {
    const data = await getBaseUser(uid);
    return data;
  } catch (e) {
    return Promise.reject(e);
  }
}

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

export function getContainerid(userInfo: BaseUser) {
  return userInfo?.tabsInfo?.tabs?.[1]?.containerid;
}

export function getSinceId(cardlistInfo: CardlistInfo) {
  return cardlistInfo?.since_id;
}
