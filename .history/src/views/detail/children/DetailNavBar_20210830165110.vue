<template>
	<div class="detail-nav">
		<nav-bar>
			<template #left>
				<i class="iconfont">&#xe6c0;</i>
			</template>

			<template #center>
				<div class="center">
					<span v-for="(item, index) in titles" :key="index">{{ item }}</span>
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
			titles: ["商品", "参数", "评论", "推荐"]
		};
	},
	components: {
		NavBar
	}
};
</script>

<style scoped>
  .detail-nav{
    border-bottom: 1px solid #f3f3f3;
  }
  .center{
    display: flex;
  }
  .center span{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>