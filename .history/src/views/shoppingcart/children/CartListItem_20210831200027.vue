<template>
	<div class="cart-list-item">
		<check-button />
		<img :src="item.image" alt="" />
		<div class="item_info" @click="infoClick(item)">
			<p class="item_title">{{ item.title }}</p>
			<p class="item_desc">{{ item.desc }}</p>
			<p>
				<span class="item_price">{{ item.price }}</span>
				<span class="item_count">x{{ item.count }}</span>
			</p>
		</div>
	</div>
</template>

<script>
import CheckButton from "./CheckButton.vue";
export default {
	props: {
		item: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	components: {
		CheckButton
	},
  methods:{
    infoClick(item){
      console.log(item);
      this.$router.push({
        path:'/detail',
        query:{
          iid: item.iid,
        }
      })
    }
  }
};
</script>

<style scoped>
.cart-list-item {
	display: flex;
	align-items: center;
	padding: 1rem 0.5rem 0.5rem 0;
	height: 9rem;
	border-bottom: 0.1rem solid #cccccc;
}
img {
	width: 5rem;
	border-radius: 0.5rem;
}
.item_info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
	width: calc(100vw - 1rem - 5rem - 2rem);
  height: 100%;
}
.item_info .item_title, .item_info .item_desc{
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	font-size: 0.9rem;
	color: #888;
}
.item_count {
	float: right;
}
</style>