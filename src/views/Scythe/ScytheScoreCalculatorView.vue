<script setup>
    import { ref, onMounted } from 'vue'

    const numPlayers = ref(7)
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

    onMounted(buildPlayerData)
</script>

<template>
    {{ playerData }}
</template>
