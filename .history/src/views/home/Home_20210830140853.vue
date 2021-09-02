<template>
	<div class="home">
		<home-nav-bar ref="homeNav" />
		<tab-control
			:titles="['流行', '新款', '精选']"
			@currentClick="currentClick"
			ref="tabControl1"
			v-show="isTabFixed"
			class="tab-control"
		/>
		<scroll
			ref="scroll"
			class="wrapper"
			@scroll="currentPosition"
			@pullingUp="loadMore"
			:probe-type="3"
			:pull-up-load='true'
		>
			<home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
			<home-recommend :recommends="recommends" />
			<feature-view />
			<tab-control
				:titles="['流行', '新款', '精选']"
				@currentClick="currentClick"
				ref="tabControl2"
			/>
			<good-list :goods="showGoods" />
		</scroll>
		<back-top @click.native="backTop" v-show="isShowBackTop"/>
	</div>
</template>

<script>
import { getHomeData, getHomeGoods } from "network/home.js";
import {itemListenerMixin, backTopMixin} from 'common/mixin.js';

import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from 'components/common/backtop/BackTop.vue';

import HomeNavBar from "./children/HomeNavBar.vue";
import HomeSwiper from "./children/HomeSwiper.vue";
import HomeRecommend from "./children/HomeRecommend.vue";
import FeatureView from "./children/FeatureView.vue";
import TabControl from "components/content/tabcontrol/TabControl.vue";
import GoodList from "components/content/goodlist/GoodList.vue";
export default {
	name: "Home",
	data() {
		return {
			banners: [],
			recommends: [],
			goods: {
				pop: { page: 0, list: [] },
				new: { page: 0, list: [] },
				sell: { page: 0, list: [] }
			},
			currentType: "pop",
			tabOffsetTop: 0,
			isTabFixed: false,
			saveY: 0,
		};
	},
	mixins:[itemListenerMixin, backTopMixin],
	components: {
		Scroll,
		HomeNavBar,
		HomeSwiper,
		HomeRecommend,
		FeatureView,
		TabControl,
		GoodList,
		BackTop,
	},
	created() {
		this.getHomeData();
		// 2. 请求商品数据
		this.getHomeGoods("pop");
		this.getHomeGoods("new");
		this.getHomeGoods("sell");
	},
	methods: {
		/*
		 *  网络请求相关的方法
		 */
		getHomeData() {
			getHomeData().then(res => {
				this.banners = res.data.banner.list; // 保存数据
				this.recommends = res.data.recommend.list;
			});
		},
		//获取商品数据
		getHomeGoods(type) {
			const page = this.goods[type].page + 1;
			getHomeGoods(type, page).then(res => {
				this.goods[type].list.push(...res.data.list);
				this.goods[type].page += 1;
			});
		},
		/* 
			事件处理
		*/
		//轮播图的加载
		swiperImageLoad() {
			this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
		},
		//当前tabControl点击
		currentClick(index) {
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
			this.$refs.tabControl1.currentIndex = index;
			this.$refs.tabControl2.currentIndex = index;
		},
		//滚动事件
		currentPosition(position) {
			// 1. 判断backTop是否显示
			this.listenBackTopPosition(position);
			// 2. 判断是否吸顶
			this.isTabFixed = -position.y >= this.tabOffsetTop ? true : false;
		},
		//上拉加载更多
		loadMore(){
			this.getHomeGoods(this.currentType);
			this.$refs.scroll.scroll.refresh();
			this.$refs.scroll.finishPullUp();
		},
		
		
	},
	computed: {
		showGoods() {
			return this.goods[this.currentType].list;
		}
	},
	activated(){
		console.log('active');
	},
	deactivated(){
		console.log('de');
	}
};
</script>

<style scoped>
.home {
	height: 100vh;
}
.tab-control {
	position: relative;
	margin-top: -1px;
	z-index: 2;
	background-color: #ffffff;
}
.wrapper {
	position: absolute;
	overflow: hidden;
	top: 44px;
	bottom: 49px;
	left: 0;
	right: 0;
}
</style>