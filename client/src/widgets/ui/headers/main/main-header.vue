<script setup lang="ts">
import {LoginForm} from '@/features/auth/login'
</script>
<template>
  <header class="header">
    <div>LOGO</div>
    <LoginForm/>
  </header>
</template>
<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
  }
</style>
