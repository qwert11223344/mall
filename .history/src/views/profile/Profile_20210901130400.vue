<template>
  <div class="profile">
    <profile-nav-bar />
    <profile-user-info />
    <profile-acount-info />
  </div>
</template>

<script>
import ProfileNavBar from './children/ProfileNavBar.vue';
import ProfileUserInfo from './children/ProfileUserInfo.vue';
import ProfileAcountInfo from './children/ProfileAcountInfo.vue';
export default {
  components:{
    ProfileNavBar,
    ProfileUserInfo,
    ProfileAcountInfo,
  }
}
</script>

<style>

</style>