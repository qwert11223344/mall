<template>
  <div class="detail-params-info" v-if="Object.keys(paramInfo).length != 0">
    <div class="size">
      <table>
        <tr
          v-for="(item, index) in paramInfo.sizes[0]"
          :key="index"
        >
          <th>{{ item[0] }}</th>
          <td v-for="(td_item, td_index) in item.length - 1" :key="td_index">
            {{ item[td_item] }}
          </td>
        </tr>
    </table>
    <div class="rule">
      <table class="params_set">
      <tbody>
        <tr v-for="(item, index) in paramInfo.infos" :key="index">
          <th>{{ item.key }}</th>
          <td>{{ item.value }}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="info_img" v-if="paramInfo.image != ''">
      <img :src="paramInfo.image" alt="" />
    </div>
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
}
</script>

<style scoped>

</style>