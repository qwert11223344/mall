<template>
	<div class="detail-nav">
		<nav-bar>
			<template #left>
				<i class="iconfont" @click="backClick">&#xe6c0;</i>
			</template>

			<template #center>
				<div class="center">
					<span v-for="(item, index) in titles" :key="index" :class="{active:currentIndex === index}" @click="currentClick(index)">{{ item }}</span>
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
			// titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
		};
	},
	components: {
		NavBar
	},
  methods:{
    currentClick(index){
      this.currentIndex = index;
      this.$emit('currentClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }
};
</script>

<style scoped>
  .detail-nav{
    border-bottom: 1px solid #cccccc;
  }
  .center{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .center span{
    padding: .3rem;
  }
  span.active {
    color: #E53935;
    border-bottom: 1px solid #E53935;
  }
</style>