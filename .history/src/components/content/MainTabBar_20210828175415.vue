<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <template #item-icon>
          <i class="iconfont">&#xe619;</i>
        </template>
        <template #item-icon-active>
          <i class="iconfont">&#xe622;</i>
        </template>
        <template #item-text>
          <span>首页</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template #item-icon>
          <i class="iconfont">&#xe7f9;</i>
        </template>
        <template #item-icon-active>
          <i class="iconfont">&#xe7f8;</i>
        </template>
        <template #item-text>
          <span>分类</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/shoppingcart">
        <template #item-icon>
          <i class="iconfont">&#xe601;</i>
        </template>
        <template #item-icon-active>
          <i class="iconfont">&#xe600;</i>
        </template>
        <template #item-text>
          <span>购物车</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template #item-icon>
          <i class="iconfont">&#xe614;</i>
        </template>
        <template #item-icon-active>
          <i class="iconfont">&#xe607;</i>
        </template>
        <template #item-text>
          <span>我的</span>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue';
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  components:{
    TabBar,
    TabBarItem,
  }
}
</script>

<style>

</style>