<script setup>
    import ViewLayout from '../components/ViewLayout.vue'
</script>

<template>
    <ViewLayout>
        <template v-slot:nav>
            Horrified Nav
        </template>
        <template v-slot:main>
            Horrified Main
        </template>
    </ViewLayout>
</template>
