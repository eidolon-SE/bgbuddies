import ScytheView from '../views/Scythe/ScytheView.vue'
import ScytheScoreCalculatorView from '../views/Scythe/ScytheScoreCalculatorView.vue'
import ScytheFactionPickerView from '../views/Scythe/ScytheFactionPickerView.vue'

export const ScytheRoutes = {
    path: '/scythe',
    name: 'scythe',
    meta: { verbose: 'Scythe' },
    component: ScytheView,
    children: [
        {
            path: 'faction',
            component: ScytheFactionPickerView,
            name: 'scythe_faction',
            alias: '',
        },
        {
            path: 'score/:factions*',
            props: true,
            component: ScytheScoreCalculatorView,
            name: 'scythe_scorecalc',
        },
    ]
}
