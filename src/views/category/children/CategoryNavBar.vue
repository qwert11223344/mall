<template>
  <div class="category-nav">
    <nav-bar>
      <template #center>
        分类
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
export default {
  components:{
    NavBar,
  }
}
</script>

<style scoped>
  .category-nav{
    background-color: var(--color-tint);
  }
</style>