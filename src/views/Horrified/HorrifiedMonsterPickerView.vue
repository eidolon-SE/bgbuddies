<script setup>
    import { ref } from 'vue'
    import { shuffle } from '../../util.js'
    const monsters = ref([
        'Count Dracula',
        'Frankenstein and Bride of Frankenstein',
        'Creature from the Black Lagoon',
        'The Wolfman',
        'The Invisble Man',
        'The Mummy'
    ])
</script>
<template>
    {{ monsters }}
</template>
