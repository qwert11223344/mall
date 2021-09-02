<template>
  <div class="category-content">
    <img v-for="(item, index) in catagoryContent" :key="index" :src="item.image" alt="" srcset="">
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