import { createRouter, createWebHashHistory } from 'vue-router'
import { authCheck, loginCheck } from '@/services/router.service'
import LoginView         from '../views/LoginView.vue'
import RegisterView      from '../views/RegisterView.vue'
import DashboardView     from '../views/DashboardView.vue'
import DashboardChatView from '../components/DashboardChatView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    beforeEnter: loginCheck
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
    beforeEnter: loginCheck
  },
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView,
    redirect : "/botchat",
    beforeEnter: authCheck,
    children: [
      {
        path: '/botchat',
        name: 'botchat',
        component: DashboardChatView
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
