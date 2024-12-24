<script setup>
    import { ref } from 'vue'

    const props = defineProps(['initialName'])

    const name = ref(props.initialName)
    const showInput = ref(false)

    function save() {
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
        <div v-if="showInput" class="modal">
            <div class="modal-inner">
                <input type="text" v-model="name" pattern="[A-za-z0-9_]">
                <input type="button" class="button" value="Save" @click="save">
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    gap: 0.25rem;
    height: 100%;
    width: 100%;
    background: #ffffffcc;
    display: flex;
    justify-content: center;
    align-items: center;

}

.modal-inner {
    margin: 1rem;
    display: flex;
    gap: 0.5rem;
}

input[type=text] {
    font-size: 1.5rem;
    width: 10rem;
}
</style> 
