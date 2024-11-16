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
                name: 'horrified_chars',
                alias: ''
            },
            { 
                path: 'monsters', 
                component: HorrifiedMonsterPickerView,
                name: 'horrified_mons',
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
                name: 'scythe_scorecalc',
                alias: '',
            },
        ]
    }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

