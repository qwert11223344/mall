<template>
  <div class="home-recommend">
    <div class="recommend-item" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommends:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .home-recommend{
    display: flex;
    width: 100vw;
    padding: 2rem;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item a{
    text-decoration: none;
  }
  .recommend-item img{
    width: 100%;
  }
</style>