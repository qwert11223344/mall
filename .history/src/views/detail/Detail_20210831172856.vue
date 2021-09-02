<template>
	<div class="detail">
		<detail-nav-bar @currentClick="currentClick" ref="nav" />
		<scroll
			ref="scroll"
			class="wrapper"
			@scroll="currentPosition"
			:probe-type="3"
		>
			<detail-swiper :top-images="topImages" ref="swiper" />
			<detail-base-info :goods="goods" />
			<detail-shop-info :shop="shop" />
			<detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad" />
			<detail-params-info :param-info="paramsInfo" ref="params" />
			<detail-comment-info :comment-info="commentInfo" ref="comment" />
			<good-list :goods="recommend" ref="recommend" />
		</scroll>
		<back-top @click.native="backTop" v-show="isShowBackTop" />
		<detail-bottom-bar @addCart="addToCart"/>
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

import { itemListenerMixin, backTopMixin } from "common/mixin";

import Scroll from "components/common/scroll/Scroll.vue";
import GoodList from "components/content/goodlist/GoodList";

import DetailNavBar from "./children/DetailNavBar";
import DetailSwiper from "./children/DetailSwiper";
import DetailBaseInfo from "./children/DetailBaseInfo.vue";
import DetailShopInfo from "./children/DetailShopInfo.vue";
import DetailGoodsInfo from "./children/DetailGoodsInfo.vue";
import DetailParamsInfo from "./children/DetailParamsInfo.vue";
import DetailCommentInfo from "./children/DetailCommentInfo.vue";
import DetailBottomBar from "./children/DetailBottomBar.vue";
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
			commentInfo: {},
			recommend: [],
			themeTopYs: [],
			currentIndex: 0
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
		GoodList,
		DetailBottomBar
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
			getRecommend().then(response => {
				this.recommend = response.data.list;
			});
		});
	},
	mixins: [itemListenerMixin, backTopMixin],
	methods: {
		//监听goodsInfo中的图片加载
		imgLoad() {
			this.$refs.scroll.refresh();
			this.themeTopYs.push(
				0,
				this.$refs.params.$el.offsetTop - this.$refs.nav.$el.offsetHeight,
				this.$refs.comment.$el.offsetTop - this.$refs.nav.$el.offsetHeight,
				this.$refs.recommend.$el.offsetTop - this.$refs.nav.$el.offsetHeight,
				Infinity
			);
		},
		// 监听navbar点击
		currentClick(index) {
			this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
		},
		// 监听滚动
		currentPosition(position) {
			const positionY = -position.y;
			let length = this.themeTopYs.length;
			for (let i = 0; i < length - 1; i++) {
				if (
					this.currentIndex !== i &&
					positionY >= this.themeTopYs[i] &&
					positionY < this.themeTopYs[i + 1]
				) {
					this.currentIndex = i;
					this.$refs.nav.currentIndex = this.currentIndex;
				}
				this.listenBackTopPosition(position);
			}
		},
		// 添加购物车
		addToCart(){
			console.log(1);
		}
	},
	destroyed() {
    // 2.取消全局事件的监听
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  }
};
</script>

<style scoped>
.detail {
	height: 100vh;
}
.wrapper {
	height: calc(100vh - 45px - 50px);
}
</style>