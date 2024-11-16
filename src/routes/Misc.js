import MiscView from '../views/Misc/MiscView.vue'
import MiscDiceRollView from '../views/Misc/MiscDiceRollView.vue'

export const MiscRoutes = {
    path: '/misc',
    name: 'misc',
    meta: { verbose: 'Miscellaneous' },
    component: MiscView,
    children: [
        {
            path: 'diceroll',
            name: 'misc_diceroll',
            component: MiscDiceRollView,
            alias: ''
        }
    ],
}
