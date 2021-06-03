import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
		meta: {
			title: '管理中心'
		},
		children: [{
				path: 'index',
				name: 'Index',
				component: () => import('../views/index.vue'),
				children: [{
						path: 'pages1',
						name: 'Pages1',
						component: () => import('../views/pages1.vue'),
					},
					{
						path: 'pages2',
						name: 'Pages2',
						component: () => import('../views/pages2.vue'),
					}
				]
			},
			{
				path: 'user',
				name: 'User',
				component: () => import('../views/user.vue'),
			},

		]
	}
]

const router = new VueRouter({
	routes
})

export default router
