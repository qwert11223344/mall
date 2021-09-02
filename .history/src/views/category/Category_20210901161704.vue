<template>
	<div class="category">
		<category-nav-bar />
		<category-tab-control :categories="categories" @currentClick="currentClick"/>
	</div>
</template>

<script>
import {
	getCategory,
	getSubcategory,
	getCategoryDetail
} from "network/category";

import CategoryNavBar from "./children/CategoryNavBar.vue";
import CategoryTabControl from "./children/CategoryTabControl.vue";
export default {
	components: {
		CategoryNavBar,
		CategoryTabControl
	},
	data() {
		return {
			categories: []
		};
	},
	created() {
		getCategory().then(res => {
			// 1.获取分类数据
			this.categories = res.data.category.list;

      getSubcategory()
			console.log(res);
		});
	},
  methods:{
    //当前tab选项卡点击
    currentClick(index){
      console.log(index);
    }
  }
};
</script>

<style scoped>
</style>