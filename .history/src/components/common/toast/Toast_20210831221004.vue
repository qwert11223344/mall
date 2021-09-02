<template>
  <div class="toast" v-show="isShow">
    <span></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      isShow: false
    }
  },
}
</script>

<style scoped>

</style>