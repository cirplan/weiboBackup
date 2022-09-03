import {
  getUserInfo,
  getContainerid,
  getPosts,
  getSinceId,
} from "./service/getData";
import saveToFile from "./service/saveData";
import CONFIG_LIST, { ConfigItem } from "./config";

init();

async function init() {
  try {
    if (!checkConfig(CONFIG_LIST)) {
      console.warn("请先完善 config.ts");
      return;
    }

    for (let i = 0; i < CONFIG_LIST.length; i++) {
      const config = CONFIG_LIST[i];
      const { uid, dir, loop, minWaitTime, maxWaitTime } = config;
      const userInfo = await getUserInfo(uid);
      const containerid = getContainerid(userInfo);
      let pageNum = 1;
      let since_id: number | undefined;
      while (pageNum === 1 || (loop && since_id)) {
        since_id = await getAndSaveData(
          pageNum,
          dir,
          uid,
          containerid,
          since_id
        );
        pageNum++;
        await sleep(getRangeTime(minWaitTime, maxWaitTime));
      }
    }

    console.log("完成");
  } catch (e) {
    console.error("程序异常", e);
  }
}

/**
 * 获取并保存数据
 * @param pageNum
 * @param dir
 * @param uid
 * @param containerid
 * @param since_id
 * @returns
 */
async function getAndSaveData(
  pageNum: number,
  dir: string,
  uid: string,
  containerid: string,
  since_id?: number
) {
  try {
    console.log(`正在获取 ${uid} 第 ${pageNum} 页数据...`);
    const postsInfo = await getPosts(uid, containerid, since_id);
    if (postsInfo?.cards?.length) {
      saveToFile(postsInfo, pageNum, dir);
      console.log(`${uid} 第 ${pageNum} 页数据保存成功`);
      // 下一页
      return getSinceId(postsInfo?.cardlistInfo);
    }
  } catch (e) {
    console.log(`${uid} 第 ${pageNum} 页已无数据`);
  }
}

/**
 * 获取范围内随机时间
 * @param min
 * @param max
 * @returns
 */
function getRangeTime(min: number, max: number) {
  return min + Number(Math.random() * (max - min));
}

/**
 * 设置休眠
 * @param ms
 * @returns
 */
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 检查配置文件
 * @param list
 * @returns
 */
function checkConfig(list: ConfigItem[]) {
  return (
    list?.length > 0 &&
    list.every((config) => Object.keys(config).every((k) => config[k] !== ""))
  );
}
