<template>
  <div class="detail-shop-info">
    <div class="top">
      <img :src="shop.logo">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="middle">
      <div class="middle-left">
        <div class="sell-count">
          <span class="number">{{shop.sells}}</span>
          <span>总销量</span>
        </div>
        <div class="goods-count">
          <span class="number">{{shop.goodsCount}}</span>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="bottom">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    shop:{
      type: Object,
      default(){
        return {};
      }
    }
  }
}
</script>

<style scoped>
  .detail-shop-info{
    padding: 2rem 0;
    height: 500px;
  }
  .top{
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }
  .top img{
    width: 4rem;
    border-radius: 50%;
  }
  .top .title{
    font-size: 1.2rem;
    margin-left: 1rem;
  }
  .middle{
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .middle .middle-left{
    border-right: 1px solid #dddddd;
    padding: 0 .5rem 0 0;
    display: flex;
    justify-content: space-between;
  }
  .middle-left .number{
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .middle-left .sell-count, .middle-left .goods-count{
    display: inline-flex;
    flex-direction: column;
    padding: 1rem .5rem;
    align-items: center;
  }
  .middle-right td{
    padding: .2rem .5rem;
  }
  .middle-right .score {
    color: #5ea732;
  }

  .middle-right .score-better {
    color: #f13e3a;
  }

  .middle-right .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }

  .middle-right .better-more span {
    background-color: #f13e3a;
  }
  .bottom{
    text-align: center;
    margin-top: 2rem;
  }
  .bottom span{
    padding: 1rem 4rem;
    border-radius: 2rem;
    background-color: #f2f5f8;
    color: #999999;
  }
</style>