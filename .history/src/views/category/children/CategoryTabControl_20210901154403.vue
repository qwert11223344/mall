<template>
  <div class="cate-tab-control">
    <span v-for="(item, index) in categories" :key="index" class="tab-item">
      {{ item.title }}
    </span>
  </div>
</template>

<script>
export default {
  props:{
    categories:{
      type: Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .cate-tab-control{
    display: flex;
    flex-direction: column;
  }
</style>