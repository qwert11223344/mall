import { myJsonp } from './jsonp';

export function getHomeData(){
  return myJsonp({
    url:'https://y.qq.com/music/common/upload/MUSIC_FOCUS/4063366.png',
    data:{
      max_age:'2592000',
    },
  })
}