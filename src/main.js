import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)
import HelloWorld from './components/HelloWorld.vue'

const Foo = { template: '<div>foo</div>' };
const router = new VueRouter({
  routes :[
    {
      path:'/index',
      component:HelloWorld
    },
    {
      path:'/foo',
      component:Foo
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
