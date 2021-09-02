<template>
  <div class="profile-list">
    <li v-for="(item, index) in list" :key="index"></li>
  </div>
</template>

<script>
export default {
  props:{
    list:{
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