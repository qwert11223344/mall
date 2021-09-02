<template>
	<div class="home">
		<home-nav-bar />
    <home-swiper :banners="banners"/>
    <home-recommend :recommends="recommends" />
    <feature-view />
	</div>
</template>

<script>
import { getHomeData } from "network/home.js";

import HomeNavBar from "./children/HomeNavBar.vue";
import HomeSwiper from './children/HomeSwiper.vue';
import HomeRecommend from './children/HomeRecommend.vue';
import FeatureView from './children/FeatureView.vue';
export default {
	name: "Home",
	data() {
		return {
			banners: [],
			recommends: []
			// goods: {
			//   'pop': { page: 0, list: []},
			//   'new': { page: 0, list: []},
			//   'sell': { page: 0, list: []},
			// },
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
				this.banners = res.data.banner.list   // 保存数据
        this.recommends = res.data.recommend.list
			});
		}
	}
};
</script>
