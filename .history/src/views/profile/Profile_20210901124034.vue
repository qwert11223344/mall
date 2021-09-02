<template>
  <div class="profile">
    <profile-nav-bar />
  </div>
</template>

<script>
import ProfileNavBar from './children/ProfileNavBar.vue';
import ProfileUserInfo from './children/ProfileUserInfo.vue';
export default {
  components:{
    ProfileNavBar,
    ProfileUserInfo,
  }
}
</script>

<style>

</style>