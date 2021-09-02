import {network} from './network'


export function getCategory() {
  return network({
    url: '/category'
  })
}

export function getSubcategory(maitKey) {
  return network({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return network({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
