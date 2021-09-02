<template>
  <div class="good-list">

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