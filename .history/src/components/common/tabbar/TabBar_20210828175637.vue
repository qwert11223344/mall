<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
  .tab-bar{
    display: flex;
    height: 49px;
    box-shadow: 0 -1px 1px rgba(150,150,150, .8);
  }
</style>