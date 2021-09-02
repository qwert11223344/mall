import { network } from './network';

export function getHomeData() {
  return network({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return network({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
