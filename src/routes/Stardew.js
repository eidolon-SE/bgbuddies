export const StardewRoutes = {
    path: '/stardew',
    name: 'stardew',
    meta: { verbose: 'Stardew Valley: The Board Game' },
    component: () => import('../views/Stardew/StardewView.vue'),
    children: [
        {
            path: 'picker',
            component: () => import('../views/Stardew/StardewPickerView.vue'),
            name: 'stardew_picker',
            alias: '',
        },
    ]
}
