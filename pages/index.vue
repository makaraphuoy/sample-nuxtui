<template>
  <!-- <BaseCard :ui="uiCardFirst" title="ll"/> -->
  <div class="w-full">
    <BookingForm @submit="handleFormSubmit"/>
  </div>
  <div id="result"></div>
  <template v-if="useSearchResult.isSearch && useSearchResult.data">
    <CardListing :hotels="useSearchResult.data"/>
  </template>
</template>

<script setup lang="ts">
  import { useSearch } from '~/stores/search'

  const useSearchResult = useSearch();

  function handleFormSubmit(data: any) {
    useSearchResult.search(data);
    navigateTo('/#result', { replace: true })
  }
  const uiCardFirst = {
    body: 'border-none',
  }
</script>