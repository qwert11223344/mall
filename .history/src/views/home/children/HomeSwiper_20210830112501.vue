<template>
	<div class="home-swiper">
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper';
export default {
	props: {
    banners:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  components:{
    Swiper,
    SwiperItem,
  },
  methods:{
    imageLoad(){
      
    }
  }
};
</script>

<style scoped>
</style>