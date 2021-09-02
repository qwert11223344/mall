import {network} from './network';

export function getHomeData(){
  return network({
    url: '/recommend'
  })
}