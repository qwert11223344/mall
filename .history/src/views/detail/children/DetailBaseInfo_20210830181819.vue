<template>
  <div v-if="Object.keys(goods).length !== 0" class="detail-base-info">
    <div class="title">
      {{goods.title}}
    </div>
    <div class="price"></div>
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