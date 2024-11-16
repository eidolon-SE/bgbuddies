import ScytheView from '../views/Scythe/ScytheView.vue'
import ScytheScoreCalculatorView from '../views/Scythe/ScytheScoreCalculatorView.vue'

export const ScytheRoutes = {
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
