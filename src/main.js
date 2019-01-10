import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import ToastPlugin from 'vux/src/plugins/toast/index' /* 坑爹vux,按文档解构方式引入会报错*/
import axiosIntercept from './axios-intercept'
import App from './App.vue'
import store from './store/index'

axiosIntercept()

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ToastPlugin)

export default new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')