import HorrifiedView from '../views/Horrified/HorrifiedView.vue'
import HorrifiedCharacterPickerView from '../views/Horrified/HorrifiedCharacterPickerView.vue'
import HorrifiedMonsterPickerView from '../views/Horrified/HorrifiedMonsterPickerView.vue'


export const HorrifiedRoutes = {
    path: '/horrified',
    name: 'horrified',
    meta: { verbose: 'Horrified' },
    component: HorrifiedView,
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
