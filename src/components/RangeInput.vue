<script setup>
    const props = defineProps(['min', 'max'])
    const model = defineModel()

    function decrement() {
        if (model.value > props.min) {
            model.value--
        }
    }

    function increment() {
        if (model.value < props.max) {
            model.value++
        }
    }
</script>

<template>
    <div>
        <input type="button" value="-" @click="decrement">
        <span>{{ model }}</span>
        <input type="button" value="+" @click="increment">
    </div>
</template>

<style scoped>
div {
    display: grid;
    grid-template-columns: 2rem 3rem 2rem;
    font-size: 1.5rem;
    text-align: center;
}

span {

}

input[type=button] {
    color: #fff;
    background: #333;
    padding: 0.5rem;
    border: none;
    border-radius: 999px;
    font-weight: bold;
    width: 2rem;
    height: 2rem;
}
</style>
