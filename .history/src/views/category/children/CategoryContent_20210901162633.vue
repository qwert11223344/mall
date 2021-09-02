<template>
  <div class="category-content">
    <span v-for="(item, index) in catagoryContent" :key="index">
      <img :src="item.image" alt="" srcset="">
      {{ item.title }}
    </span>
  </div>
</template>

<script>
export default {
  props:{
    catagoryContent:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style scoped>

</style>