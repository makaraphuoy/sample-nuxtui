<template>
  <header class="w-full p-1 z-10 left-0 top-0 ">
    <NuxtLink to="/" @click="useSearchResult.reset" class="w-full p-2 flex flex-row justify-center">
      <img  width="50" height="50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8qnyt8ivW4VmQdpG42YrtmA8JozlGT3612w&s" alt="logo">
    </NuxtLink>
    <h1 class="font-bold text-center text-primary">ABA Mini-App</h1>
    <div class="w-full flex justify-center p-2">
      <ClientOnly v-if="!colorMode?.forced">
        <UButton
            :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
            color="neutral"
            variant="ghost"
            @click="isDark = !isDark"
        />
      </ClientOnly>
    </div>
</header>

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