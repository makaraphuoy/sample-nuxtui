<template>
  <div
    ref="containerRef"
    class="relative w-full max-w-lg mx-auto cursor-pointer"
  >
    <div
      ref="circleRef"
      class="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-2xl opacity-70"
    ></div>

    <div class="relative bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-xl overflow-hidden shadow-2xl border border-white/20">
      <div class="absolute inset-0 bg-grid-white/10 bg-gradient-to-b from-white/10 to-white/5"></div>

      <img
        ref="imageRef"
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800"
        alt="Developer workspace with code"
        class="w-full h-full object-cover mix-blend-overlay opacity-70 transition-transform duration-500"
      />

      <div class="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 to-transparent">
        <div class="flex items-center space-x-2 mb-4">
          <div class="w-3 h-3 rounded-full bg-green-400"></div>
          <p class="text-sm text-green-400 font-semibold">Animation Ready</p>
        </div>
        <div class="flex justify-between items-center">
          <p class="text-white text-sm">Interactive UI Components</p>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-white/60"></div>
            <div class="w-2 h-2 rounded-full bg-white/60"></div>
            <div class="w-2 h-2 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

// DOM refs
const containerRef = ref<HTMLElement | null>(null)
const circleRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLImageElement | null>(null)

let tl: gsap.core.Timeline

onMounted(() => {
  tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } })

  gsap.set(containerRef.value, { opacity: 0, scale: 0.9 })
  gsap.set(circleRef.value, { scale: 0.8 })

  tl.to(containerRef.value, {
    opacity: 1,
    scale: 1,
    duration: 1,
    delay: 0.8
  })

  gsap.to(containerRef.value, {
    y: '20px',
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  // Hover animations
  containerRef.value?.addEventListener('mouseenter', () => {
    gsap.to(circleRef.value, { scale: 1.05, duration: 0.5 })
    gsap.to(imageRef.value, { scale: 1.1, duration: 0.5 })
  })

  containerRef.value?.addEventListener('mouseleave', () => {
    gsap.to(circleRef.value, { scale: 1, duration: 0.5 })
    gsap.to(imageRef.value, { scale: 1, duration: 0.5 })
  })
})

onBeforeUnmount(() => {
  tl?.kill()
})
</script>
