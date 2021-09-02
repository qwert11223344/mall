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
    box-shadow: 0 1px 5px rgba(150,150,150, .8);
    justify-content: center;
    align-items: center;
    background-color: #f3f3f3;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>