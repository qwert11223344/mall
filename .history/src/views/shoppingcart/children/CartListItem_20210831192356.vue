<template>
  <div class="cart-list-item">
    <img :src="item.image" alt="" />
    <div class="item_info" @click="infoClick(item)">
      <p class="item_title">{{ item.title }}</p>
      <p class="item_desc">{{ item.desc }}</p>
      <span class="item_price">{{ item.price }}</span>
      <span class="item_count">x{{ item.count }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style scoped>
  .cart-list-item{
    display: flex;
  }
</style>