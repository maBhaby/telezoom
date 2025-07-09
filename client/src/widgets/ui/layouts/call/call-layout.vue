<script setup lang="ts"></script>
<template>
  <main class="call-layout">
    <slot />
    <footer>
      <slot name="action_bar" />
    </footer>
  </main>
</template>
<style lang="scss" scoped>
  .call-layout {
    height: 100%;
    
    display: flex;
    flex-direction: column;
    
    background-color: var(--main-bg-dark);
  }
</style>