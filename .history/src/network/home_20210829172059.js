import { myJsonp } from './jsonp';

export function getHomeData(){
  return myJsonp({
    url:'http://tui.taobao.com/recommend',
    data:{
      appid:'24127',
    },
    cbkey:'callback',
    funName:'jsonp238'
  })
}