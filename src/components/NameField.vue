<script setup>
    import { ref } from 'vue'
    const name = ref('Player')
    const showInput = ref(false)

    function hide() {
        if (name.value.match("^[A-Za-z0-9_]")) {
            showInput.value = false
        }
    }
</script>
<template>
    <div class="container">
        <div @click="showInput = true">
            {{ name }}
        </div>
        <div v-if="showInput" class="hidden">
            <input type="text" v-model="name" patter="[A-za-z0-9_]">
            <input type="button" class="button button-sm" value="Save" @click="hide">
        </div>
    </div>
</template>

<style scoped>
.container {
    position: relative;
}

.hidden {
    position: absolute;
    top: 0;
    z-index: 1;
    display: flex;
    gap: 0.25rem;
}

input[type=text] {
    width: 5rem;
}
</style> 
