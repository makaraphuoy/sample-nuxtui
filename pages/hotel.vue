<template>
  <div class="md:block lg:block xl:block hidden"> 
    <div class="mx-auto w-1/2">
    <div class="w-full">
    <BookingForm @submit="handleFormSubmit"/>
  </div>
  <div id="result"></div>
  <template v-if="useSearchResult.isSearch && useSearchResult.data">
    <CardListing :hotels="useSearchResult.data"/>
  </template>
</div>
  </div>

  <div class="md:hidden lg:hidden xl:hidden block">
 
        <div class="w-full">
    <BookingForm @submit="handleFormSubmit"/>
  </div>
  <div id="result"></div>
  <template v-if="useSearchResult.isSearch && useSearchResult.data">
    <CardListing :hotels="useSearchResult.data"/>
  </template>

  </div>

</template>

<script setup lang="ts">
  import { useSearch } from '~/stores/search'

  const useSearchResult = useSearch();

  function handleFormSubmit(data: any) {
    useSearchResult.search(data);
    navigateTo('/hotel/#result', { replace: true })
  }
  const uiCardFirst = {
    body: 'border-none',
  }
</script>