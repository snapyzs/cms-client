import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index'

const ifNotAuthenticated = (to,from,next) =>{
  if (!store.getters.isAuth) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to,from,next) => {
  if (store.getters.isAuth) {
    next()
    return
  }
  next('/login')
}

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    beforeEnter: ifNotAuthenticated,
    component: () => import('@/views/Login')
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'empty'},
    component: () => import('@/views/Register')
  },
  {
    path: '/',
    name: 'content',
    meta: {layout: 'main'},
    beforeEnter: ifAuthenticated,
    component: () => import('@/views/Content')
  },
  {
    path: '/info',
    name: 'info',
    meta: {layout: 'main'},
    component: () => import('@/views/Info')
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {layout: 'main'},
    component: () => import('@/views/Contact')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {layout: 'main'},
    component: () => import('@/views/Profile')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
