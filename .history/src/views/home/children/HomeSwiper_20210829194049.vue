<template>
	<div class="home-swiper"></div>
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