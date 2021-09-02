<template>
  <div class="cart-list">

  </div>
</template>

<script>
  import CartListItem from "./CartListItem";
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
  }
}
</script>

<style scoped>

</style>