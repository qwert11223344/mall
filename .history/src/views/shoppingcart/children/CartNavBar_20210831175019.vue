<template>
  <div class="cart-nav">
    <nav-bar>
      <template #center>购物车({{length}})</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
export default {
  components:{
    NavBar,
  },
  props:{
    length:{
      type: Number,
      default: 0,
    }
  }
}
</script>

<style scoped>
  .cart-nav{
    background-color: pink;
  }
</style>