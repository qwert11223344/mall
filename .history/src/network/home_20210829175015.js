import { myJsonp } from './jsonp';

export function getHomeData(){
  return myJsonp({
    url:'https://www.taobao.com/',
    data:{
    
    },
  })
}