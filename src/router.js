import { createRouter, createWebHistory } from 'vue-router'
import HorrifiedView from './views/HorrifiedView.vue'
import ScytheView from './views/ScytheView.vue'

export const routes = [
    {
        path: '/horrified',
        name: 'horrified',
        meta: { verbose: 'Horrified' },
        component: HorrifiedView,
        alias: '',
    },
    {
        path: '/scythe',
        name: 'scythe',
        meta: { verbose: 'Scythe' },
        component: ScytheView,
    }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

