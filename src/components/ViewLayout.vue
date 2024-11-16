<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
    <nav class="app-nav">
        <slot name="nav"></slot>
    </nav>
    <main class="main">
        <router-view />
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
    background-color: #fff;
}
</style>
