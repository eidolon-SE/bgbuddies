<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import ViewLayout from '../../components/ViewLayout.vue'
</script>

<template>
    <ViewLayout>
        <template v-slot:nav>
            <RouterLink :to="{ name: 'misc_diceroll' }">Dice Roller</RouterLink>
        </template>
    </ViewLayout>
</template>
