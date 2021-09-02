<template>
  <div class="good-list" v-if="Object.keys(goods).length != 0">
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
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: .5rem;
  }
</style>