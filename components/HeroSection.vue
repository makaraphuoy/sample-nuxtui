<template>
  <div
    ref="heroRef"
    class="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 md:p-16 overflow-hidden from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
  >
    <div class="flex-1 max-w-2xl from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <h1
        ref="headingRef"
        class="text-xl md:text-5xl font-bold  leading-tight mb-6"
      >
      Craft Interactive Interfaces<br />
        <span class=" bg-clip-text bg-gradient-to-r text-orange-700">
          Using Cutting-Edge Animations
        </span>
      </h1>

      <p
        ref="subheadingRef"
        class="text-xl text-gray-400 mb-8 max-w-lg"
      >
      Deliver engaging user experiences by building dynamic UIs with seamless transitions and responsive interactions—hallmarks of a skilled developer.
      </p>

      <div ref="buttonRef" class="flex flex-col sm:flex-row gap-4">
        <BaseButton
          to="/hotel"
          label="Get Started"
          title="Get Started"
          class="bg-white  text-gray-800 hover:bg-gray-100 hover:scale-105 transition-all  text-md rounded-lg flex items-center gap-2 shadow-lg"
        >
          
          <!-- <ArrowRight class="h-5 w-5" /> -->
        </BaseButton>

        <BaseButton
          label="View Demo"
          title="View Demo"
          variant="outline"
          class="bg-transparent border-white  hover:bg-white/10  text-md rounded-lg transition-all"
        >
          <!-- View Demo -->
        </BaseButton>
      </div>
    </div>

    <div class="flex-1 mt-10 md:mt-0">
      <HeroImage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'


// Refs for DOM elements
const headingRef = ref<HTMLElement | null>(null)
const subheadingRef = ref<HTMLElement | null>(null)
const buttonRef = ref<HTMLElement | null>(null)
const heroRef = ref<HTMLElement | null>(null)

let tl: gsap.core.Timeline

onMounted(() => {
  tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  gsap.set([headingRef.value, subheadingRef.value, buttonRef.value], {
    y: 50,
    opacity: 0
  })

  tl.to(headingRef.value, {
    y: 0,
    opacity: 1,
    duration: 0.8
  })
    .to(
      subheadingRef.value,
      {
        y: 0,
        opacity: 1,
        duration: 0.8
      },
      '-=0.4'
    )
    .to(
      buttonRef.value,
      {
        y: 0,
        opacity: 1,
        duration: 0.8
      },
      '-=0.4'
    )

  gsap.to(heroRef.value, {
    backgroundPosition: '100% 50%',
    duration: 20,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })
})

onBeforeUnmount(() => {
  tl?.kill()
})
</script>
