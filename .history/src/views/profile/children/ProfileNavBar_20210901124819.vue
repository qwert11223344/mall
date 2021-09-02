<template>
  <div class="profile-nav-bar">
    <nav-bar>
      <template #center>
        我的
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
  .profile-nav-bar{
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>