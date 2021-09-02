<template>
  <div class="category-content">
    <span class="content-item" v-for="(item, index) in categoryContent" :key="index">
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
    display: inline-flex;
    width: calc(100vw - 8rem);
    flex-wrap: wrap;
  }
  .content-item{
    display: flex;
    flex-direction: column;
    width: 5rem;
  }
</style>