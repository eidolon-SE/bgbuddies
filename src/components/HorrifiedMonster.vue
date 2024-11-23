<script setup>
    import { ref } from 'vue'
    const props = defineProps(['monster'])
    const showInfo = ref(false)
</script>

<template>
    <div class="monster" :class="monster.cls" @click="showInfo = !showInfo">
        <span class="name">{{ monster.name }}</span>
        <Transition name="show-info">
            <div v-if="showInfo">
                <component :is=monster.component />
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.monster {
    background-color: #444;
    padding: 0.5rem 1.5rem;
    color: #fff;
    border-radius: 0.5rem;
}

.name {
    font-weight: bold;
}

.dracula {
    background-color: #7f1d1d;
}

.frankenstein {
    background-color: #052e16;
}

.creature {
    background-color: #2e1065;
}

.mummy {
    background-color: #a16207;
}

.invisible {
    background-color: #172554;
}

.wolfman {
    background-color: #451a03;
}

.show-info-enter-active,
.show-info-leave-active {
    transition: all 0.2s ease;
}

.show-info-enter-from,
.show-info-leave-to {
    opacity: 0;
}

</style>
