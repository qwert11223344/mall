<template>
	<div class="detail-goods-info">
		<div class="line-top"></div>
		<span class="desc">
			{{ detailInfo.desc }}
		</span>
		<div class="line-bottom"></div>
		<div
			class="image"
			v-for="(item, index) in detailInfo.detailImage"
			:key="index"
		>
			<span class="image-key">
				{{ item.key }}
			</span>
			<img
				:src="image"
				alt=""
				v-for="(image, indey) in item.list"
				:key="indey"
        @load="imgLoad"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		detailInfo: {
			type: Object,
			default() {
				return {};
			}
		}
	},
  data(){
    return {
      imageLength: 0,
      currentLoadCount: 0,
    }
  },
  methods:{
    imgLoad(){
      if(this.loaded){
        this.$emit('imgLoad');
      }
    }
  },
  watch:{
    loaded(){
      return 
    }
  }
};
</script>

<style>
.detail-goods-info {
	position: relative;
}
.line-top,
.line-bottom {
	width: 6rem;
	height: 0.05rem;
	background-color: #000000;
}
.line-top {
	margin: 0.8rem 0 0 0.5rem;
}
.line-bottom {
	float: right;
	margin: 0 0.5rem 0.8rem 0;
}
.line-top::before,
.line-bottom::before {
	content: "";
	display: inline-block;
	height: 0.3rem;
	width: 0.3rem;
	border-radius: 50%;
	background-color: #000000;
	position: absolute;
}
.line-top::before {
	top: -0.12rem;
}
.line-bottom::before {
	right: 0.2rem;
}
.desc {
	display: block;
	padding: 1rem .5rem;
	font-size: 0.9rem;
	color: #888888;

}
.image .image-key{
  font-size: .9rem;
  display: block;
  margin: .5rem .5rem;
}
.image img{
  width: 100vw;
}
</style>