<template>
	<div class="profile-list">
		<li v-for="(item, index) in list" :key="index">
			<span><i v-html="item.icon" class="iconfont"></i></span>{{ item.text }}
		</li>
	</div>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			default() {
				return [];
			}
		}
	}
};
</script>

<style scoped>
.profile-list {
	border-bottom: 0.9rem solid #f3f3f3;
  padding: 0 .5rem ;
}
li {
	list-style: none;
  display: flex;
  align-items: center;
  border-bottom: .1rem solid #f3f3f3;
  font-size: 1.2rem;
  padding: 1rem .5rem;
}
.iconfont{
  font-size: 1.5rem;
  margin-right: .5rem;
}
</style>