<template>
	<div class="detail-params-info" v-if="Object.keys(paramInfo).length != 0">
		<div class="size">
			<table>
				<tr v-for="(item, index) in sizes" :key="index">
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
	},
	computed:{
		sizes(){
			if(this.paramInfo.sizes.length === 1) return this.paramInfo.sizes;
			let newArr = [];
			console.log(this.paramInfo.sizes[0]);
			for(let i=1; i<this.paramInfo.sizes.length; i++){
				for(let item of this.paramInfo.sizes[i]){
					// item.splice(0, 1);
					newArr.push(...item)
					// console.log(item);
				}
			}
			
		}
	}
};
</script>

<style scoped>
.detail-params-info {
	padding: 1rem 5rem 2rem ;
  width: 100vw;
  font-size: .9rem;
  border-bottom: .5rem solid #f3f3f3;
}
.size table,
.rule table{
	display: flex;
  width: 100%;
	flex-direction: column;
  border-bottom: .17rem solid #cccccc;
}
.size table tr, .rule table tr{
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
}
.size table tr:last-child, .rule table tr:last-child{
  border: none;
}
.size table th,
.rule table th {
  flex-basis: 2rem;
  display: flex;
  justify-content: center;
}
.size td,
.rule td {
  flex: 3;
  display: flex;
  justify-content: center;
  padding: .5rem 1rem;
}
.rule td{
  color: #f13e3a;
}
.info_img img {
  width: 100%;
}

</style>