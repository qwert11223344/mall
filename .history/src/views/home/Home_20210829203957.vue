<template>
	<div class="home">
		<home-nav-bar />
		<home-swiper :banners="banners" />
		<home-recommend :recommends="recommends" />
		<feature-view />

		<!-- <good-list :goods="goods"/> -->
	</div>
</template>

<script>
import { getHomeData, getHomeGoods } from "network/home.js";

import HomeNavBar from "./children/HomeNavBar.vue";
import HomeSwiper from "./children/HomeSwiper.vue";
import HomeRecommend from "./children/HomeRecommend.vue";
import FeatureView from "./children/FeatureView.vue";
import TabControl from 'components/content/TabControl.vue';
import GoodList from "components/content/goodlist/GoodList.vue";
export default {
	name: "Home",
	data() {
		return {
			banners: [],
			recommends: [],
			goods: {
			  'pop': { page: 0, list: []},
			  'new': { page: 0, list: []},
			  'sell': { page: 0, list: []},
			},
			// currentType: 'pop',
			// tabOffsetTop: 0,
			// isTabFixed: false,
			// saveY: 0,
		};
	},
	components: {
		HomeNavBar,
		HomeSwiper,
		HomeRecommend,
		FeatureView,
		GoodList
	},
	created() {
		this.getHomeData();
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
		}
	},
	//获取商品数据
	getHomeGoods(type) {
		const page = this.goods[type].page + 1;
		getHomeGoods(type, page).then(res => {
			this.goods[type].list.push(...res.data.list);
			this.goods[type].page += 1;
		});
	}
};
</script>
