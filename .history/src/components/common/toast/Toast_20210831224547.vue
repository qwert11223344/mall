<template>
 <transition name="fade">
	<div class="toast" v-show="isShow">
		<span>{{ message }}</span>
	</div>
  </transition>
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
			this.message = message;
      this.isShow = true;
			setTimeout(() => {
        // this.isShow = false;
        // this.message = null;	
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
	padding: .8rem 1.6rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>