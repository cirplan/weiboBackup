# weiboBackup

## 功能
把用户的新浪微博 `原始数据` 备份到本地。

## 起因
微博密码忘记了，找回密码要申诉，申诉要知道密码前3位。但是...我真的忘记了。所以用 node 写了个脚本把微博的数据都抓下来，以json格式保存在本地。

## 使用说明

### 1. 下载代码

    git clone https://github.com/cirplan/weiboBackup.git

### 2. 安装依赖

    cd weiboBackup
    npm i

### 3. 运行程序

    npm start

### 4. 配置项

在 `src/config.ts` 内，可以看到如下内容：

```js
{
  dir: string; // 保存的文件夹名称，根目录下
  uid: string; // 用户的uid
  minWaitTime: number; // 请求间隔最小时间（毫秒）
  maxWaitTime: number; // 请求间隔最大时间（毫秒）
  loop: boolean; // 是否循环请求到最后一页
}
```

### 5. 示例

这里用了胡歌的微博做为示例：

```js
{
  dir: 'backup/huge',
  uid: '1223178222',
  minWaitTime: 500,
  maxWaitTime: 900,
  loop: true
}
```

拉取的是一页十条微博数据，到的json数据如下：

```json
{
  "cardlistInfo": {
    "containerid": "1076031223178222",
    "v_p": 42,
    "show_style": 1,
    "total": 20,
    "since_id": 4781413147084961
  },
  "cards": [
    {
      "card_type": 9,
      "profile_type_id": "proweibo_4804608494665869",
      "itemid": "1076031223178222_-_4804608494665869",
      "scheme": "https://m.weibo.cn/status/M1VT3jzNX?mblogid=M1VT3jzNX&luicode=10000011&lfid=1076031223178222",
      "mblog": {
        "visible": {
          "type": 0,
          "list_id": 0
        },
        "created_at": "Sat Aug 20 18:29:52 +0800 2022",
        "id": "4804608494665869",
        "mid": "4804608494665869",
        "can_edit": false,
        "show_additional_indication": 0,
        "text": "<a  href=\"https://m.weibo.cn/search?containerid=231522type%3D1%26t%3D10%26q%3D%23%E8%BF%87%E5%88%9A%E5%88%9A%E5%A5%BD%E7%9A%84%E7%94%9F%E6%B4%BB%EF%BC%8C%E4%BB%8E%E5%B0%8F%E5%B0%8F%E7%9A%84%E6%88%91%E5%BC%80%E5%A7%8B%23&extparam=%23%E8%BF%87%E5%88%9A%E5%88%9A%E5%A5%BD%E7%9A%84%E7%94%9F%E6%B4%BB%EF%BC%8C%E4%BB%8E%E5%B0%8F%E5%B0%8F%E7%9A%84%E6%88%91%E5%BC%80%E5%A7%8B%23&luicode=10000011&lfid=1076031223178222\" data-hide=\"\"><span class=\"surl-text\">#过刚刚好的生活，从小小的我开始#</span></a>",
        "source": "",
        "favorited": false,
        "pic_ids": [],
        "is_paid": false,
        "mblog_vip_type": 0,
        "user": {
          "id": 1223178222,
          "screen_name": "胡歌",
          "profile_image_url": "https://tvax4.sinaimg.cn/crop.0.0.512.512.180/001kMkx0ly8h3p8gmwoh7j60e80e8dgc02.jpg?KID=imgbed,tva&Expires=1662204187&ssig=Kj76q2Z6%2F9",
          "profile_url": "https://m.weibo.cn/u/1223178222?uid=1223178222&luicode=10000011&lfid=1076031223178222",
          "statuses_count": 4019,
          "verified": true,
          "verified_type": 0,
          "verified_type_ext": 1,
          "verified_reason": "演员",
          "close_blue_v": false,
          "description": "🎈                                                                                                                                🏃🏻",
          "gender": "m",
          "mbtype": 12,
          "urank": 45,
          "mbrank": 7,
          "follow_me": false,
          "following": false,
          "follow_count": 733,
          "followers_count": "7164.8万",
          "followers_count_str": "7164.8万",
          "cover_image_phone": "https://wx2.sinaimg.cn/crop.0.0.640.640.640/001kMkx0gy1h0hnw2b92lj60u00u00ss02.jpg",
          "avatar_hd": "https://wx4.sinaimg.cn/orj480/001kMkx0ly8h3p8gmwoh7j60e80e8dgc02.jpg",
          "like": false,
          "like_me": false,
          "badge": {
            "gongyi": 1,
            "gongyi_level": 1,
            "bind_taobao": 1,
            "zongyiji": 1,
            "follow_whitelist_video": 1,
            "user_name_certificate": 1,
            "wenchuan_10th": 1,
            "meilizhongguo_2018": 1,
            "hongbaofei_2019": 1,
            "status_visible": 1,
            "china_2019": 1,
            "rrgyj_2019": 1,
            "weishi_2019": 1,
            "china_2020": 1,
            "party_cardid_state": 2,
            "renrengongyijie_2021": 1,
            "guoqi_2022": 1,
            "gangqi_2022": 1
          }
        },
        "retweeted_status": {
          "visible": {
            "type": 0,
            "list_id": 0
          },
          "created_at": "Fri Aug 19 20:00:02 +0800 2022",
          "id": "4804268794315521",
          "mid": "4804268794315521",
          "edit_count": 1,
          "can_edit": false,
          "edit_at": "Fri Aug 19 20:01:30 +0800 2022",
          "show_additional_indication": 0,
          "text": "2022年 <a  href=\"https://m.weibo.cn/search?containerid=231522type%3D1%26t%3D10%26q%3D%23%E9%9B%B6%E5%BA%9F%E5%BC%83%E6%97%A5%23&extparam=%23%E9%9B%B6%E5%BA%9F%E5%BC%83%E6%97%A5%23&luicode=10000011&lfid=1076031223178222\" data-hide=\"\"><span class=\"surl-text\">#零废弃日#</span></a>，<a href='/n/胡歌'>@胡歌</a> 与我们分享他在日常生活中看到的零废弃行动，每一件小事都发生在我们的身边，有些或许是你一直在做的，有些或许是你也想尝试一次的，一起行动起来。让每个零废弃的小小行动，刚刚好被看见。<br /><br /><a  href=\"https://m.weibo.cn/search?containerid=231522type%3D1%26t%3D10%26q%3D%23%E8%83%A1%E6%AD%8C%23&isnewpage=1&luicode=10000011&lfid=1076031223178222\" data-hide=\"\"><span class=\"surl-text\">#胡歌#</span></a> <a  href=\"https://m.weibo.cn/search?containerid=231522type%3D1%26t%3D10%26q%3D%23%E8%BF%87%E5%88%9A%E5%88%9A%E5%A5%BD%E7%9A%84%E7%94%9F%E6%B4%BB%EF%BC%8C%E4%BB%8E%E5%B0%8F%E5%B0%8F%E7%9A%84%E6%88%91%E5%BC%80%E5%A7%8B%23&extparam=%23%E8%BF%87%E5%88%9A%E5%88%9A%E5%A5%BD%E7%9A%84%E7%94%9F%E6%B4%BB%EF%BC%8C%E4%BB%8E%E5%B0%8F%E5%B0%8F%E7%9A%84%E6%88%91%E5%BC%80%E5%A7%8B%23&luicode=10000011&lfid=1076031223178222\" data-hide=\"\"><span class=\"surl-text\">#过刚刚好的生活，从小小的我开始#</span></a> <a  href=\"https://video.weibo.com/show?fid=1034:4804256763674671\" data-hide=\"\"><span class='url-icon'><img style='width: 1rem;height: 1rem' src='https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_video_default.png'></span><span class=\"surl-text\">万科公益基金会的微博视频</span></a> ",
          "textLength": 263,
          "source": "微博视频号",
          "favorited": false,
          "pic_ids": [],
          "is_paid": false,
          "mblog_vip_type": 0,
          "user": {
            "id": 3116716801,
            "screen_name": "万科公益基金会",
            "profile_image_url": "https://tvax2.sinaimg.cn/crop.0.0.650.650.180/b9c55301ly8fu4n1bk6yzj20ig0i2q4w.jpg?KID=imgbed,tva&Expires=1662204187&ssig=CwCFSKMvFC",
            "profile_url": "https://m.weibo.cn/u/3116716801?uid=3116716801&luicode=10000011&lfid=1076031223178222",
            "statuses_count": 1330,
            "verified": true,
            "verified_type": 7,
            "verified_type_ext": 0,
            "verified_reason": "万科公益基金会官方微博",
            "close_blue_v": false,
            "description": "万科公益基金会是由万科发起的全国性非公募基金会，关注儿童健康、紧急救援、社区发展、环境保护等议题。",
            "gender": "f",
            "mbtype": 12,
            "urank": 24,
            "mbrank": 6,
            "follow_me": false,
            "following": false,
            "follow_count": 292,
            "followers_count": "6905",
            "followers_count_str": "6905",
            "cover_image_phone": "https://tva1.sinaimg.cn/crop.0.0.640.640.640/549d0121tw1egm1kjly3jj20hs0hsq4f.jpg",
            "avatar_hd": "https://wx2.sinaimg.cn/orj480/b9c55301ly8fu4n1bk6yzj20ig0i2q4w.jpg",
            "like": false,
            "like_me": false,
            "badge": {
              "user_name_certificate": 1,
              "suishoupai_2018": 5,
              "qixi_2018": 1,
              "meilizhongguo_2018": 1,
              "starlight_2019": 1,
              "pc_new": 6,
              "ylpshuidao_2021": 1,
              "party_cardid_state": 1,
              "fishfarm_2021": 3
            }
          },
          "reposts_count": 30125,
          "comments_count": 668,
          "reprint_cmt_count": 0,
          "attitudes_count": 6533,
          "pending_approval_count": 0,
          "isLongText": false,
          "mlevel": 0,
          "expire_time": 1661155545,
          "ad_state": 1,
          "darwin_tags": [],
          "hot_page": {
            "fid": "232532_mblog",
            "feed_detail_type": 0
          },
          "mblogtype": 0,
          "mark": "999_reallog_mark_ad:999|WeiboADNatural",
          "rid": "0_0_50_5225474675102509840_0_0_0",
          "number_display_strategy": {
            "apply_scenario_flag": 3,
            "display_text_min_number": 1000000,
            "display_text": "100万+"
          },
          "content_auth": 0,
          "comment_manage_info": {
            "comment_permission_type": -1,
            "approval_comment_type": 0,
            "comment_sort_type": 0
          },
          "pic_num": 0,
          "fid": 4804257604960479,
          "new_comment_style": 0,
          "region_name": "发布于 北京",
          "region_opt": 1,
          "edit_config": {
            "edited": true,
            "menu_edit_history": {
              "scheme": "sinaweibo://cardlist?containerid=231440_-_4804268794315521&title=编辑记录",
              "title": "查看编辑记录"
            }
          },
          "page_info": {
            "type": "video",
            "object_type": 11,
            "url_ori": "http://t.cn/A6StwFco",
            "page_pic": {
              "width": 2866,
              "pid": "b9c55301gy1h5cadtytklj213t0meaec",
              "source": 1,
              "is_self_cover": 1,
              "type": 1,
              "url": "https://wx2.sinaimg.cn/crop.0.5.1433.797/b9c55301gy1h5cadtytklj213t0meaec.jpg",
              "height": 1594
            },
            "page_url": "https://video.weibo.com/show?fid=1034%3A4804256763674671&luicode=10000011&lfid=1076031223178222",
            "object_id": "1034:4804256763674671",
            "page_title": "万科公益基金会的微博视频",
            "title": "刚刚好被看见",
            "content1": "万科公益基金会的微博视频",
            "content2": "2022年 #零废弃日#，@胡歌 与我们分享他在日常生活中看到的零废弃行动，每一件小事都发生在我们的身边，有些或许是你一直在做的，有些或许你也想尝试一次的，一起行动起来。让每个零废弃的小小行动，刚刚好被看见。\n\n#过刚刚好的生活，从小小的我开始#",
            "video_orientation": "horizontal",
            "play_count": "345万次播放",
            "media_info": {
              "stream_url": "https://f.video.weibocdn.com/o0/DWNCpJ2klx07YxDnmc2k01041200h3CJ0E010.mp4?label=mp4_ld&template=640x360.25.0&ori=0&ps=1CwnkDw1GXwCQx&Expires=1662196987&ssig=V2dabxCqfc&KID=unistore,video",
              "stream_url_hd": "https://f.video.weibocdn.com/o0/8dJDlYYslx07YxDnVJmU01041200qK6W0E010.mp4?label=mp4_hd&template=852x480.25.0&ori=0&ps=1CwnkDw1GXwCQx&Expires=1662196987&ssig=pP2Z3SowVs&KID=unistore,video",
              "duration": 162.468
            },
            "urls": {
              "mp4_720p_mp4": "https://f.video.weibocdn.com/o0/LXYpbqKtlx07YxDoYhm801041200P18N0E010.mp4?label=mp4_720p&template=1280x720.25.0&ori=0&ps=1CwnkDw1GXwCQx&Expires=1662196987&ssig=JYs1Di1pQB&KID=unistore,video",
              "mp4_hd_mp4": "https://f.video.weibocdn.com/o0/8dJDlYYslx07YxDnVJmU01041200qK6W0E010.mp4?label=mp4_hd&template=852x480.25.0&ori=0&ps=1CwnkDw1GXwCQx&Expires=1662196987&ssig=pP2Z3SowVs&KID=unistore,video",
              "mp4_ld_mp4": "https://f.video.weibocdn.com/o0/DWNCpJ2klx07YxDnmc2k01041200h3CJ0E010.mp4?label=mp4_ld&template=640x360.25.0&ori=0&ps=1CwnkDw1GXwCQx&Expires=1662196987&ssig=V2dabxCqfc&KID=unistore,video"
            }
          },
          "bid": "M1N39i6Fb"
        },
        "reposts_count": 28544,
        "comments_count": 17356,
        "reprint_cmt_count": 0,
        "attitudes_count": 116398,
        "pending_approval_count": 0,
        "isLongText": false,
        "mlevel": 0,
        "darwin_tags": [],
        "hot_page": {
          "fid": "232532_mblog",
          "feed_detail_type": 0
        },
        "mblogtype": 0,
        "mark": "999_reallog_mark_ad:999|WeiboADNatural",
        "rid": "0_0_50_5225474675102509840_0_0_0",
        "mlevelSource": "monitor",
        "cardid": "star_1393",
        "extern_safe": 0,
        "number_display_strategy": {
          "apply_scenario_flag": 3,
          "display_text_min_number": 1000000,
          "display_text": "100万+"
        },
        "content_auth": 0,
        "safe_tags": 67108864,
        "comment_manage_info": {
          "comment_permission_type": -1,
          "approval_comment_type": 0,
          "comment_sort_type": 0
        },
        "hide_hot_flow": 1,
        "repost_type": 1,
        "pic_num": 0,
        "new_comment_style": 0,
        "ab_switcher": 4,
        "region_name": "发布于 北京",
        "region_opt": 1,
        "mblog_menu_new_style": 0,
        "edit_config": {
          "edited": false
        },
        "raw_text": "#过刚刚好的生活，从小小的我开始#",
        "bid": "M1VT3jzNX"
      }
    }
    ...
  ],
  "scheme": "sinaweibo://cardlist?containerid=1076031223178222&type=uid&value=1223178222&_T_WM=59157096162&v_p=42&luicode=10000011&lfid=1076031223178222",
  "showAppTips": 0
}
```

cards 里就是每条微博的数据，这里只展示了一条。

### 6. 数据

获取到的数据是最原始的数据，没有经过加工处理。有需要可以自己进行加工处理。

## License

[MIT](https://opensource.org/licenses/MIT)
