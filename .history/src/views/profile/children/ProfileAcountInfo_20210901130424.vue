<template>
  <div class="acount-info">
    <div class="balance">
      <span class="number">0.00</span>元
      <span class="text">我的余额</span>
    </div>
    <div class="discount">
      <span class="number">0</span>个
      <span class="text">我的优惠</span>
    </div>
    <div class="integration">
      <span class="number">0</span>分
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
    
  }
</style>