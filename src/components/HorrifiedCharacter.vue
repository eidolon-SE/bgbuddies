<script setup>
    const props = defineProps(['player', 'character'])
</script>

<template>
    <div class="char" :class="character.cls">Player {{ player }}: <span class="name">{{ character.name }}</span></div>
</template>

<style scoped>
.char {
    background-color: #444;
    padding: 0.5rem 1.5rem;
    color: #fff;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
}

.name {
    font-weight: bold;
}

.yellow {
    background-color: #facc15;
    color: #000;
}

.pink {
    background-color: #be185d;
}

.green {
    background-color: #65a30d;
}

.orange {
    background-color: #c2410c;
}

.red {
    background-color: #991b1b;
}

.purple {
    background-color: #581c87;
}

.blue {
    background-color: #1e40af;
}
</style>
