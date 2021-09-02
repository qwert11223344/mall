<template>
  <div class="tab-bar-item">
    <div v-if="!isActive" class="item-icon"><slot name="item-icon"></slot></div>
    <div v-else class="item-active-icon"><slot name="item-icon-active"></slot></div>
    <div class="item-text" :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {

}
</script>

<style scoped>

</style>