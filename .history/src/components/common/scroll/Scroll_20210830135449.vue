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
  data(){
    return {
      scroll: null,
    }
  },
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
			console.log(1);
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
		this.scroll = new BScroll(this.$refs.wrapper, {
			click: this.click,
			probeType: this.probeType,
			pullUpLoad: this.pullUpLoad
		});

		// 2.事件滚动
		if (this.probeType === 2 || this.probeType === 3) {
			this.scroll.on("scroll", position => {
				this.$emit("scroll", position);
			});
		}

		// 3.上拉加载
		if (this.pullUpLoad) {
			this.scroll.on("pullingUp", () => {
				this.$emit("pullingUp");
			});
		}
	}
};
</script>

<style scoped>
.wrapper {
	overflow: hidden;
}
</style>