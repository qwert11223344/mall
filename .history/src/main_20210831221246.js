import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from "vue-lazyload";
import toast from 'components/common/toast'

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading: require('./assets/img/placeholder.png'),
  error: require('./assets/img/placeholder.png')
})

// 封装的toast插件
Vue.use(toast)

//事件总线
Vue.prototype.$EventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
