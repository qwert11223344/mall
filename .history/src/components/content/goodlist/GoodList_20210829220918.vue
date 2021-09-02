<template>
  <div class="good-list">
    <good-list-item v-for="(item, index) in goods" :goods-item="item" :key="index"/>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem.vue';
export default {
  data(){
    return {

    }
  },
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
  .good-list{
    display: flex;
    width: 100vw;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;
  }
</style>