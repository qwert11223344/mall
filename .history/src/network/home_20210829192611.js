import { myJsonp } from "./jsonp";

export function getHomeData() {
  return myJsonp({
    url: "https://h5api.m.taobao.com/h5/mtop.mytaobao.pchome.multiacquire/1.0/",
    data: {
      jsv: "2.5.1",
      appKey: "12574478",
      t: "1630230583035",
      sign: "0ef5dd3e80ea98bfbcb678470ddc4a69",
      api: "mtop.mytaobao.pchome.multiAcquire",
      v: "1.0",
      type: "jsonp",
      dataType: "jsonp",
    },
  });
}
