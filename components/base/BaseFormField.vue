<template>
 <ClientOnly>
  <UFormField :label="label" :name="name">
    <slot name="field"></slot>
  </UFormField>
 </ClientOnly>
</template>

<script setup lang="ts">
  defineProps({
      label: String,
      name: String
    })
</script>