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
import CategoryContent from './children/CategoryContent.vue';
export default {
	components: {
		CategoryNavBar,
		CategoryTabControl,
    categoryContent,
	},
	data() {
		return {
			categories: [],
      catagoryContent: [],
		};
	},
	created() {
		getCategory().then(res => {
			// 1.获取分类数据
			this.categories = res.data.category.list;

      getSubcategory(this.categories[0].maitKey).then(res => {
        this.catagoryContent = res.data.list;
        console.log(res);
      })
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