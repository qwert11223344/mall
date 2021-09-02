<template>
  <div class="category">
    <category-nav-bar />
    <category-tab-control />
  </div>
</template>

<script>
import CategoryNavBar from './children/CategoryNavBar.vue';
import CategoryTabControl from './children/CategoryTabControl.vue';
export default {
  components:{
    CategoryNavBar,
    CategoryTabControl,
  }
}
</script>

<style scoped>

</style>