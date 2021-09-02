<template>
  <div class="good-list">
    <goods-list-item v-for="(item, id) in goods" :goods-item="item" :key="id"/>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem.vue';
export default {
  components:{
    GoodListItem,
  },
  props:{
    goods:{
      type: Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style scoped>

</style>