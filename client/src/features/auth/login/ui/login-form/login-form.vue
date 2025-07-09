<script setup lang="ts">

import { useModal } from '@/shared/composables'
import { Dialog, Button, Avatar } from 'primevue'
import { useLoginUserForm } from '../../model/login-user'
import { Checkbox, FormInput } from '@/shared/ui'

const {isOpen, handleOpen, handleClose} = useModal()
const { handleLoginUser, formCtx } = useLoginUserForm()

const [rememberMe] = formCtx.defineField('rememberMe')

const handleSubmit = async (e: Event) => {
  await handleLoginUser(e)
  handleClose()
}

</script>
<template>
  <Avatar
    size="large"
    shape="circle"
    :style="{cursor: 'pointer'}"
    class=""
    @click="handleOpen"
  />
  <Dialog
    header="Sing in"
    modal
    :style="{width: '30vw'}"
    v-model:visible="isOpen"
  >
    <form class="auth-form" @submit.prevent="handleSubmit">
      <FormInput name="email" label="Email" type="email" />
      <FormInput
        name="password"
        type="password"
        label="Пароль"
      />
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
        :loading="formCtx.isSubmitting.value"
      >
        Зайти
      </Button>
    </form>
  </Dialog>
</template>
<style scoped lang="scss">
.avatar {
  cursor: pointer;
}

.dialog {
  width: 30vw;
}

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
