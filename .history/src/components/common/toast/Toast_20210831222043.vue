<template>
	<div class="toast" v-show="isShow">
		<span>{{ message }}</span>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: "",
			isShow: false
		};
	},
	methods: {
		show(message = "默认文字", duration = 1500) {
			this.isShow = true;
			this.message = message;
			setTimeout(() => {
				this.isShow = false;
				this.message = "";
			}, duration);
		}
	}
};
</script>

<style scoped>
</style>