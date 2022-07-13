import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/Home/Home.vue'),
      },
      {
        path: '/video',
        component: () => import('../views/videoManage/VideoManage.vue'),
      },
      {
        path: '/user',
        component: () => import('../views/userManage/UserManage.vue'),
      },
      {
        path: '/page1',
        component: () => import('../views/other/PageOne.vue'),
      },
      {
        path: '/page2',
        component: () => import('../views/other/PageTwo.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
