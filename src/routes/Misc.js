export const MiscRoutes = {
    path: '/misc',
    name: 'misc',
    meta: { verbose: 'Miscellaneous' },
    component: () => import('../views/Misc/MiscView.vue'),
    children: [
        {
            path: 'diceroll',
            name: 'misc_diceroll',
            component: () => import('../views/Misc/MiscDiceRollView.vue'),
            alias: ''
        }
    ],
}
