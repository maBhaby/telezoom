<script setup lang="ts">
  import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
  .app {
    height: 100dvh;
    background-color: var(--main-bg-color);
  }
</style>
