<template>
	<div class="home">
		<home-nav-bar />
		<tab-control
			:titles="['流行', '新款', '精选']"
			@currentClick="currentClick"
			ref="tabControl1"
			v-show="isTabFixed"
		/>
		<scroll
			ref="scroll"
			class="wrapper"
			@scroll="currentPosition"
			:probeType="3"
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
	</div>
</template>

<script>
import { getHomeData, getHomeGoods } from "network/home.js";

import Scroll from "components/common/scroll/Scroll.vue";

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
			isTabFixed: false
			// saveY: 0,
		};
	},
	components: {
		Scroll,
		HomeNavBar,
		HomeSwiper,
		HomeRecommend,
		FeatureView,
		TabControl,
		GoodList
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
		//事件处理
		//轮播图的加载
		swiperImageLoad(){
		this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop - this.$refs.tabControl2.$el.offsetHeight;
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
		//滚动
		currentPosition(position) {
			// 2. 判断是否吸顶
			this.isTabFixed = -position.y >= this.tabOffsetTop ? true : false;
		}
	},
	computed: {
		showGoods() {
			return this.goods[this.currentType].list;
		}
	}
};
</script>

<style scoped>
.home {
	height: 100vh;
}
.wrapper {
	height: calc(100% - 45px - 50px);
}
</style>