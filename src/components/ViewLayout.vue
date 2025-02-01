<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
    <nav class="app-nav">
        <slot name="nav"></slot>
    </nav>
    <main class="main">
        <RouterView v-slot="{ Component }">
            <component :is="Component" />
        </RouterView>
    </main>
</template>

<style scoped>
.app-nav {
    background-color: #b9b9b9;
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
}

.main {
    padding: 1rem;
    overflow: hidden;
    height: 100%;
}
</style>
