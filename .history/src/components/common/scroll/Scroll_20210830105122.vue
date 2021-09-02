<template>
  <div class="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)

let bs = new BScroll('.wrapper', {
  probeType: 3,
  pullUpLoad: true
})
export default {
  props:{
    probeType: {
        type: Number,
        default: 0
      },
      click: {
        type: Boolean,
        default: true
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      },
  }
}
</script>

<style scoped>
  .wrapper{
    overflow: hidden;
  }
</style>