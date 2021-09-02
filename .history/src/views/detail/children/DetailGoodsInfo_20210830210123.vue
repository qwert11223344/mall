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
        v-for="(image, indey) in item.list"
        :key="indey"
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
    position: relative;
  }
  .line-top, .line-bottom{
    width: 6rem;
    height: .05rem;
    background-color: #000000;
  }
  .line-top{
    margin: .8rem 0 0 .5rem;
  }
  .line-bottom{
    float: right;
    margin: .8rem .5rem .8rem 0;
  }
  .line-top::before, .line-bottom::before{
    content: '';
    display: inline-block;
    height: .3rem;
    width: .3rem;
    border-radius: 50%;
    background-color: #000000;
    position: absolute;
  }
  .line-top::before{
    top: -.12rem;
  }
  .line-bottom::before{
    right: .2rem;
  }
  .desc{
    display: block;
    margin: 1rem 0;
    font-size: .9rem;
    color: #888888;
  }
</style>