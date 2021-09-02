import { myJsonp } from './jsonp';

export function getHomeData(){
  return myJsonp({
    url:'https://y.qq.com/music/common/upload/MUSIC_FOCUS/4063366.png',
    data:{
      appid:'24127',
      _ksTS:'1630158752647_237'
    },
    cbkey:'callback'
  })
}