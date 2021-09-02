<template>
  <div class="detail-shop-info">
    <div class="top">
      <img :src="shop.logo">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="middle">
      <div class="middle-left">
        <div class="sell-count">
          <span>{{shop.sells}}</span>
          <span>总销量</span>
        </div>
        <div class="goods-count">
          <span>{{shop.sells}}</span>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="middle-right"></div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>