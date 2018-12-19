import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld.vue'

export default new VueRouter({
    routes: [
        { path: '/', redirect: '/index'},
        { path: '/index', component: HelloWorld}
    ]
})