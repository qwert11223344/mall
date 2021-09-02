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
    padding: 1rem;
    justify-content: center;
  }
  .recommend-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
  }
  .recommend-item a{
    text-decoration: none;
  }
  .recommend-item img{
    width: 100%;
  }
</style>