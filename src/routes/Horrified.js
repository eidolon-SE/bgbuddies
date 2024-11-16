import HorrifiedView from '../views/HorrifiedView.vue'
import HorrifiedCharacterPickerView from '../views/HorrifiedCharacterPickerView.vue'
import HorrifiedMonsterPickerView from '../views/HorrifiedMonsterPickerView.vue'


export const HorrifiedRoutes = {
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
}
