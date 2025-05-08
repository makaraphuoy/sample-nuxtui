<template>
        <ClientOnly v-if="!colorMode?.forced">
        <UButton
            :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
            color="neutral"
            variant="ghost"
            @click="isDark = !isDark"
        />
      </ClientOnly>
</template>

<script setup lang="ts">
  const colorMode = useColorMode()
    
  const isDark = computed({
    get() {
      return colorMode.value === 'dark'
    },
    set() {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
  })
  const useSearchResult = useSearch();
</script>