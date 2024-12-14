import WizardView from '../views/Wizard/WizardView.vue'
import WizardScoreSheetView from '../views/Wizard/WizardScoreSheetView.vue'

export const WizardRoutes = {
    path: '/wizard',
    name: 'wizard',
    meta: { verbose: 'Wizard' },
    component: WizardView,
    children: [
        {
            path: 'score',
            component: WizardScoreSheetView,
            name: 'wizard_score',
            alias: '',
        },
    ]
}
