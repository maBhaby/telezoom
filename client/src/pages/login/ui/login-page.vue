<script setup lang="ts">
import { ref, watch } from 'vue'

import { useForm } from 'vee-validate';
import * as yup from 'yup'

import Button from 'primevue/button';

import { Title, Checkbox, FormInput } from '@/shared/ui'
import { LoginLayout } from '@/widgets/ui/layouts'

const emailRef = ref('test')
const rememberRef = ref('done')

watch(emailRef, () => {
  console.log('its work', emailRef)
})

const {handleSubmit} = useForm({
  validationSchema: yup.object().shape({
    email: yup.string().required('обяз').email('Введите валиднйы email'),
    password: yup.string().required('обяз')
  })
})

const onSubmit = handleSubmit((val) => {
  console.log('success', val);
})

</script>
<template>
  <LoginLayout>
    <section class="login">
      <div class="login__header">
        <Title tag="h3"> Hello, it login page </Title>
      </div>
      <div class="login__form">
        <form @submit.prevent="onSubmit">
          <FormInput name="email" label="Email" />
          <FormInput name="password" type="password" label="Пароль" />
          <Checkbox value="rememberRef" label="Remember me" id="remember" v-model="rememberRef" />
          <Button type="submit">Зайти</Button>
        </form>
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
