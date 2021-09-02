<template>
  <div class="detail-goods-info">
    <div class="line"></div>
    <span class="desc"></span>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props:{
    detailInfo:{
      type: Object,
      default(){
        return {};
      }
    }
  }
}
</script>

<style>

</style>