import { myJsonp } from './jsonp';

export function getHomeData(){
  return myJsonp({
    url:'http://tui.taobao.com/recommend',
    data:{
      appid:'24127',
      _ksTS:'1630158752647_237'
    },
    cbkey:'callback'
  })
}