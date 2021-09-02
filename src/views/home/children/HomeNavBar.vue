<template>
    <nav-bar class="home-nav">
      <template #center>
        蘑菇街
      </template>
    </nav-bar>
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
  .home-nav{
     background-color: var(--color-tint);
  }
</style>