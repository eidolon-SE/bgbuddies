import { createRouter, createWebHistory } from 'vue-router'

import HorrifiedView from './views/HorrifiedView.vue'
import HorrifiedCharacterPickerView from './views/HorrifiedCharacterPickerView.vue'
import HorrifiedMonsterPickerView from './views/HorrifiedMonsterPickerView.vue'

import ScytheView from './views/ScytheView.vue'
import ScytheScoreCalculatorView from './views/ScytheScoreCalculatorView.vue'

export const routes = [
    {
        path: '/horrified',
        name: 'horrified',
        meta: { verbose: 'Horrified' },
        component: HorrifiedView,
        alias: '',
        children: [
            { 
                path: 'characters', 
                component: HorrifiedCharacterPickerView,
                alias: ''
            },
            { 
                path: 'monsters', 
                component: HorrifiedMonsterPickerView,
            }
        ],
    },
    {
        path: '/scythe',
        name: 'scythe',
        meta: { verbose: 'Scythe' },
        component: ScytheView,
        children: [
            {
                path: 'score',
                component: ScytheScoreCalculatorView,
                alias: '',
            },
        ]
    }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

