<template>
  <UCard :ui="ui">
    <template #header>
      <p v-if="title">{{ title }}</p>
    </template>

    <slot name="body">
    
    </slot>
    <!-- <Placeholder class="h-32" /> -->

    <template #footer>
      <p v-if="desciption">{{ desciption }}</p>
    </template>
  </UCard>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  desciption: String,
  ui:{
    type: Object,
    default: () => ({
      root: '',
      header: 'border-none ',
      body: 'rounded-none',
    })
  }
})

</script>