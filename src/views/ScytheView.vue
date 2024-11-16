<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import ViewLayout from '../components/ViewLayout.vue'
</script>

<template>
    <ViewLayout>
        <template v-slot:nav>
            <RouterLink to="score">Score Calculator</RouterLink>
            <RouterLink to="characters">Character Picker</RouterLink>
        </template>
    </ViewLayout>
</template>
