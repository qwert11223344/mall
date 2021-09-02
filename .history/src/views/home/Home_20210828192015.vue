<template>
  <div class="home">
    <home-nav-bar />
  </div>
</template>

<script>
import HomeNavBar from './children/HomeNavBar.vue';
export default {
  name: 'Home',
  components:{
    HomeNavBar,
  }
}
</script>
