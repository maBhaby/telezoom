<script setup lang="ts">
import InputText from 'primevue/inputtext'

withDefaults(
  defineProps<{
    modelValue?: string
    label?: string
    name?: string
    type?: 'text' | 'password' | 'email'
    errorMessage?: string
    className?: string
  }>(),
  {
    label: '',
    name: '',
    type: 'text',
    errorMessage: ''
  }
)

const emit = defineEmits(['update:modelValue'])
const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>
<template>
  <div class="input" :class="{ className: !!className }">
    <label :for="name" v-if="!!label">{{ label }}</label>
    <InputText
      :name="name"
      :type="type"
      :value="modelValue"
      @input="updateValue"
      :invalid="!!errorMessage"
    />
    <span v-if="!!errorMessage" class="input__error">{{ errorMessage }}</span>
  </div>
</template>
<style scoped lang="scss">
.input {
  display: flex;
  flex-direction: column;
  gap: 5px;

  &__error {
    color: var(--red-color);
  }
}
</style>
