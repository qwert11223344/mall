<template>
  <div class="category">
    <category-nav-bar />
    <category-tab-control />
  </div>
</template>

<script>
import {getCategory, getSubcategory, getCategoryDetail} from "network/category";

import CategoryNavBar from './children/CategoryNavBar.vue';
import CategoryTabControl from './children/CategoryTabControl.vue';
export default {
  components:{
    CategoryNavBar,
    CategoryTabControl,
  },
  created(){
    getCategory().then(res => {
		      // 1.获取分类数据
		      this.categories = res.data.category.list
			    console.log(res);
    })
  }
}
</script>

<style scoped>

</style>