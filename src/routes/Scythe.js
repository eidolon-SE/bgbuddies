export const ScytheRoutes = {
    path: '/scythe',
    name: 'scythe',
    meta: { verbose: 'Scythe' },
    component: () => import('../views/Scythe/ScytheView.vue'),
    children: [
        {
            path: 'faction',
            component: () => import('../views/Scythe/ScytheFactionPickerView.vue'),
            name: 'scythe_faction',
            alias: '',
        },
        {
            path: 'score/:factionsParams*',
            props: true,
            component: () => import('../views/Scythe/ScytheScoreCalculatorView.vue'),
            name: 'scythe_scorecalc',
        },
    ]
}
