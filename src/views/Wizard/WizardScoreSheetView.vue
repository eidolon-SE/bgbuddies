<script setup>
    import { ref } from 'vue'
    import NameField from '../../components/NameField.vue'
    import RangeInput from '../../components/RangeInput.vue'

    const numPlayers = ref(3)
    const playersData = ref([])
    const numTurns = ref(0)
    const currentTurn = ref(0)
    const gameStarted = ref(false)

    function newGame() {
        numTurns.value = 60 / numPlayers.value
        currentTurn.value = 1
        
        playersData.value = []
        for (let i = 0; i < numPlayers.value; i++) {
            playersData.value.push({name: 'Player', guess: 0, tricks: 0, score: 0 })
        }

        gameStarted.value = true
    }

    function takeTurn() {
        if (currentTurn.value < numTurns.value) {
            currentTurn.value++
            playersData.value.forEach((el) => {
                if (el.guess === el.tricks) {
                    let score = 20 + (10 * el.tricks)
                    el.score += score
                } else {
                    let score = 10 * (Math.max(el.guess, el.tricks) - Math.min(el.guess, el.tricks))
                    el.score -= score
                }

                el.guess = 0
                el.tricks = 0
            })
        }
    }
</script>

<template>
    <div class="inputs">
        <div class="range-input">
            <label>Number of players: </label>
            <RangeInput v-model="numPlayers" min=3 max=6 />
        </div>
        <input type="button" class="button" @click="newGame()" value="New Game">
    </div>
    <div v-if="gameStarted" class="game">
        <div>Turn {{ currentTurn }} / {{ numTurns }}</div>
        <div class="score-grid">
            <div class="grid-title">Players</div>
            <div class="grid-title">Guess</div>
            <div class="grid-title">Tricks</div>
            <div class="grid-title">Total Score</div>
            <template v-for="(data, index) in playersData" :key="index">
                <NameField :initialName="data.name" />
                <div><input type="number" v-model="data.guess" min=0 :max="currentTurn"></div>
                <div><input type="number" v-model="data.tricks" min=0 :max="currentTurn"></div>
                <div>{{ data.score }}</div>
            </template>
        </div>
        <div class="inputs">
            <button class="button" @click="takeTurn">End Turn</button>
        </div>
    </div>
</template>

<style>
.score-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.grid-title {
    font-weight: bold;
}

input[type=number] {
    width: 3.5rem;
}
</style>
