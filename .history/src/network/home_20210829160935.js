import { myJsonp } from './jsonp';

export function getHomeData(){
  return myJsonp({
    url:'https://tui.taobao.com/recommend?appid=24127&_ksTS=1630158752647_237&callback=jsonp238',
    data:{
      appid:'24127',
      _ksTS:'1630158752647_237',

    }
  })
}