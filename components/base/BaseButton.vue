<template>
  <UButton
      :label="title"
      :title="title"
      class="p-2 "
            :type="type"
            :ui="ui"
            :icon="icon"
            :block="block"
            :size="size"
            variant="outline"

  ></UButton>
</template>

<script setup lang="ts">

defineProps({
  title: String,
  icon: String,
  size: {
      type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
      defualt: 'md' 
  },
  type: {
      type: String as PropType<'submit' | 'button' | 'reset' >,
      defualt: 'button' 
  },
  block:{type:Boolean, default: ()=>false},
  ui: {
    type: Object,
    default: () => ({
      base: 'flex justify-center',
      rounded: 'rounded-full'
    })
  }
})

</script>