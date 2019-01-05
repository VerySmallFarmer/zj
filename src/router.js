import VueRouter from 'vue-router'
import Login from './pages/Login.vue'
import Main from './pages/Main.vue'
import Data from './pages/Data.vue'
import Marketing from './pages/Marketing.vue'
import Teaching from './pages/Teaching.vue'
import MyInfo from './pages/MyInfo.vue'
import ChangePw from './pages/ChangePw.vue'

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
					path: '/marketing',
					component: Marketing
				},
				{
					path: '/teaching',
					component: Teaching
				},
				{
					path: '/myinfo',
					component: MyInfo
				},
				{
					path: '/changepw',
					component: ChangePw
				}
			]
		}
	]
})