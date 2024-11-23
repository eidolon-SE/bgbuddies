<script setup>
    import { ref } from 'vue'

    const numSides = ref(6)
    const numSidesShow = ref()
    const numDice = ref(1)
    const numDiceShow = ref()
    const rolls = ref([])
    const rollTotal = ref([])
    const rolled = ref(false)

    function rollDice() {
        numSidesShow.value = numSides.value
        numDiceShow.value = numDice.value
        rolls.value = []

        for (let i =0; i < numDice.value; i++) {
            let value = Math.ceil(Math.random() * numSides.value)
            rolls.value.push(value)
        }
        
        rollTotal.value = rolls.value.reduce((a, b) => a + b)
        rolled.value = true
    }
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
        <input type="button" class="button" value="Roll" @click="rollDice">
    </div>
    <div v-if="rolled">
        You rolled {{ numDiceShow }} D{{ numSidesShow }}<template v-if="numDiceShow > 1">'s</template>. The results were:
            <ul>
                <li v-for="n in rolls">{{ n }}</li>
            </ul>
            <template v-if="numDiceShow > 1">Your roll total is {{ rollTotal }}.</template>
        </div>
</template>

<style scoped>
ul { 
    list-style-type: none;
    display: flex;
    column-gap: 0.5rem;
    flex-wrap: wrap;
    padding: 0;
}

li:not(:last-child)::after {
    content: ", ";
}
</style>
