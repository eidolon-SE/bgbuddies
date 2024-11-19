<script setup>
    import { ref } from 'vue'
    import { shuffle } from '../../util'
    const numMons = ref(2)
    const picked = ref(false)
    const monsters = ref([
        { name: 'Count Dracula', id: 1 },
        { name: 'Frankenstein and Bride of Frankenstein', id: 2 },
        { name: 'Creature from the Black Lagoon', id: 3 },
        { name: 'The Wolfman', id: 4 },
        { name: 'The Invisble Man', id: 5 },
        { name: 'The Mummy', id: 6 }
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
    <ul class="list" v-if="picked">
        <TransitionGroup name="list">
            <li v-for="n in numMons" class="monster" :key="monsters[n - 1].id">{{ monsters[n - 1].name }}</li>
        </TransitionGroup>
    </ul>
</template>

<style>
.inputs {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.list {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.monster {
    background-color: #444;
    padding: 0.5rem 1.5rem;
    color: #fff;
    border-radius: 0.5rem;
}


.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
