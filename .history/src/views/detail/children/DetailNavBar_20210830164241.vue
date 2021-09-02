<template>
	<div class="detail-nav">
		<nav-bar>
			<div class="left">
				<template #left>
            <i class="iconfont">&#xe6c0;</i>
        </template>
			</div>
      <div class="center">
				<template #center>
            <span v-for="(item, index) in titles" :key="index">{{ item }}</span>
        </template>
			</div>
      <div class="right">
				<template #right>
            <span>...</span>
        </template>
			</div>
		</nav-bar>
	</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  data(){
    return {
      titles: ['商品', '参数', '评论', '推荐'],
    }
  },
	components: {
		NavBar
	}
};
</script>

<style scoped>
</style>