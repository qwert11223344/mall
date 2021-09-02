<template>
	<div class="check-botton">
		<i class="iconfont" v-show="!isShowCheckBtn">&#xe646;</i>
		<i class="iconfont" v-show="isShowCheckBtn">&#xe647;</i>
	</div>
</template>

<script>
export default {
	props:{
    isShowCheckBtn:{
      type: Boolean,
      default: false,
    }
  },
};
</script>

<style scoped>
  .check-botton{
    display: flex;
    height: 3rem;
    width: 3rem;
    justify-content: center;
    align-items: center;
  }
</style>