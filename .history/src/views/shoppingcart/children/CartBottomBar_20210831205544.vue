<template>
  <div class="cart-bottom-bar">
    <span><check-button />全选</span>
    <span>合计:</span>
    <span>去计算</span>
  </div>
</template>

<script>
import CheckButton from './CheckButton.vue';
export default {
  components:{
    CheckButton,
  }
}
</script>
 
<style scoped>
  .cart-bottom-bar{
    position: absolute;
    bottom: 50px;
  }
</style>