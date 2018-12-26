import VueRouter from 'vue-router'
import Login from './pages/Login.vue'
import Main from './pages/Main.vue'
import Data from './pages/Data.vue'
import MyInfo from './pages/MyInfo.vue'

export default new VueRouter({
	routes: [
		{ path: '/login', component: Login },
		{
			path: '/main', component: Main,
			children: [
				{
					path: '/data',
					component: Data
				},
				{
					path: '/myinfo',
					component: MyInfo
				}
			]
		}
	]
})