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
    <img
        :src="item"
        alt=""
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        @load="loadImg"
      />
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
  .detail-goods-info{
    
  }
  .line{
    width: 6rem;
    height: .05rem;
    background-color: #000000;
  }
  .desc{
    display: block;
    margin: 1rem 0;
    font-size: .9rem;
    color: #cccccc;
  }
</style>