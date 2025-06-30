<script setup>
  import { ref, onMounted } from 'vue'
  import { shuffle } from '../../util'

  const professions = ref([
    { name: 'Farming', color: 'green' }, 
    { name: 'Fishing', color: 'blue' },
    { name: 'Foraging', color: 'yellow' },
    { name: 'Mining', color: 'red' }
    ])
  const tools = ref(['Fishing Rod', 'Hoe', 'Pickaxe', 'Watering Can'])

  onMounted(pick)

  function pick() {
    shuffle(professions.value)
    shuffle(tools.value)
  }

</script>
<template>
  <div class="inputs">
    <input type="button" class="button" @click="pick" value="Randomize">
  </div>
  <ul class="list">
    <TransitionGroup name="list">
      <li v-for="n in 4" 
        :key="professions[n - 1].name" 
        class="player" 
        :class="professions[n - 1].color">
          Player {{ n }}: {{ professions[n - 1].name }} - {{ tools[n - 1] }}
      </li>
    </TransitionGroup>
  </ul>
</template>

<style>
.list {
  list-style-type: none;
}

.player {
  background-color: #444;
  padding: 0.5rem 1.5rem;
  color: #fff;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.red {
  background-color: #7f1d1d;
}

.yellow {
  background-color: #eab308;
  color: #000;
}

.blue {
  background-color: #1e3a8a;
}

.green {
  background-color: #14532d;
}
</style>
