<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar.vue';
export default {
  components:{
    MainTabBar,
  }
}
</script>
<style>
  @import url('assets/css/base.css');
  @import url('assets/fonts/iconfont.css');
</style>
