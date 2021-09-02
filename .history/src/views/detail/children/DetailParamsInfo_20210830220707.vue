<template>
  <div class="detail-params-info" v-if="Object.keys(paramInfo).length != 0">
    <div class="rule"></div>
  </div>
</template>

<script>
export default {
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
}
</script>

<style scoped>

</style>