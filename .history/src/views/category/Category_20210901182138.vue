<template>
	<div class="category">
		<category-nav-bar />
		<div class="content">
			<category-tab-control
				:categories="categories"
				@currentClick="currentClick"
				class="cate-tab"
			/>
			<category-content :category-content="categoryContent" class="" />
		</div>
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
import CategoryContent from "./children/CategoryContent.vue";
export default {
	components: {
		CategoryNavBar,
		CategoryTabControl,
		CategoryContent
	},
	data() {
		return {
			categories: [],
			categoryContent: []
		};
	},
	created() {
		getCategory().then(res => {
			// 1.获取分类数据
			this.categories = res.data.category.list;
      //获取默认第一个选项卡的数据
      this._getSubcategory(0);
		});
	},
	methods: {
		//当前tab选项卡点击
		currentClick(index) {
			console.log(index);
		},
		//获取tab选项卡对应的content
		_getSubcategory(index) {
			getSubcategory(this.categories[0].maitKey).then(res => {
				this.categoryContent = res.data.list;
			});
		}
	}
};
</script>

<style scoped>
.content {
	display: flex;
}
</style>