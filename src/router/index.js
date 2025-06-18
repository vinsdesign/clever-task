import { createRouter, createWebHistory } from 'vue-router'
import SplashOnboarding from '@/views/SplashOnboarding.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SplashOnboarding',
      component: SplashOnboarding,
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView,
    },
  ],
})

export default router
