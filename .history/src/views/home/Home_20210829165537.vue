<template>
  <div class="home">
    <home-nav-bar />
  </div>
</template>

<script>
import { getHomeData } from 'network/home.js';

import HomeNavBar from './children/HomeNavBar.vue';
export default {
  name: 'Home',
  components:{
    HomeNavBar,
  },
  created(){
    getHomeData().then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }
}
</script>
