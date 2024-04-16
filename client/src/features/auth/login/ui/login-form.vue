<script setup lang="ts">
  import { useLoginUserForm } from '../model/login-user'
  import { Checkbox, FormInput } from '@/shared/ui'
  import Button from 'primevue/button';

  const { handleLoginUser, formCtx } = useLoginUserForm()

  const [rememberMe] = formCtx.defineField('rememberMe')

  console.log(rememberMe);
  

</script>
<template>
  <form class="auth-form" @submit.prevent="handleLoginUser">
    <FormInput name="email" label="Email" type="email" />
    <FormInput name="password" type="password" label="Пароль" />
    <Checkbox 
      v-model="rememberMe" 
      value="rememberRef" 
      label="Remember me" 
      id="remember"
      :binary="true"
    />
    <Button 
      class="auth-form__submit" 
      type="submit"
      :disabled="formCtx.isSubmitting.value"
    >
      Зайти
    </Button>
  </form>
</template>
<style scoped lang="scss">
  .auth-form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__submit {
      justify-content: center;
      margin-top: 20px;
    }
  }
</style>
