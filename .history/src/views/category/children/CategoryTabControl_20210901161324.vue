<template>
	<div class="cate-tab-control">
		<scroll ref="scroll" class="wrapper" :data="categories">
			<div class="tab-list">
				<span
					v-for="(item, index) in categories"
					:key="index"
					class="tab-item"
					@click="currentClick(index)"
					:class="{ active: currentIndex === index }"
				>
					{{ item.title }}
				</span>
			</div>
		</scroll>
	</div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";
export default {
	data() {
		return {
			currentIndex: 0
		};
	},
	components: {
		Scroll
	},
	props: {
		categories: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	methods: {
		currentClick(index) {
			this.currentIndex = index;
		}
	},
  // updated(){
  //   if(this.categories){
  //     this.$refs.scroll.refresh();
  //     console.log(1);
  //   }
  // }
};
</script>

<style scoped>
.cate-tab-control {
	display: flex;
	flex-direction: column;
	background-color: #f3f3f3;
	width: 8rem;
	color: #555555;
}
.tab-item {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem 1rem;
	height: 3.5rem;
}
.active {
	background-color: #ffffff;
	border-left: 0.3rem solid var(--color-high-text);
	color: var(--color-high-text);
	font-weight: bold;
}
.wrapper {
	height: calc(100vh - 45px - 50px);
}
</style>