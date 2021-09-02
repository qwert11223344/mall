<template>
	<div class="cart-list">
		<scroll ref="scroll" class="wrapper">
			<cart-list-item
				v-for="(item, index) in cartList"
				:item="item"
				:key="index"
			/>
		</scroll>
	</div>
</template>

<script>
import CartListItem from "./CartListItem";
import Scroll from "components/common/scroll/Scroll.vue";
export default {
	props: {
		cartList: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	components: {
		CartListItem,
		Scroll
	},
	activated() {
		this.$refs.scroll.refresh();
	}
};
</script>

<style scoped>
.wrapper {
	height: calc(100vh - 45px - 50px);
}
</style>