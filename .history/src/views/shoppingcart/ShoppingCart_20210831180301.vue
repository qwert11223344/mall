<template>
  <div class="shopping-cart">
    <cart-nav-bar :cart-length="cartLength" />
    <cart-list :cart-list="cartList" />
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

import CartNavBar from './children/CartNavBar.vue';
import CartList from './children/CartList.vue';
export default {
  data(){
    return {

    }
  },
  components:{
    CartNavBar,
    CartList,
  },
  computed:{
    ...mapGetters(['cartLength', 'cartList'])
  }
}
</script>

<style scoped>

</style>