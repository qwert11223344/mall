<template>
	<swiper class="detail-swiper">
		<swiper-item v-for="(item, index) in topImages" :key="index">
			<img :src="item" @load="imgLoad" />
		</swiper-item>
	</swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  data(){
    return {
      imgcount: 0,
      imgLength: 0
    }
  },
	components: {
		Swiper,
		SwiperItem
	},
	props: {
		topImages: {
			type: Array,
			default() {
				return [];
			}
		}
	},
  methods:{
    imgLoad(){
      if(++this.imgcount === this.imgLength){
        this.loaded = true;
      }
    }
  }
};
</script>

<style scoped>
.detail-swiper {
	height: 300px;
	overflow: hidden;
}
</style>