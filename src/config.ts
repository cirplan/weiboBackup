// 配置项
export interface ConfigItem {
  [index: string]: string | number | boolean;
  dir: string; // 保存的文件夹名称，根目录下
  uid: string; // 用户的uid
  minWaitTime: number; // 请求间隔最小时间（毫秒）
  maxWaitTime: number; // 请求间隔最大时间（毫秒）
  loop: boolean; // 是否循环请求到最后一页
}

// 在这里配置用户id
const CONFIG_LIST: ConfigItem[] = [
  {
    dir: 'backup',
    uid: '1223178222', // ex: 胡歌的id，请在这里改为你想要的id
    minWaitTime: 500,
    maxWaitTime: 900,
    loop: false
  }
];

export default CONFIG_LIST;
