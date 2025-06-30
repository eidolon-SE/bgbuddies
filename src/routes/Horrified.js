export const HorrifiedRoutes = {
    path: '/horrified',
    name: 'horrified',
    meta: { verbose: 'Horrified' },
    component: () => import('../views/Horrified/HorrifiedView.vue'),
    children: [
        { 
            path: 'characters', 
            component: () => import('../views/Horrified/HorrifiedCharacterPickerView.vue'),
            name: 'horrified_chars',
            alias: ''
        },
        { 
            path: 'monsters', 
            component: () => import('../views/Horrified/HorrifiedMonsterPickerView.vue'),
            name: 'horrified_mons',
        }
    ],
}
