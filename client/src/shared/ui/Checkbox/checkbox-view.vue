<script setup lang="ts">
import Checkbox from 'primevue/checkbox'

withDefaults(defineProps<{
  label?: string
  id?: string 
  name?: string,
  className?: string,
  /**
    * Allows to select a boolean value instead of multiple values.
    * @default false
  */
  binary?: boolean;
}>(), {
  binary: false
})

const model = defineModel()

</script>
<template>
  <div :class="{className: !!className}">
    <label v-if="!!label" :for="id">{{ label }}</label>
    <Checkbox :inputId="id" :name="name" v-model="model" :binary="binary" />
  </div>
</template>
