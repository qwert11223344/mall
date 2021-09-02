<template>
  <div class="shopping-cart">
    <cart-nav-bar :cart-length="cartLength" />
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

import CartNavBar from './children/CartNavBar.vue';
export default {
  data(){
    return {

    }
  },
  components:{
    CartNavBar,
  },
  computed:{
    ...mapGetters(['cartLength', 'cartList'])
  }
}
</script>

<style scoped>

</style>