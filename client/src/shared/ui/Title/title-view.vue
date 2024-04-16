<script setup lang="ts">
  const { className='' } = defineProps<{tag?: string, className?: string}>()
</script>
<template>
  <h1 :class="className" is="vue:tag">
    <slot>Empty Title</slot>
  </h1>
</template>
  