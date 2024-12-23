import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/home/Home.vue'),
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('../views/Game.vue'),
    },
    {
      path: '/SettleAccount',
      name: 'SettleAccount',
      component: () => import('../components/SettleAccount/SettleAccount.vue'),
    },
  ],
})

export default router
