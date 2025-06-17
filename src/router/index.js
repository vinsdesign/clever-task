import { createRouter, createWebHistory } from 'vue-router'
import SplashOnboarding from '@/views/SplashOnboarding.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SplashOnboarding',
      component: SplashOnboarding,
    },
  ],
})

export default router
