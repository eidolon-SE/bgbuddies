<script setup>
    import { ref, computed } from 'vue'

    import { shuffle } from '../../util'
    import RangeInput from '../../components/RangeInput.vue'
    import ScythePlayerInfo from '../../components/ScythePlayerInfo.vue'


    const ifa = ref(false)
    const numPlayers = ref(2)
    const picked = ref(false)
    const result = ref([])
    const baseFactions = [
        { id: 'rusviet', name: 'Rusviet Union' },
        { id: 'crimea', name: 'Crimean Khanate' },
        { id: 'nordic', name: 'Nordic Kingdoms' },
        { id: 'saxony', name: 'Saxony Empire' },
        { id: 'polania', name: 'Republic of Polania' }
    ]
    const ifaFactions = [
        { id: 'togawa', name: 'Togawa Shogunate*' },
        { id: 'albion', name: 'Clan Albion*' }
    ]
    const basePlayerMats = [
        { name: 'Industrial', order: '1' },
        { name: 'Engineering', order: '2' },
        { name: 'Patriotic', order: '3' },
        { name: 'Mechanical', order: '4' },
        { name: 'Agricultural', order: '5' }
    ]
    const ifaPlayerMats = [
        { name: 'Militant*', order: '2.5' },
        { name: 'Innovative*', order: '3.5' }
    ]

    const getMaxPlayers = computed(() => {
        return ifa.value ? 7 : 5
    })

    function getFactions() {
        return ifa.value ? baseFactions.concat(ifaFactions) : baseFactions.slice(0)
    }

    function getPlayerMats() {
        return ifa.value ? basePlayerMats.concat(ifaPlayerMats) : basePlayerMats.slice(0)
    }

    function adjustPlayers() {
        // if IFA selected and too many players
        if (!ifa.value && numPlayers.value > 5) {
            numPlayers.value = 5
        }
    }

    function getFirstOrder() {
        let orders = result.value.map((el) => {
            return el.order
        })

        return Math.min(...orders)
    }

    function pick() {
        let factions = getFactions()
        let playerMats = getPlayerMats()
        let playerInfos = []

        result.value = []
        
        for (let i = 0; i < factions.length; i++) {
            let indexValid = false

            while (!indexValid) {
                var randomIndex = Math.floor(Math.random() * playerMats.length)
                if ((factions[i].id == 'rusviet' && playerMats[randomIndex].name == 'Industrial') || 
                    (factions[i].id == 'crimea' && playerMats[randomIndex].name == 'Patriotic')) {
                    continue
                }

                indexValid = true
            }
            
            playerInfos.push({ 
                faction: factions[i].name, 
                cls: factions[i].id, 
                playerMat: playerMats[randomIndex].name,
                order: playerMats[randomIndex].order
            })
            playerMats.splice(randomIndex, 1)
        }

        shuffle(playerInfos)
        result.value = playerInfos.slice(0, numPlayers.value)
        picked.value = true

    }
</script>
<template>
    <div class="inputs">
        <div>
            <label for="ifa-select">Invaders From Afar (*): </label>
            <input id="ifa-select" type="checkbox" v-model="ifa" @change="adjustPlayers">
        </div>
        <div class="range-input">
            <label for="players">Number of players: </label>
            <RangeInput v-model="numPlayers" min=1 :max="getMaxPlayers" />
        </div>
        <input type="button" class="button" value="Pick" @click="pick">
    </div>
    <Transition name="show-list">
        <ul class="list" v-if="picked">
            <TransitionGroup name="list">
                <li v-for="n in result.length" :key="n">
                    <div class="player" :class="result[n - 1].cls">
                        Player {{ n }}: <span class="faction">{{ result[n - 1].faction }}</span> - {{ result[n - 1].playerMat }}
                        <span v-if="result[n - 1].order == getFirstOrder()"><sup>1st</sup></span>
                    </div>
                </li>
            </TransitionGroup>
        </ul>
    </Transition>
</template>

<style scoped>
.player {
    background-color: #444;
    padding: 0.5rem 1.5rem;
    color: #fff;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    border: 1px solid transparent;
}

.faction {
    font-weight: bold;
}

.nordic {
    background-color: #1e40af;
}

.saxony {
    background-color: #000;
}

.polania {
    background-color: #fff;
    border-color: #000;
    color: #000;
}

.crimea {
    background-color: #facc15;
    color: #000;
}

.rusviet {
    background-color: #b91c1c;
}

.togawa {
    background-color: #7e22ce;
}

.albion {
    background-color: #166534;
}
</style>
