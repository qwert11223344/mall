<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    justify-content: center;
    align-items: center;
  }
  .left, .center, .right{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left{
    flex: 1;
    background-color: aqua;
  }
  .center{
    flex: 3;
  }
  .right{
    flex: 1;
  }
</style>