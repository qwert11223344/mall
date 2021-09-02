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

</style>