export const WizardRoutes = {
    path: '/wizard',
    name: 'wizard',
    meta: { verbose: 'Wizard' },
    component: () => import('../views/Wizard/WizardView.vue'),
    children: [
        {
            path: 'score',
            component: () => import('../views/Wizard/WizardScoreSheetView.vue'),
            name: 'wizard_score',
            alias: '',
        },
    ]
}
