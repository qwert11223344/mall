<template>
  <div class="cart-list">
    <cart-list-item v-for="(item, index) in cartList"
                     :item="item"
                     :key="index"/>
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
import Scroll from 'componpens/common/scroll/Scroll.vue';
export default {
  props:{
    cartList:{
      type: Array,
      default(){
        return [];
      }
    }
  },
  components:{
    CartListItem,
    Scroll,
  }
}
</script>

<style scoped>

</style>