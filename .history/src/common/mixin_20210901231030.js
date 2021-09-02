import { debounce } from "./utils";
import BackTop from "components/common/backtop/BackTop";

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
      refresh();
    };
    // 监听item中的图片加载完成
    this.$EventBus.$on("itemImageLoad", this.itemImgListener);
  },
};

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    };
  },
  components: {
    BackTop,
  },
  methods: {
    //  判断backtop是否显示
    listenBackTopPosition(position) {
      this.isShowBackTop = -position.y >= 500;
    },
    //回到顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  },
};

export const TabClickMixin = {
  data() {
    return {
      currentType: "pop",
    };
  },
  methods: {
    currentTabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl.currentIndex = index;
    },
  },
};
