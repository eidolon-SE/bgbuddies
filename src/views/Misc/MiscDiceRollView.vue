<script setup>
    import { ref } from 'vue'

    const numSides = ref(6)
    const numDice = ref(1)
</script>

<template>
    <div class="inputs">
        <div>
            <label for="num-sides">Sides to each dice: </label>
            <input type="number" id="num-sides" v-model="numSides" min=2 max=100>
        </div>
        <div>
            <label for="num-dice">Number of dice: </label>
            <input type="number" id="num-dice" v-model="numDice" min=1 max=32>
        </div>
        <input type="button" class="button" value="Roll">
    </div>
</template>
