<template>
  <div class="detail-shop-info">
    <div class="top">
      <img :src="shop.logo">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="middle">
      <div class="middle-left">
        <div class="sell-count">
          <span>{{shop.sells}}</span>
          <span>总销量</span>
        </div>
        <div class="goods-count">
          <span>{{shop.goodsCount}}</span>
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
    <div class="bottom"></div>
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
    padding: 2rem 1rem 0;
    height: 500px;
  }
  .top{
    display: flex;
    align-items: center;
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
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .middle .middle-left{
    border-right: 1px solid #dddddd;
    
  }
  .middle-left .sell-count, .middle-left .goods-count{
    display: inline-flex;
    flex-direction: column;
    padding: 1rem .5rem;
  }
</style>