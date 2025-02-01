<script setup>
    import { ref, onMounted, computed } from 'vue'
    import { useRoute } from 'vue-router'

    const props = defineProps(['factionsParams'])
    
    const factionsSet = ref(false) // flag for factions have been set
    const pickedFactions = ref([]) // array of factions the user has selected
    const playerData = ref([])
    const structureCard = ref('tunnel_adjacent')

    const factions = ref([
        { id: 'rusviet', name: 'Rusviet Union', picked: false },
        { id: 'crimea', name: 'Crimean Khanate', picked: false  },
        { id: 'nordic', name: 'Nordic Kingdoms', picked: false  },
        { id: 'saxony', name: 'Saxony Empire', picked: false  },
        { id: 'polania', name: 'Republic of Polania', picked: false  },
        { id: 'togawa', name: 'Togawa Shogunate', picked: false  },
        { id: 'albion', name: 'Clan Albion', picked: false  }
    ])

    const structureCards = [
        { 
            id: 'tunnel_adjacent', 
            title: 'Tunnels adjacent to structures', 
            exp: 'the number of tunnel territories adjacent to each players structures (only count each territory once)' 
        },
        { 
            id: 'lake_adjacent', 
            title: 'Lakes adjacent to structures', 
            exp: 'the number of lake territories adjacent to each players structures (only count each territory once)' 
        },
        { 
            id: 'enc_adjacent', 
            title: 'Encounters adjacent to structures',
            exp: 'the number of encounters adjacent to each players structures (only count each encounter once)'
        },
        { 
            id: 'tunnels', 
            title: 'Tunnel territories with structures', 
            exp: 'the number of tunnel territories with each players structures on them'
        },
        { 
            id: 'row', 
            title: 'Structures in a row', 
            exp: 'the number of each players structures in a row (any straight line; only count the longest row)'
        },
        { 
            id: 'farms-tundras', 
            title: 'Farm and tundra territories with structures',
            exp: 'the number of farm and tundra territories with each players structures on them'
        }
    ]

    function buildPlayerData() {
         pickedFactions.value.forEach((el) => {
            playerData.value.push({
                faction: el,
                popularity: 0,
                coins: 0,
                stars: 0,
                territories: 0,
                resources: 0,
                structures: 0,
                total: 0
            })
        })
    }

    function pickFactions() {
        pickedFactions.value = []

        factions.value.forEach((el) => { 
            if (el.picked) {
                pickedFactions.value.push(el.id)
            }
        })

        if (pickedFactions.value.length !== 0) {
            buildPlayerData()
            factionsSet.value = true
        }
    }

    function getStructureBonus(structures) {
        switch (structureCard.value) {

            case "tunnel_adjacent":
            case "lake_adjacent":
            case "enc_adjacent":
                switch (structures) {
                    case 1:
                        return 2
                        break
                    case 2:
                    case 3:
                        return 4
                        break
                    case 4:
                    case 5:
                        return 6
                        break
                    case 6:
                    case 7:
                        return 9
                        break
                    default:
                        return 0
                        break
                }
                break
            
            case "tunnels":
                switch (structures) {
                    case 1:
                        return 2
                        break
                    case 2:
                        return 4
                        break
                    case 3:
                    case 4:
                        return 6
                        break
                    default:
                        return 0
                        break
                }
                break

            case "row":
            case "farms-tundras":
                switch (structures) {
                    case 1:
                        return 2
                        break
                    case 2:
                        return 4
                        break
                    case 3:
                        return 6
                        break
                    case 4:
                        return 9
                        break
                    default:
                        return 0
                        break
                }       
                break

            default:
                return 0
                break
        }
    }

    function calcScores() {
        playerData.value.forEach((el) => {
            let popModifier = el.popularity === 0 ? 1 : Math.ceil(el.popularity / 6)
            el.total = el.coins + 
                (el.stars * (2 + popModifier)) + 
                (el.territories * (1 + popModifier)) +
                ((el.resources / 2) * popModifier) +
                getStructureBonus(el.structures)
        })
    }

    const structureCardExp = computed(() => {
        let card = structureCards.find((el) => el.id === structureCard.value)
        return card.exp
    })

    onMounted(() => {
        if (props.factionsParams) {
            factionsSet.value = true
            pickedFactions.value = props.factionsParams
            buildPlayerData()
        }
    })
</script>

<template>
    <section v-if="!factionsSet">
        <h2>Choose Player Factions</h2>
        <div class="inputs">
            <div class="grid">
                <div v-for="faction in factions" :key="faction.id">
                    <input type="checkbox" :id="faction.id" v-model="faction.picked"> <label :for="faction.id">{{ faction.name }}</label>
                </div>
            </div>
            <button class="button" @click="pickFactions">Select Factions</button>
        </div>
    </section>
    <section v-if="factionsSet" class="flex">
        <section class="flex">
            <h2>Popularity</h2>
            <div>Enter each players popularity</div>
            <div class="flex">
                <div v-for="data in playerData" class="faction-input" :class="data.faction">
                    <label class="faction-label" :for="`${data.faction}-pop`">{{ data.faction }}</label>
                    <input type="number" v-model="data.popularity" :id="`${data.faction}-pop`" min=0>
                </div>
            </div>
        </section>
        <section class="flex">
            <h2>Coins</h2>
            <div>Enter each players coins in hand</div>
            <div class="flex">
                <div v-for="data in playerData" class="faction-input" :class="data.faction">
                    <label class="faction-label" :for="`${data.faction}-coins`">{{ data.faction }}</label>
                    <input type="number" v-model="data.coins" :id="`${data.faction}-coins`" min=0>
                </div>
            </div>
        </section>
        <section class="flex">
            <h2>Stars</h2>
            <div>Enter each players stars</div>
            <div class="flex">
                <div v-for="data in playerData" class="faction-input" :class="data.faction">
                    <label class="faction-label" :for="`${data.faction}-stars`">{{ data.faction }}</label>
                    <input type="number" v-model="data.stars" :id="`${data.faction}-stars`" min=0>
                </div>
            </div>
        </section>
        <section class="flex">
            <h2>Territories</h2>
            <div>Enter the number of territories controlled by each player</div>
            <div class="flex">
                <div v-for="data in playerData" class="faction-input" :class="data.faction">
                    <label class="faction-label" :for="`${data.faction}-terr`">{{ data.faction }}</label>
                    <input type="number" v-model="data.territories" :id="`${data.faction}-terr`" min=0>
                </div>
            </div>
        </section>
        <section class="flex">
            <h2>Resources</h2>
            <div>Enter the number of resources each player controls</div>
            <div class="flex">
                <div v-for="data in playerData" class="faction-input" :class="data.faction">
                    <label class="faction-label" :for="`${data.faction}-res`">{{ data.faction }}</label>
                    <input type="number" v-model="data.resources" :id="`${data.faction}-res`" min=0>
                </div>
            </div>
        </section>
        <section class="flex">
            <h2>Structure Bonus</h2>
            <div>Select the applicable structure bonus card:</div>
            <select v-model="structureCard">
                <option v-for="card in structureCards" :value="card.id">{{ card.title }}</option>
            </select>
            <div>Enter {{ structureCardExp }}</div>
            <div class="flex">
                <div v-for="data in playerData" class="faction-input" :class="data.faction">
                    <label class="faction-label" :for="`${data.faction}-struct`">{{ data.faction }}</label>
                    <input type="number" v-model="data.structures" :id="`${data.faction}-struct`" min=0>
                </div>
            </div>
        </section>
        <button class="button" @click="calcScores">Calculate Scores</button>
        <section class="flex">
            <h2>Totals</h2>
            <div class="flex">
                <div v-for="data in playerData" class="faction-input" :class="data.faction">
                    <div class="faction-label">{{ data.faction }}</div>
                    <div>{{ data.total }}</div>
                </div>
            </div>
        </section>
    </section>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
}

.flex {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.faction-input {
    background-color: #444;
    padding: 0.5rem;
    color: #fff;
    transition: all 0.3s ease;
    border: 1px solid transparent;
    display: flex;
    justify-content: space-between;
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

.faction-label {
    text-transform: capitalize;
    font-weight: bold;
}
</style>
