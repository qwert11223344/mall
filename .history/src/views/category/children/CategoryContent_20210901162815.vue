<template>
  <div class="category-content">
    <span v-for="(item, index) in categoryContent" :key="index">
      <img :src="item.image" alt="" srcset="">
      {{ item.title }}
    </span>
  </div>
</template>

<script>
export default {
  props:{
    categoryContent:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .category-content{
    display: flex;
    
  }
</style>