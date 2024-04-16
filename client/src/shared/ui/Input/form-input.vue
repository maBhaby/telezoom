<script setup lang="ts">
  import { useField } from 'vee-validate';

  import InputText from './input-view.vue'

  const props = withDefaults(defineProps<{
    modelValue?: string
    label?: string
    name: string
    type?: 'text' | 'password'
  }>(),
  {
    label: '',
    name: '',
    type: 'text'
  })

  const { value, errorMessage } = useField<string>(() => props.name);
</script>
<template>
  <InputText 
    :label="label" 
    v-model="value" 
    :name="name" 
    :type="type"
    :errorMessage="errorMessage"
  />
</template>
