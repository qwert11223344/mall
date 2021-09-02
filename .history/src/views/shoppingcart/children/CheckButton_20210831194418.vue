<template>
	<div class="check-botton">
		<i class="iconfont" v-show="!isShowCheckBtn">&#xe646;</i>
		<i class="iconfont" v-show="isShowCheckBtn">&#xe647;</i>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isShowCheckBtn: false
		};
	}
};
</script>

<style scoped>
</style>