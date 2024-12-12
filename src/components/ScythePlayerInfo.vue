<script setup>
    const props = defineProps(['playerInfo', 'playerNumber'])
</script>

<template>
    Player : {{ playerInfo.name }} ({{ playerInfo.playerMat }} {{ playerInfo.order }})
</template>
