<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import ViewLayout from '../components/ViewLayout.vue'
</script>

<template>
    <ViewLayout>
        <template v-slot:nav>
            <RouterLink to="characters">Character Picker</RouterLink>
            <RouterLink to="monsters">Monster Picker</RouterLink>
        </template>
    </ViewLayout>
</template>
