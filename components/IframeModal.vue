<template>
  <UModal>
    <!-- <UButton label="Open" color="neutral" variant="outline" /> -->

    <template #content>
      <iframe
          :src="url"
          class="w-full h-[80vh] rounded-b-lg"
          frameborder="0"
        ></iframe>
    </template>
  </UModal>
</template>


<script setup lang="ts">
    defineProps<{
      show: boolean
      url: string
    }>()

  const emit = defineEmits(['close'])

  const close = () => {
    emit('close')
  }
</script>
