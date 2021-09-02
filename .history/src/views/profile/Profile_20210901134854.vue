<template>
  <div class="profile">
    <profile-nav-bar />
    <profile-user-info />
    <profile-acount-info />
    <profile-list />
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
  },
  data(){
    return {
      aboveList:[{
        icon:'&#xe748;',
        text:'我的信息'
      },
      {
      icon:'&#xe674;',
        text:'积分商城'
      },
      {
      icon:'&#xe748;',
        text:'我的信息'
      },],
    }
  }
}
</script>

<style>

</style>