<script setup lang="ts">
import Checkbox from 'primevue/checkbox'

defineProps<{
  label?: string
  id?: string 
  name?: string
}>()

const model = defineModel()

</script>
<template>
  <div>
    <label v-if="!!label" :for="id">{{ label }}</label>
    <Checkbox :inputId="id" :name="name" v-model="model" />
  </div>
</template>
