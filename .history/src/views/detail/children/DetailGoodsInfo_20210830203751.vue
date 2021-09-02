<template>
  <div class="detail-goods-info">
    <div class="line-top"></div>
    <span class="desc">
      {{ detailInfo.desc }}
    </span>
    <div class="line-bottom"></div>
      <div class="image" v-for="(item, index) in detailInfo.detailImage" :key="index">
        <span>
      {{ item.key }}
    </span>
    <img
        :src="image"
        alt=""
        v-for="(image, index) in item.list"
        :key="index"
      />
      </div>
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
  .line-top, .line-bottom{
    width: 6rem;
    height: .05rem;
    background-color: #000000;
  }
  .line-top::before{
    content: '';
    height: .5rem;
    width: .5rem;
    border-radius: 50%;
    background-color: #000000;
    position: relative;
  }
  .desc{
    display: block;
    margin: 1rem 0;
    font-size: .9rem;
    color: #888888;
  }
</style>