<template>
	<div class="tab-control">
		<div
			v-for="(item, index) in titles"
			class="tab-control-item"
			:key="index"
			:class="{ active: currentIndex === index }"
			@click="ItemClick(index)"
		>
			<span>{{ item }}</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentIndex: 0
		};
	},
	props: {
		titles: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	methods: {
		ItemClick(index) {
			this.currentIndex = index;
		}
	}
};
</script>

<style scoped>
.tab-control {
	display: flex;
  width: 100vw;
  height: 3.5rem;
}
.tab-control-item{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tab-control-item span{
  padding: .5rem 1rem;
  font-size: 1.1rem;
}
.tab-control-item span.active{
  color: #E53935;
  border-bottom: 1px solid #E53935;
}
</style>