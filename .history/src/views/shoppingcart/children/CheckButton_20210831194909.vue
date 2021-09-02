<template>
	<div class="check-botton" @click="changeCheck">
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
	},
  methods:{
    changeCheck(){
      this.isShowCheckBtn = !this.isShowCheckBtn;
    }
  }
};
</script>

<style scoped>
  .check-botton{
    display: flex;
    height: 2rem;
    width: 2rem;
    justify-content: center;
    align-items: center;
  }
</style>