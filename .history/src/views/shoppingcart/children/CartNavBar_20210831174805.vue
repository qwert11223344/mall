<template>
  <div class="cart-nav">
    <nav-bar>
      <template #center>购物车</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
export default {
  components:{
    NavBar,
  }
}
</script>

<style scoped>
  .cart-nav{
    background-color: pink;
  }
</style>