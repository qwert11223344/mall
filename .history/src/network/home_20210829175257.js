import { myJsonp } from './jsonp';

export function getHomeData(){
  return myJsonp({
    url:'https://count.taobao.com/counter6',
    data:{
      keys: 'TCART_234_39faa9ffeb305b298eef3e9fcb5873c6_q',
t: '1630230582737',
_ksTS: '1630230582739_72',
    },
  })
}