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
    padding: .5rem;
    justify-content: center;
    text-align: center;
    border-bottom: .5rem solid #f3f3f3;
  }
  .recommend-item{
    flex: 1;
    padding: .5rem;
    display: flex;
    flex-direction: column;
  }
  .recommend-item a{
    text-decoration: none;
  }
  .recommend-item img{
    width: 100%;
    margin-bottom: .5rem;
  }
</style>