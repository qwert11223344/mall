<template>
		<div class="category-content">
			<span
				class="content-item"
				v-for="(item, index) in list"
				:key="index"
			>
				<img :src="item.image" alt="" srcset="" />
				{{ item.title }}
			</span>
		</div>
</template>

<script>

export default {
	props: {
		categoryData:{
      type: Object,
      default(){
        return {};
      }
    }
	},
	computed: {
    list(){
      return categoryData.subcategories;
    }
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
	padding: 0.5rem;
}
.content-item {
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	padding: 0.5rem 0.3rem;
	width: 33%;
}
.content-item img {
	width: 100%;
	margin-bottom: 0.5rem;
}
</style>