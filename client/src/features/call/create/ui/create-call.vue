<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
  const handleCreateCall = () => {
    router.push('/call')
  }
</script>
<template>
  <button class="action-btn" @click="handleCreateCall">
    Создать видеовстречу
  </button>
</template>
<style scoped lang="scss">
  .action-btn {
    border-radius: 10px;
    width: 100%;
    height: 336px;
    background-color: var(--white-color-alpha-1);

    outline: none;
    border: none;
    box-shadow: var(--box-shadow-1);

    transition: var(--transition-time-s);

    &:hover{
      background-color: var(--white-color);
    }

    &:active {
      transform: scale(0.98);
    }
  }
</style>
