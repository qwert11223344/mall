<template>
	<div class="good-list-item">
		<img v-lazy="shouImage" alt="" @load="imageLoad" />
		<div class="goods-info">
			<p>{{ goodsItem.title }}</p>
			<span class="price">{{ goodsItem.price }}</span>
			<span class="collect">{{ goodsItem.cfav }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		goodsItem: {
			type: Object,
			default() {
				return {};
			}
		}
	},
  computed: {
    shouImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods:{
    imageLoad(){
      console.log(1);
    }
  }
};
</script>

<style scoped>
.good-list-item{
  display: flex;
  flex-direction: column;
  width: 46vw;
}
.good-list-item img{
  border-radius: .5rem;
}
.goods-info{
  text-align: center;
}
.goods-info p{
  white-space:nowrap;          
  overflow:hidden;             
  text-overflow:ellipsis; 
  margin-top: .5rem; 
}
.goods-info .price{
  color: #E53935;
}
</style>