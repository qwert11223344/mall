<template>
  <div class="cate-tab-control">
    <span v-for="(item, index) in categories" :key="index" class="tab-item" @click="currentClick(index)" :class="{active:currentIndex === index}">
      {{ item.title }}
    </span>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue';
export default {
  data(){
    return {
      currentIndex: 0,
    }
  },
  props:{
    categories:{
      type: Array,
      default(){
        return [];
      }
    }
  },
  methods:{
    currentClick(index){
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped>
  .cate-tab-control{
    display: flex;
    flex-direction: column;
    background-color: #dddddd;
    width: 7rem;
    color: #555555;
  }
  .tab-item{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem 1rem;
    height: 3.5rem;
  }
  .active{
    background-color: #ffffff;
    border-left: .3rem solid var(--color-high-text);
    color: var(--color-high-text);
    font-weight: bold;
  }
</style>