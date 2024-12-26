<script setup>
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router'

    const props = defineProps(['factions'])

    const playerData = ref([])

    function buildPlayerData() {
        for (let i = 0; i < numPlayers.value; i++) {
            playerData.value.push({
                popularity: 0,
                coins: 0,
                stars: 0,
                territories: 0,
                resources: 0,
                structures: 0
            })
        }
    }
</script>

<template>
    {{ factions }}
    <div v-for="data in playerData">
    </div>
</template>
