<template>
  <div class="home-recommend">
    <div class="recommend-item" v-for="(item, index) in recommends" :key="index">
      
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommends:{
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