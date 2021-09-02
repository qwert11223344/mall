<template>
	<div class="detail-nav">
		<nav-bar>
			<template #left>
				<i class="iconfont">&#xe6c0;</i>
			</template>

			<template #center>
				<div class="center">
					<span v-for="(item, index) in titles" :key="index" :class="{active:currentIndex === index}">{{ item }}</span>
				</div>
			</template>

				<template #right>
					<span>...</span>
				</template>
		</nav-bar>
	</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
	data() {
		return {
			titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
		};
	},
	components: {
		NavBar
	}
};
</script>

<style scoped>
  .detail-nav{
    border-bottom: 1px solid #cccccc;
  }
  .center{
    display: flex;
    text-align: center;
    align-items: center;
  }
  .center span{
    flex: 1;
    padding: 1rem 0;
  }
  span.active {
    color: #E53935;
    border-bottom: 1px solid #E53935;
  }
</style>