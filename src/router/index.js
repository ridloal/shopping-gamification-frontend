import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PrizeClaimView from '@/views/PrizeClaimView.vue'
import PrizeRewardView from '@/views/PrizeRewardView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import TermsView from '@/views/TermsView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import ContactUsView from '@/views/ContactUsView.vue'

// Fungsi untuk smooth scroll yang lebih terkontrol
function smoothScrollTo(targetPosition, duration = 1000) {
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  let startTime = null

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)

    // Fungsi easing untuk membuat scroll lebih natural
    const easeInOutCubic = progress => {
      return progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2
    }

    window.scrollTo(0, startPosition + (distance * easeInOutCubic(progress)))

    if (progress < 1) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}

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
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      // Tunggu sampai navigasi/transisi selesai
      setTimeout(() => {
        if (savedPosition) {
          smoothScrollTo(savedPosition.top, 1000)
        } else {
          smoothScrollTo(0, 1000)
        }
        resolve(false)
      }, 100)
    })
  }
})

export default router