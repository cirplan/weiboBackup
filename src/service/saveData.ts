import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';

/**
 * 检查文件夹是否存在，不存在则新建
 * @param path
 */
async function checkOrNewFoler(path: string) {
  try {
    fs.accessSync(path, fs.constants.F_OK);
  } catch (e) {
    console.warn(`新建 ${path}`);
    await mkdirp(path);
  }
}

/**
 * 对数据进行保存
 * @param data
 * @param pageNum
 * @param pathName
 */
export default async function saveToFile(
  data: any,
  pageNum: number,
  pathName = 'backup'
) {
  const formatPath = path.join(__dirname, '../../', pathName);
  await checkOrNewFoler(formatPath);

  try {
    const fileName = `${formatPath}/${pageNum}.json`;
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
  } catch (e) {
    console.error(e);
  }
}
