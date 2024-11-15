<template>
    <nav class="app-nav">
        <slot name="nav"></slot>
    </nav>
    <main>
        <slot name="main"></slot>
    </main>
</template>

<style scoped>
.app-nav {
    background-color: #d9d9d9;
    padding: 1rem;
}
</style>
