import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import ToastPlugin from 'vux/src/plugins/toast/index.js' /* 坑爹vux,按文档解构方式引入会报错*/
import App from './App.vue'
import store from './store/index'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ToastPlugin)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
 