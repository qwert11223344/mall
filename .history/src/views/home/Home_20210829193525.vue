<template>
	<div class="home">
		<home-nav-bar />
	</div>
</template>

<script>
import { getHomeData } from "network/home.js";

import HomeNavBar from "./children/HomeNavBar.vue";
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
		HomeNavBar
	},
	created() {
		getHomeData().then(res => {
			console.log(res);
		});
	},
	methods: {
		/*
		 *  网络请求相关的方法
		 */
	}
};
</script>
