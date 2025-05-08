<template>
  <UForm :state="state" class="p-2 flex flex-col gap-4">
    <BaseFormField label="Location" name="location">
      <template #field>
        <BaseSelect v-model="state.location" :items="statuses" class="w-full"/>
      </template>
    </BaseFormField>
    <div class="w-full grid grid-cols-2 gap-4">
      <BaseFormField label="From Date" name="from_date">
      <template #field>
        <UPopover>
          <BaseButton 
            color="neutral" 
            variant="outline" 
            icon="i-lucide-calendar" 
            :title="df.format(modelValue1.toDate(getLocalTimeZone())) || 'select date'" class="w-full"/>

          <template #content>
            <BaseDatePicker v-model="modelValue1" :min-date="minDate" />
            <!-- <UCalendar v-model="modelValue" :min-value="minDate" class="p-2" /> -->
          </template>
        </UPopover>
      </template>
      </BaseFormField>
      <BaseFormField class="flex justify-end" label="To Date" name="to_date" >
        <template #field>
          <UPopover>
            <BaseButton 
              color="neutral" 
              variant="outline" 
              icon="i-lucide-calendar" 
              class="w-full" 
              :title="df.format(modelValue2.toDate(getLocalTimeZone())) || 'select date'"/>
              <template #content>
                <BaseDatePicker v-model="modelValue2" :min-date="minDate" />
              </template>
          </UPopover>
        </template>
      </BaseFormField>
    </div>
    <BaseFormField label="" name="location">
      <template #field>
        <BaseButton 
          type="submit" 
          title="Search" 
          @click="handleSearch"
          class="w-full text-center flex justify-between"/>
      </template>
    </BaseFormField>
  </UForm>
</template>

<script setup lang="ts">
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
  today
} from '@internationalized/date'

  const df = new DateFormatter('en-US', {
    dateStyle: 'medium'
  })
  const now = today(getLocalTimeZone())

  const modelValue1 = shallowRef(new CalendarDate(now.year, now.month, now.day))
  const modelValue2 = shallowRef(new CalendarDate(now.year, now.month, now.day))

  const minDate = new CalendarDate(now.year, now.month, now.day)
  const maxDate = new CalendarDate(2023, 9, 30)
  const statuses = ['Phnom Penh', 'Kampot', 'Siem Reap', 'Kep'];
  const emit = defineEmits<{
    (e: 'submit', payload: IState): void
  }>()
  interface IState {
    location: string;
    from_date: Date | null;
    to_date: Date | null;
  }
  const state = reactive<IState>({
    location: 'Phnom Penh',
    from_date: null,
    to_date: null
  });
  const handleSearch = () =>{
    emit('submit', {
      ...state,
      from_date: modelValue1.value.toDate(getLocalTimeZone()),
      to_date: modelValue2.value.toDate(getLocalTimeZone())
    })
  }
</script>