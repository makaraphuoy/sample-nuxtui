<template>
  <UInput 
    :icon="icon"  
    :required="required" 
    :size="size" 
    :type="type"
    :variant="variant" 
    :leading="leading"
    :leading-icon="loadingIcon"
    :trailing-icon="trailingIcon"
    :loading="loading"
    :loading-icon="loadingIcon"
    :ui="ui"
    :avatar="avatar"
    :maxlength="maxLength"
    :placeholder="placeholder" >
        <template #trailing>
          <slot name="body">
          </slot>
        </template>
    </UInput>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

  defineProps({
    type: {
      type: String as PropType<'number' | 'reset' | 'submit' | 'search' | 'date' | 'text' | 'color' | 'button' | 'checkbox' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'password' | 'radio' | 'range' | 'tel' | 'time' | 'url' | 'week' | string & {}>,
      default: 'text'
    },
    min: Number,
    maxLength: Number,
    placeholder: String,
    icon: String,
    required: Boolean,
    leading: Boolean,
    leadingIcon: String,
    loading: Boolean,
    loadingIcon: String,
    trailingIcon: String,
    variant: {
      type: String as PropType<'outline' | 'soft' | 'subtle' | 'ghost' | 'none' | undefined>,
      default: 'outline'
    },
    size: {
      type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
      defualt: 'md' 
    },
    color: {
      type: String as PropType<'primary' | 'neutral' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'error'>,
      defualt: 'primary' 
    },
    ui: {
      type: Object,
      default: () => ({
        rounded: 'rounded-none',
        variant: {
          outline: 'ring-1 ring-red-300 ',
        },
        //base: ['bg-red-300 rounded-none']
      })
    },
    avatar: {
      type: Object
    },
    
  })
</script>