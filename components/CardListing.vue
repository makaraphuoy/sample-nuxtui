<template>
    <div class="w-full grid grid-cols-1 gap-4 p-2"> 
      <BaseCard v-for="hotel in hotels" :key="hotel.id"  :desciption="hotel.name">
        <template #body>
          <img :src="hotel.image" :alt="hotel.name" class="w-full rounded-sm h-full object-cover">
        </template>
      </BaseCard>
    </div>
</template>

<script setup lang="ts">
  import type {Product} from "@/types/hotel";
  defineProps({
    hotels: Array<Product>,
    default:() => ([])
  })
</script>