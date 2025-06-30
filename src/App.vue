<script setup>
import { RouterView, useRouter } from 'vue-router'
import { routes } from './router'

const router = useRouter()

function changeGame(event) {
    if (event.target.value != 'null') {
        router.push(event.target.value)
    }
}
</script>

<template>
    <header class="main-header">
        <h1 class="heading">Board Game Buddies</h1>
        <select name="game" class="game-list" @change="changeGame">
            <option value="null">Select a game...</option>
            <option v-for="route in routes" :value="route.path">{{ route.meta.verbose }}</option>
        </select>
    </header>
    <RouterView />
</template>

<style scoped>
.main-header {
    background-color: #134e4a;
    color: #fff;
    padding: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.heading {
    font-family: 'Inknut Antiqua', sans-serif;
}

.game-list {
    font-size: 1.5rem;
    text-align: center;
    font-family: 'Inter', sans-serif;
}
</style>
