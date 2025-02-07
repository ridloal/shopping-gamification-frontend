import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PrizeClaimView from '@/views/PrizeClaimView.vue'
import PrizeRewardView from '@/views/PrizeRewardView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import TermsView from '@/views/TermsView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import ContactUsView from '@/views/ContactUsView.vue'

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
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUsView
  },
  {
    path: '/terms',
    name: 'Terms',
    component: TermsView
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: PrivacyView
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUsView 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router