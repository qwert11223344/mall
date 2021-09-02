<template>
  <div class="shopping-cart">
    <cart-nav-bar />
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
    ...mapGetters[]
        length: 'cartLength', // 起别名叫:length
      })
  }
}
</script>

<style scoped>

</style>