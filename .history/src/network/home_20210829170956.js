import { myJsonp } from "./jsonp";

export function getHomeData() {
  return myJsonp({
    url:
      "https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?&=&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=1&uin=0&g_tk_new_20200303=5381&g_tk=5381&hostUin=0",
    data: {
      _: '1630227925152',
      cv: '4747474',
      ct: '24',
      format: 'json',
      inCharset:' utf - 8',
      outCharset: 'utf - 8',
      notice: '0',
      platform: 'yqq.json',
      needNewCode: '1',
      uin: '0',
      g_tk_new_20200303: '5381',
      g_tk: '5381',
      hostUin: '0',
    },
  });
}
