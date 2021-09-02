import { myJsonp } from './jsonp';

export function getHomeData(){
  return network({
    url: '/item_get',
    
  })
}