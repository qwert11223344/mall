import { myJsonp } from './jsonp';

export function getHomeData(){
  return myJsonp({
    url:'https://h5api.m.taobao.com/h5/mtop.mytaobao.pchome.multiacquire/1.0/',
    data:{
      keys: 'TCART_234_39faa9ffeb305b298eef3e9fcb5873c6_q',
t: '1630230582737',
_ksTS: '1630230582739_72',
    },
  })
}