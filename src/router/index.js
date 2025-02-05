import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PrizeClaimView from '@/views/PrizeClaimView.vue'
import PrizeRewardView from '@/views/PrizeRewardView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/PrizeClaim',
    name: 'PrizeClaim',
    component: PrizeClaimView
  },
  {
    path: '/PrizeReward/:claim_code',
    name: 'PrizeReward',
    component: PrizeRewardView
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router