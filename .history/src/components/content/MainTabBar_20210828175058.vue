<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <template #item-icon>
          <i class="iconfont">&#xe619;</i>
          <i class="iconfont">&#xe622;</i>
          <span>首页</span>
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