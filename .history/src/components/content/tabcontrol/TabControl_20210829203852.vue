<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles"
         class="tab-control-item"
         :key="index"
         :class="{active: currentIndex === index}"
         @click="ItemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentIndex: 0,
    }
  },
  titles:{
    type: Array,
    default(){
      return [];
    }
  },
  methods:{
    ItemClick(index){
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped>

</style>