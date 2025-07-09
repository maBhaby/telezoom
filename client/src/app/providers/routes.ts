import { createWebHistory, createRouter } from 'vue-router'
import { ROUTER_PATHS } from '@/shared/config/router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: ROUTER_PATHS.MAIN,
      component: () => import('@/pages/main')
    },
    {
      path: ROUTER_PATHS.CALL_ROOM,
      component: () => import('@/pages/call')
    }
  ]
})
