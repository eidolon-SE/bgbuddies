<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import ViewLayout from '../components/ViewLayout.vue'
</script>

<template>
    <ViewLayout>
        <template v-slot:nav>
            <RouterLink :to="{ name: 'horrified_chars' }">Character Picker</RouterLink>
            <RouterLink :to="{ name: 'horrified_mons' }">Monster Picker</RouterLink>
        </template>
    </ViewLayout>
</template>
