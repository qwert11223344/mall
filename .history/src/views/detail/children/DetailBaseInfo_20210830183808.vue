<template>
  <div v-if="Object.keys(goods).length !== 0" class="detail-base-info">
    <div class="title">
      {{goods.title}}
    </div>
    <div class="price">
       <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goods:{
      type: Object,
      default(){
        return {};
      }
    }
  }
}
</script>

<style scoped>
  .detail-base-info{
    padding: 1rem;
    width: 100vw;
  }
  .title{
    font-size: 1.1rem;
  }
  .price{
    margin-top: 1rem;
  }
  .n-price{
    font-size: 1.5rem;
    color: #FF4081;
    position: relative;
  }
  .o-price{
    margin-left: .5rem;
    text-decoration: line-through;
    color: #777;
  }
  .discount{
    margin-left: .5rem;
    display: inline-block;
    padding: .2rem .5rem;
    border-radius: 1rem;
    color: #ffffff;
    background-color: #FF4081;
    position: absolute;
  }
  .info-other{
    margin-top: 1.5rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
</style>