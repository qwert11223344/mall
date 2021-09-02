import { myJsonp } from './jsonp';

export function getHomeData(){
  return myJsonp({
    url:'https://count.taobao.com/counter6',
    data:{
    
    },
  })
}