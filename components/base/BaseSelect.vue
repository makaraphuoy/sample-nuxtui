<template>
  <USelect v-model="modelValue" :items="items" v-bind="$attrs" />
</template>

<script setup lang="ts">
  const props = defineProps<{
    modelValue: string | number | null
    items: Array<string | number>
  }>()

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string | number | null): void
  }>()

  // Sync v-model
  const modelValue = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val),
  })
</script>
