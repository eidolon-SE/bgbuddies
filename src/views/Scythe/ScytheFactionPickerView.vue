<script setup>
    import { ref, computed } from 'vue'
    import RangeInput from '../../components/RangeInput.vue'


    const ifa = ref(false)
    const numPlayers = ref(2)
    const results = ref([])
    const baseFactions = [
        { id: 'nordic', name: 'Nordic' },
        { id: 'saxony', name: 'Saxony' },
        { id: 'polania', name: 'Polania' },
        { id: 'crimea', name: 'Crimea' },
        { id: 'rusviet', name: 'Rusviet' }
    ]
    const ifaFactions = [
        { id: 'togawa', name: 'Togawa Shogunate' },
        { id: 'albion', name: 'Clan Albion' }
    ]
    const basePlayerMats = []
    const ifaPlayerMats = []

    const getMaxPlayers = computed(() => {
        return ifa.value ? 7 : 5
    })

    function getFactions() {
        return ifa.value ? baseFactions.concat(ifaFactions) : baseFactions
    }

    function getPlayerMats() {
        return ifa.value ? basePlayerMats.concat(ifaPlayerMats) : basePlayerMats
    }

    function adjustPlayers() {
        // if IFA selected and too many players
        if (!ifa.value && numPlayers.value > 5) {
            numPlayers.value = 5
        }
    }

    function pick() {
        results.value = []
        let factions = getFactions().slice(0)
        let pickedFactions = []
        let playerMats = getPlayerMats().slice(0)

        for (let i = 0; i < numPlayers.value; i++) {
            let randomIndex = Math.floor(Math.random() * factions.length)
            pickedFactions.push(factions[randomIndex])
            factions.splice(randomIndex, 1)
        }

        alert(pickedFactions[0].name)
    }
</script>
<template>
    <div class="inputs">
        <div>
            <label for="ifa-select">Invaders From Afar: </label>
            <input id="ifa-select" type="checkbox" v-model="ifa" @change="adjustPlayers">
        </div>
        <div class="range-input">
            <label for="players">Number of players: </label>
            <RangeInput v-model="numPlayers" min=1 :max="getMaxPlayers" />
        </div>
        <input type="button" class="button" value="Pick" @click="pick">
    </div>
    <div v-for="item in results">{{ item.name }}</div>
</template>
