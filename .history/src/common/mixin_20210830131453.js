import { debounce } from "./utils";

export const itemListenerMixin = {
  // components/computed
  data() {
    return {
      itemImgListener: null,
      // refresh: null,
    };
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.itemImgListener = () => {
      // 3. 监听item中的图片加载完成
      refresh();
    };
    this.$EventBus.$on("itemImageLoad", this.itemImgListener);
  },
};

export const backTop = {
  data() {
    return {
      isShowBackTop: false,
    };
  },
  methods: {
    //  判断backtop是否显示
    enBackTopPosition(position) {
      this.isShowBackTop = -position.y >= 500;
    },
    //回到顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  },
};
