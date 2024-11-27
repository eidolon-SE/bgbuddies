<script setup>
    import { ref } from 'vue'
    import { shuffle } from '../../util'

    import HorrifiedMonster from '../../components/HorrifiedMonster.vue'
    import HorrifiedDraculaInfo from '../../components/HorrifiedDraculaInfo.vue'
    import HorrifiedFrankensteinInfo from '../../components/HorrifiedFrankensteinInfo.vue'
    import HorrifiedCreatureInfo from '../../components/HorrifiedCreatureInfo.vue'
    import HorrifiedWolfmanInfo from '../../components/HorrifiedWolfmanInfo.vue'
    import HorrifiedInvisibleInfo from '../../components/HorrifiedInvisibleInfo.vue'
    import HorrifiedMummyInfo from '../../components/HorrifiedMummyInfo.vue'

    const numMons = ref(2)
    const picked = ref(false)
    const monsters = ref([
        { name: 'Count Dracula', id: 1, component: HorrifiedDraculaInfo, cls: 'dracula' },
        { name: 'Frankenstein and Bride of Frankenstein', id: 2, component: HorrifiedFrankensteinInfo, cls: 'frankenstein' },
        { name: 'Creature from the Black Lagoon', id: 3, component: HorrifiedCreatureInfo, cls: 'creature' },
        { name: 'The Wolf Man', id: 4, component: HorrifiedWolfmanInfo, cls: 'wolfman' },
        { name: 'The Invisble Man', id: 5, component: HorrifiedInvisibleInfo, cls: 'invisible' },
        { name: 'The Mummy', id: 6, component: HorrifiedMummyInfo, cls: 'mummy' }
    ])

    function shuffleMonsters() {
        picked.value = true
        shuffle(monsters.value)
    }
</script>

<template>
    <div class="inputs">
        <div>
            <label for="num-mons">Number of monsters: </label>
            <input id="num-mons" type="number" v-model="numMons" min=1 max=6>
        </div>
        <input type="button" class="button" @click="shuffleMonsters" value="Pick">
    </div>
    <Transition name="show-list">
        <ul class="list" v-if="picked">
            <TransitionGroup name="list">
                <li v-for="n in numMons" :key="monsters[n - 1].id"><HorrifiedMonster :monster="monsters[n - 1]" /></li>
            </TransitionGroup>
        </ul>
    </Transition>
</template>

<style>
</style>
