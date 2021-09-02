<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive" class="item-icon"><slot name="item-icon"></slot></div>
    <div v-else class="item-active-icon"><slot name="item-icon-active"></slot></div>
    <div class="item-text" :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  props: {
      path: {
        type: String,
        required: true
      },
      activeColor: {
        type: String,
        default: '#ff5777'
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    },
}
</script>

<style scoped>
  .tab-bar-item{
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #cccccc;
  }
  .tab-bar-item:last-child{
    border: none;
  }
</style>