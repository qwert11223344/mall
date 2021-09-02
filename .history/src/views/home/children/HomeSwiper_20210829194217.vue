<template>
	<div class="home-swiper">
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index"></swiper-item>
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
  }
};
</script>

<style scoped>
</style>