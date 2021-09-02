<template>
  <div class="cart-nav">
    <nav-bar>
      <template #center>购物车({{cartLength}})</template>
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
    cartLength:{
      type: Number,
      default: 0,
    }
  }
}
</script>

<style scoped>
  .cart-nav{
     background-color: var(--color-tint);
  }
</style>