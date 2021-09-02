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
import ProfileList from './children/ProfileList.vue';
export default {
  components:{
    ProfileNavBar,
    ProfileUserInfo,
    ProfileAcountInfo,
    ProfileList,
  }
}
</script>

<style>

</style>