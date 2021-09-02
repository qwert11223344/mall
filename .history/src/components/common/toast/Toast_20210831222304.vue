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
.toast {
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background-color: rgba(0, 0, 0, 0.6);
	color: #ffffff;
	z-index: 99;
	border-radius: 1rem;
	padding: 1rem 2rem;
}
</style>