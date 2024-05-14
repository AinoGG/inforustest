import { createRouter, createWebHistory } from 'vue-router'
import HomeScreen from '../views/HomeScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeScreen
    },
    {
      path: '/:name',
      name: 'country',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CountryScreen.vue')
    }
  ]
})

export default router
