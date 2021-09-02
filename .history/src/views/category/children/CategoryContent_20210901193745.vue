<template>
	<scroll ref="scroll" class="wrapper">
		<div class="category-content">
			<span
				class="content-item"
				v-for="(item, index) in categoryData.subcategories"
				:key="index"
			>
				<img :src="item.image" alt="" srcset="" />
				{{ item.title }}
			</span>
		</div>
	</scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";
export default {
	props: {
		categoryData: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	components: {
		Scroll
	},
};
</script>

<style scoped>
.category-content {
	display: inline-flex;
	/* justify-content: center; */
	width: calc(100vw - 8rem);
	flex-wrap: wrap;
	font-size: 0.9rem;
  padding: .5rem;
}
.content-item {
	display: inline-flex;
	flex-direction: column;
	align-items: center;
  padding: .5rem .3rem;
	width: 33%;
}
.content-item img {
	width: 100%;
	margin-bottom: 0.5rem;
}
.wrapper {
	height: calc(100vh - 45px - 50px);
}
</style>