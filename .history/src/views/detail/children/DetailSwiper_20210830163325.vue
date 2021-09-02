<template>
  <div class="detail-swiper">
    
  </div>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper";

export default {
  components:{
    Swiper,
    SwiperItem,
  },
  props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
}
</script>

<style scoped>

</style>