<template>
  <div class="detail-goods-info">
    <div class="line"></div>
    <span class="desc">
      {{ detailInfo.desc }}
    </span>
    <div class="line"></div>
    <span>
      {{ detailInfo.detailImage[0].key }}
    </span>
    <img v-for="(item, index)" src="" alt="" srcset="">
  </div>
</template>

<script>
export default {
  props:{
    detailInfo:{
      type: Object,
      default(){
        return {};
      }
    }
  }
}
</script>

<style>

</style>