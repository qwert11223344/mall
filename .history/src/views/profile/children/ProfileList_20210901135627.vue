<template>
  <div class="profile-list">
    <li v-for="(item, index) in list" :key="index">
      <p><span>{{item.icon}}</span>{{item.text}}</p>
    </li>
  </div>
</template>

<script>
export default {
  props:{
    list:{
      type: Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .profile-list{
    border-bottom: .7rem solid #f3f3f3;
  }
</style>