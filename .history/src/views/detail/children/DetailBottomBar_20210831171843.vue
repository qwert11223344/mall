<template>
  <div class="detail-bottom-bar">
    <span class="service">
      <i class="iconfont">&#xf135;</i>
      客服
    </span>
    <span class="shop">
      <i class="iconfont">&#xe62b;</i>
      店铺
    </span>
    <span class="collect">
      <i class="iconfont">&#xe62a;</i>
      收藏
    </span>
    <span class="add-cart">
      
      加入购物车
    </span>
    <span class="buy">
      
      购买
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
    background-color: #ffffff;
    z-index: 99;
    left: 0;
    right: 0;
    bottom: 0;
  }
  span{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .service, .shop, .collect{
    flex: 1;
  }
  .add-cart, .buy{
    flex: 2;
  }
  .add-cart{
    background-color: rgb(255, 174, 0);
  }
  .buy{
    background-color: #E53935;
  }
</style>