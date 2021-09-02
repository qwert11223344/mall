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
    padding: 1rem .5rem 0 1rem;
    height: 9rem;
    background-color: pink;
  }
  img{
    width: 5rem;
    border-radius: .5rem;
  }
  .item_info{
    width: calc(100vw - 1rem - 5rem);
    position: relative;
  }
  .item_info p{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: .9rem;
    color: #888;
    margin-bottom: 1rem;
  }
  .item_price, .item_count{
   position: absolute;
   bottom: .5rem;
  }
  .item_count{
   right: .5rem;
  }
</style>