<script setup>
    import ViewLayout from '../components/ViewLayout.vue'
</script>

<template>
    <ViewLayout>
        <template v-slot:nav>
            Scythe Nav
        </template>
        <template v-slot:main>
            Scythe Main
        </template>
    </ViewLayout>
</template>
