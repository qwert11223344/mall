import {network} from './network';

export function getHomeData(){
  return network({
    url: '/recommend?appid=24127&_ksTS=1630158752647_237&callback=jsonp238'
  })
}