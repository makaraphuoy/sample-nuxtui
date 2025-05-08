<template>
  <UApp>
      <NuxtLayout>
          <NuxtRouteAnnouncer />
          <!-- <NuxtWelcome /> -->
          <NuxtPage/>
      </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
  useHead({
    title: 'ABA Mini-App',
    meta: [
    {
      name: 'description',
      content: 'ESB - Enterprise Service Bus'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }
  ]
  })
</script>
