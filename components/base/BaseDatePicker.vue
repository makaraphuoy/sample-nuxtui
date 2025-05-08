<template>
  <UCalendar
    v-model="model"
    :min-value="computedMinDate"
    :max-value="maxValue"
    class="p-2"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date'
import { computed } from 'vue'

const props = defineProps<{
  modelValue: CalendarDate
  minDate?: CalendarDate
  maxDate?: CalendarDate
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: CalendarDate): void
}>()

// v-model compatibility
const model = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

// Default to today if no minDate provided
const computedMinDate = computed(() => {
  if (props.minDate) return props.minDate
  const now = today(getLocalTimeZone())
  return new CalendarDate(now.year, now.month, now.day)
})

const maxValue = computed(() => props.maxDate)
</script>
