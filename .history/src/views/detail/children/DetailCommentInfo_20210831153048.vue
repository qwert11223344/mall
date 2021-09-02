<template>
	<div class="detail_commentInfo" v-if="Object.keys(commentInfo).length != 0">
		<div class="commentInfo_title">
			<span class="commentInfo_name">用户评价</span>
			<span class="commentInfo_more">更多</span>
		</div>
		<div class="commentInfo_info">
			<div class="u_info">
				<img :src="commentInfo.user.avatar" alt="" />
				<span>{{ commentInfo.user.uname }}</span>
			</div>
			<div class="commentInfo_content">
				<div class="content">{{ commentInfo.content }}</div>
				<p class="content_info">
					{{ commentInfo.created | dateShow }} {{ commentInfo.style }}
				</p>
			</div>
		</div>
		<div class="shop_reply" v-if="commentInfo.explain != null">
			{{ commentInfo.explain }}
		</div>
		<div class="commentInfo_img" v-if="commentInfo.images != null">
			<img
				:src="item"
				alt=""
				v-for="(item, index) in commentInfo.images"
				:key="index"
			/>
		</div>
	</div>
</template>

<script>
import { formatDate } from "common/utils.js";
export default {
	props: {
		commentInfo: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	filters: {
		dateShow(value) {
			let date = new Date(value * 1000);
			return formatDate(date, "yyyy-MM-dd hh:mm:ss");
		}
	}
};
</script>

<style scoped>
.detail_commentInfo {
	padding: .5rem;
}
.commentInfo_title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: .2rem solid #f3f3f3;
	padding-bottom: .5rem;
}
.commentInfo_more::after{
	content: '>';
}
.u_info img{
	width: 3rem;
	border-radius: 50%;
}
</style>