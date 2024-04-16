<script setup lang="ts">

import { LoginForm } from '@/features/auth/login'

import { Title } from '@/shared/ui'
import { LoginLayout } from '@/widgets/ui/layouts'
</script>
<template>
  <LoginLayout>
    <section class="login">
      <div class="login__header">
        <Title tag="h3"> Hello, it login page </Title>
      </div>
      <div class="login__form">
        <LoginForm />
      </div>
    </section>
  </LoginLayout>
</template>
<style scoped lang="scss">
@use 'src/app/styles/mixins' as m;

.login {
  @include m.login-container;
  padding-top: 60px;

  &__header {
    text-align: center;
    margin-bottom: 30px;
  }

  &__form {
    width: 60%;
    margin: 0 auto;
  }
}
</style>
