<template>
	<div class="detail">
    <detail-nav-bar />
  </div>
</template>

<script>
import {
	getDetail,
	Goods,
	Shop,
	GoodsParam,
	getRecommend
} from "network/detail";

import DetailNavBar from "./childComps/DetailNavBar";


export default {
	name: "Detail",
	data() {
		return {
			iid: null,
			topImages: [],
			goods: {},
			shop: {},
			detailInfo: {},
			paramsInfo: {},
			commentInfo: {},
			// recommend: [],
		};
	},
  components:{
    DetailNavBar,
  },
	created() {
		// 1. 保存传入的iid
		this.iid = this.$route.params.iid;
		// 2. 根据iid请求详情数据
		getDetail(this.iid).then(response => {
			// 1. 获取顶部轮播数据
			const data = response.result;
			this.topImages = data.itemInfo.topImages;
			// 2. 获取商品信息
			this.goods = new Goods(
				data.itemInfo,
				data.columns,
				data.shopInfo.services
			);
			// 3. 获取店铺信息
			this.shop = new Shop(data.shopInfo);
			// 4. 获取商品的详情数据
			this.detailInfo = data.detailInfo;
			// 5. 获取参数信息
			this.paramsInfo = new GoodsParam(
				data.itemParams.info,
				data.itemParams.rule
			);
			// 6.获取评论信息
			if (data.rate.cRate !== 0) {
				this.commentInfo = data.rate.list[0];
			}
		});
	}
};
</script>

<style scoped>
</style>