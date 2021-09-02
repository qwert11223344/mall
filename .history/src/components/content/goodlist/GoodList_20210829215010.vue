<template>
  <div class="good-list">
    <good-list-item v-for="(item, index) in goods" :goods-item="item" :key="index"/>
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
      type: Object,
      default(){
        return {};
      }
    }
  }
}
</script>

<style scoped>

</style>