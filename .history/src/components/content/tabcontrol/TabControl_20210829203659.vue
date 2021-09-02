<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles"
         class="tab-control-item"
         :key="index"
         :class="{active: currentIndex === index}"
         @click="ItemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>