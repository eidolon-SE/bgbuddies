<script setup>
    import { ref } from 'vue'
    import { shuffle } from '../../util'

    import HorrifiedCharacter from '../../components/HorrifiedCharacter.vue'

    const numPlayers = ref(2)
    const picked = ref(false)
    const characters = ref([
        { name: 'Archeologist', cls: 'yellow' },
        { name: 'Courier', cls: 'pink' },
        { name: 'Explorer', cls: 'green' },
        { name: 'Inspector', cls: 'orange' },
        { name: 'Mayor', cls: 'red' },
        { name: 'Professor', cls: 'purple' },
        { name: 'Scientist', cls: 'blue' },
    ])

    function pick() {
        picked.value = true
        shuffle(characters.value)
    }
</script>

<template>
    <div class="inputs">
        <label for="players">Number of players: </label>
        <input type="number" v-model="numPlayers" min=1 max=5>
        <input type="button" class="button" value="Pick" @click="pick">
    </div>
    <Transition name="show-list">
        <ul class="list" v-if="picked">
            <TransitionGroup name="list">
                <li v-for="n in numPlayers" :key="n"><HorrifiedCharacter :player="n" :character="characters[n - 1]" /></li>
            </TransitionGroup>
        </ul>
    </Transition>
</template>

<style scoped>
</style>

