<template>
  <div class="acount-info">
    <div class="balance">
      <p><span class="number">0.00</span>元</p>
      <span class="text">我的余额</span>
    </div>
    <div class="discount">
      <p><span class="number">0</span>个</p>
      <span class="text">我的优惠</span>
    </div>
    <div class="integration">
      <p><span class="number">0</span>分</p>
      <span class="text">我的积分</span>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
  
<style scoped>
  .acount-info{
    display: flex;
    height: 5rem;
  }
  .balance, .discount, .integration{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #f3f3f3;
  }
</style>