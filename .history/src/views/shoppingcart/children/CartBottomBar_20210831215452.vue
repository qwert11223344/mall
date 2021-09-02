<template>
	<div class="cart-bottom-bar">
		<check-button @click.native="checkAll" :is-show-check-btn="isSelectAll"/>
		<span class="check-btn">全选</span>
		<span class="total">合计:{{ totalPrice }}</span>
		<span class="calc">去计算({{ checkLength }})</span>
	</div>
</template>

<script>
import CheckButton from "./CheckButton.vue";
import { mapGetters } from "vuex";
export default {
	components: {
		CheckButton
	},
	computed: {
		...mapGetters(["cartList"]),
		totalPrice() {
			return (
				"￥" +
				this.cartList
					.filter(item => {
						return item.checked;
					})
					.reduce((oldValue, cur) => {
						return oldValue + cur.count * cur.price;
					}, 0)
			);
		},
    checkLength(){
      return this.cartList.filter(item => item.checked).length
    },
    isSelectAll(){
      return !this.cartList.some(item => !item.checked);
    }
	},
	methods: {
		checkAll() {
			if(this.isSelectAll){
        this.cartList.forEach(item => (item.checked = false));
      }else{
        this.cartList.forEach(item => (item.checked = true));
      }
		}
	}
};
</script>
 
<style scoped>
.cart-bottom-bar {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 50px;
	height: 42px;
	display: flex;
	align-items: center;
	background-color: #cccccc;
}
.cart-bottom-bar span {
	height: 100%;
	flex: 1;
	display: flex;
	align-items: center;
}
.calc {
	justify-content: center;
}
.calc {
	background-color: #e53935;
	color: #ffffff;
}
</style>