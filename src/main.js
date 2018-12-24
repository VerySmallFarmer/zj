import Vue from 'vue'
import VueRouter from 'vue-router';
import router from './router'
import App from './App.vue'
import store from './store/index'

Vue.config.productionTip = false
Vue.use(VueRouter)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
 