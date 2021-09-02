<template>
  <div class="detail-bottom-bar">
    <span class="service">
      <i class="iconfont">&#xf135;</i>
      客服
    </span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .detail-bottom-bar{
    display: flex;
    height: 49px;
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .service{
    display: flex;
    flex-direction: column;
  }
</style>