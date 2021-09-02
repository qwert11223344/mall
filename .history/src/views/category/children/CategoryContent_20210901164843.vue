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
    /* justify-content: space-around; */
    width: calc(100vw - 8rem);
    flex-wrap: wrap;
    padding: 1rem;
  }
  .content-item{
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width: 5rem;
    /* height: 10rem; */
  }
  .content-item img{
    width: 100%;
  }
</style>