<template>
	<div class="detail">
		<detail-nav-bar />
		<scroll ref="scroll" class="wrapper">
			<detail-swiper :top-images="topImages" />
			<detail-base-info :goods="goods" />
			<detail-shop-info :shop="shop" />
			<detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"/>
      <detail-params-info :param-info="paramsInfo" />
			<detail-comment-info :comment-info="commentInfo" ref="comment"/>
		</scroll>
	</div>
</template>

<script>
import {
	getDetail,
	Goods,
	Shop,
	GoodsParam,
	getRecommend
} from "network/detail";

import Scroll from "components/common/scroll/Scroll.vue";

import DetailNavBar from "./children/DetailNavBar";
import DetailSwiper from "./children/DetailSwiper";
import DetailBaseInfo from "./children/DetailBaseInfo.vue";
import DetailShopInfo from "./children/DetailShopInfo.vue";
import DetailGoodsInfo from "./children/DetailGoodsInfo.vue";
import DetailParamsInfo from './children/DetailParamsInfo.vue';
import DetailCommentInfo from './children/DetailCommentInfo.vue';
export default {
	name: "Detail",
	data() {
		return {
			iid: null,
			topImages: [],
			goods: {},
			shop: {},
			detailInfo: {},
			paramsInfo: {},
			DetailCommentInfo: {}
			// recommend: [],
		};
	},
	components: {
		Scroll,
		DetailNavBar,
		DetailSwiper,
		DetailBaseInfo,
		DetailShopInfo,
		DetailGoodsInfo,
    DetailParamsInfo,
		DetailCommentInfo,

	},
	created() {
		// 1. 保存传入的iid
		this.iid = this.$route.query.iid;
		// 2. 根据iid请求详情数据
		getDetail(this.iid).then(response => {
			// 1. 获取顶部轮播数据
			const data = response.result;
			this.topImages = data.itemInfo.topImages;
			// 2. 获取商品信息
			this.goods = new Goods(
				data.itemInfo,
				data.columns,
				data.shopInfo.services
			);
			// 3. 获取店铺信息
			this.shop = new Shop(data.shopInfo);
			// 4. 获取商品的详情数据
			this.detailInfo = data.detailInfo;
			// 5. 获取参数信息
			this.paramsInfo = new GoodsParam(
				data.itemParams.info,
				data.itemParams.rule
			);
			// 6.获取评论信息
			if (data.rate.cRate !== 0) {
				this.commentInfo = data.rate.list[0];
			}
		});
	},
  methods:{
    //监听goodsInfo中的图片加载
    imgLoad(){
      this.$refs.scroll.refresh();
    }
  }
};
</script>

<style scoped>
.detail {
	height: 100vh
}
.wrapper{
  height: calc(100vh - 45px - 50px);
}
</style>