<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import ViewLayout from '../../components/ViewLayout.vue'
</script>

<template>
    <ViewLayout>
        <template v-slot:nav>
            <RouterLink :to="{ name: 'scythe_faction' }">Faction Picker</RouterLink>
            <RouterLink :to="{ name: 'scythe_scorecalc' }">Score Calculator</RouterLink>
        </template>
    </ViewLayout>
</template>
