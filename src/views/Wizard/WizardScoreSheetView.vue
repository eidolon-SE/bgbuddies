<script setup>
    import { ref } from 'vue'
    import NameField from '../../components/NameField.vue'
    import RangeInput from '../../components/RangeInput.vue'

    const gameOver = ref(false)
    const numPlayers = ref(3)
    const playersData = ref([])
    const numTurns = ref(0)
    const currentTurn = ref(0)
    const gameStarted = ref(false)

    function newGame() {
        gameOver.value = false
        numTurns.value = 60 / numPlayers.value
        currentTurn.value = 1
        
        playersData.value = []
        for (let i = 0; i < numPlayers.value; i++) {
            playersData.value.push({ guess: 0, tricks: 0, score: 0, history: [] })
        }

        gameStarted.value = true
    }

    function takeTurn() {
        playersData.value.forEach((el) => {
            el.history.push({ guess: el.guess, tricks: el.tricks, score: el.score })

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

        currentTurn.value++
        
        if (currentTurn.value > numTurns.value) {
            gameOver.value = true
        }
    }

    function undoTurn() {
        gameOver.value = false
        currentTurn.value--

        playersData.value.forEach((el) => {
            let lastTurn = el.history.pop()
            el.guess = lastTurn.guess
            el.tricks = lastTurn.tricks
            el.score = lastTurn.score
        })
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
        <div v-if="gameOver">Game Over</div>
        <div v-else>Turn {{ currentTurn }} / {{ numTurns }}</div>
        <div class="score-grid">
            <div class="grid-title">Players</div>
            <div class="grid-title">Guess</div>
            <div class="grid-title">Tricks</div>
            <div class="grid-title">Total Score</div>
            <template v-for="(data, index) in playersData" :key="index">
                <NameField initialName="Player" />
                <div><input type="number" v-model="data.guess" min=0 :max="currentTurn" :disabled="gameOver"></div>
                <div><input type="number" v-model="data.tricks" min=0 :max="currentTurn" :disabled="gameOver"></div>
                <div>{{ data.score }}</div>
            </template>
        </div>
        <div class="inputs">
            <button class="button" :disabled="currentTurn <= 1" @click="undoTurn">Undo Last Turn</button>
            <button class="button" :disabled="gameOver" @click="takeTurn">End Turn</button>
        </div>
    </div>
</template>

<style>
.score-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
}

.grid-title {
    font-weight: bold;
}

input[type=number] {
    width: 3.5rem;
}
</style>
