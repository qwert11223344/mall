<template>
	<div class="category">
		<category-nav-bar />
		<div class="content">
			<category-tab-control
				:categories="categories"
				@currentClick="currentClick"
			/>
      <scroll ref="scroll" class="wrapper" :data="[categoryData]">
			<category-content :category-data="categoryData" />
      	</scroll>
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

import Scroll from "components/common/scroll/Scroll.vue";
import TabControl from 'components/content/tabcontrol/TabControl'

export default {
	components: {
		CategoryNavBar,
		CategoryTabControl,
		CategoryContent,
    Scroll,
    TabControl,
	},
	data() {
		return {
			categories: [],
			categoryData: {}
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
			this._getSubcategory(index);
		},
		//获取tab选项卡对应的content
		_getSubcategory(index) {
			const maitKey = this.categories[index].maitKey;
			getSubcategory(maitKey).then(res => {
        this.$set(this.categoryData, 'subcategories', res.data.list)
			});
		},
		getCategoryDetail(type, index) {
			// 1.获取请求的miniWallkey
			const miniWallkey = this.categories[index].miniWallkey;
			// 2.发送请求,传入miniWallkey和type
			getCategoryDetail(miniWallkey, type).then(res => {
				// 3.将获取的数据保存下来
				this.categoryData[this.currentIndex].categoryDetail[type] = res;
        this.$set(this.categoryData, 'recommendData', res)
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