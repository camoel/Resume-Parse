import Front from '@/views/Front.vue'
import Login from '@/views/Login.vue'

import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'/Front'
    },
   
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Login
    },
    {
      path: '/front',
      name: 'Front',
      component: Front,   
    },
        {
          path: '/analysis',
          name: 'Analysis',
          component: () => import('../views/individual/Analysis.vue'),
        },
       
       {
          path: '/polish',
          name: 'Polish',
          component: () => import('../views/individual/Polish.vue'),
        },
       {
          path: '/searchData',
          name: 'SearchData',
          component: () => import('../views/company/SearchData.vue'),
        },
        {
         path: '/personForm',
          name: 'PersonForm',
          component: () => import('../components/PersonForm.vue'),
        },
    ]})
    


    


export default router
