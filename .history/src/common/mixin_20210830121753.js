import {debounce} from './utils';

export const itemListenerMixin = {
  // components/computed
  data() {
    return {
      itemImgListener: null,
      // refresh: null,
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500)
    this.itemImgListener = () => { // 3. 监听item中的图片加载完成
      refresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImgListener)
    // console.log('Mixin');
  }
}