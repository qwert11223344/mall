<template>
	<div class="detail-comment-info">
		<div class="comment-top"></div>
		<div class="comment-middle"></div>
		<div class="comment-bottom"></div>
	</div>
</template>

<script>
export default {
	props: {
		commentInfo: {
			type: Object,
			default() {
				return {};
			}
		}
	}
};
</script>

<style scoped>
</style>