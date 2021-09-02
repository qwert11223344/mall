<template>
	<div class="detail-params-info" v-if="Object.keys(paramInfo).length != 0">
		<div class="size">
			<table>
				<tr v-for="(item, index) in paramInfo.sizes[0]" :key="index">
					<th>{{ item[0] }}</th>
					<td v-for="(td_item, td_index) in item.length - 1" :key="td_index">
						{{ item[td_item] }}
					</td>
				</tr>
			</table>
		</div>
		<div class="rule">
			<table>
					<tr v-for="(item, index) in paramInfo.infos" :key="index">
						<th>{{ item.key }}</th>
						<td>{{ item.value }}</td>
					</tr>
			</table>
		</div>
		<div class="info_img" v-if="paramInfo.image != ''">
			<img :src="paramInfo.image" alt="" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		paramInfo: {
			type: Object,
			default() {
				return {};
			}
		}
	}
};
</script>

<style scoped>
.detail-params-info {
	padding: 1rem 3rem;
  width: 100vw;
  font-size: .9rem;
}
.size table,
.rule table{
	display: flex;
  width: 100%;
	flex-direction: column;
}
.size table tr, .rule table tr{
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
  display: flex;
  align-items: center;
  margin-top: 1rem;
  height: auto;
}
.size table th,
.rule table th {
  margin-right: 1rem;
}
.size table td,
.rule table td {

}
</style>