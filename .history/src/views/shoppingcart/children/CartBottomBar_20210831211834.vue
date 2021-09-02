<template>
  <div class="cart-bottom-bar">
    <check-button @click.native="checkAll" />
    <span class="check-btn">全选</span>
    <span class="total">合计:</span>
    <span class="calc">去计算</span>
  </div>
</template>

<script>
import CheckButton from './CheckButton.vue';
import {mapGetters } from 'vuex';
export default {
  components:{
    CheckButton,
  },
  computed:{
    ...mapGetters(['cartList']),
  },
  methods:{
    checkAll(){

    }
  }
}
</script>
 
<style scoped>
  .cart-bottom-bar{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 50px;
    height: 42px;
    display: flex;
    align-items: center;
    background-color: #cccccc;
  }
  .cart-bottom-bar span{
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
  }
  .calc{  
    justify-content: center; 
  }
  .calc{
    background-color: #E53935;
    color: #ffffff;
  }
</style>