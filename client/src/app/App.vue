<script setup lang="ts">
  import { RouterView } from 'vue-router'
</script>

<template>
  <h1 class="title">Hello world</h1>
  <RouterView />
</template>

<style scoped lang="scss">
  .title {
    color: red;

    &:hover {
      color: green;
    }
  }
</style>
