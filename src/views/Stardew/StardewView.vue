<script setup>
  import { RouterLink } from 'vue-router'
  import ViewLayout from '../../components/ViewLayout.vue'
</script>

<template>
  <ViewLayout>
    <template v-slot:nav>
      <RouterLink :to="{ name: 'stardew_picker' }">Profession &amp; Tool Picker</RouterLink>
    </template>
  </ViewLayout>
</template>
