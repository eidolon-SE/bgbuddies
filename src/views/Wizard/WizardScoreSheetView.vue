<script setup>
    import { ref, onMounted } from 'vue'

    const grid = ref([])

    function initGrid() {
        grid.value = []
        for (let i = 0; i < 6; i++) {
            grid.value.push([])
            for (let j = 0; j < 15; j++) {
                grid.value[i].push({ guess: 0, score: 0})   
            }
        }
    }

    onMounted(initGrid)
</script>

<template>
    <div class="inputs">
        <input type="button" class="button" @click="initGrid" value="Reset">
    </div>
    <div class="score-grid">
        <div v-for="n in 6" class="player-title">P{{ n }}</div>
        <template v-for="col in grid">
            <div v-for="cell in col">
                <input type="number" v-model="cell.guess" class="guess">
                <input type="number" v-model="cell.score" class="score">
            </div>
        </template>
    </div>
</template>

<style>
.score-grid {
    display: grid;
    grid-template-columns: repeat(6, max-content);
    text-align: center;
    column-gap: 0.75rem;
    justify-content: center;
}

.player-title {
    transform: rotate(-90deg);
}

input[type=number] {
    width: 3.5rem;
}
</style>
