<template>
	<div class="wrapper" ref="wrapper">
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);

export default {
	props: {
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
		}
	},
	methods: {
		refresh() {
			this.scroll && this.scroll.refresh && this.scroll.refresh();
		},
		finishPullUp() {
			this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
		},
		scrollTo(x, y, time = 500) {
			this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
		}
	},
	mounted() {
		let bs = new BScroll(this.$refs.wrapper, {
      click: this.click,
			probeType: this.probeType,
			pullUpLoad: this.pullUpLoad,
		});
	}
};
</script>

<style scoped>
.wrapper {
	overflow: hidden;
}
</style>