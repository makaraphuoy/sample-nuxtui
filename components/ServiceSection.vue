<!-- components/ServicesSection.vue -->
<template>
  <section id="tech" class="min-h-screen py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 ref="headerRef" class="text-3xl md:text-5xl font-bold text-indigo-900 dark:text-slate-200 mb-4">
          Our Tech-Stack
        </h2>
        <p class="text-xl  text-gray-600 max-w-2xl mx-auto dark:text-slate-300">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam voluptatum iure ipsum laborum ipsam?
        </p>
      </div>

      <UTabs
         :ui="uiTabs"
         :items="tabItems"
         v-model="activeTab"
         class="w-full max-w-4xl mx-auto"
         >
  <template
    v-for="tab in tabItems"
    #[tab.slot]="{ item }"
    :key="tab.value"
  >
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <UCard
        v-for="(service, index) in services[tab.value as 'frontend' | 'backend' | 'fullstack'] "
        :key="index"
        class="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        <template #header>
          <div class="flex items-center gap-4">
            <div class="p-2 rounded-full bg-indigo-100 text-indigo-700 text-2xl">
              {{ service.icon }}
            </div>
            <span class="font-semibold text-lg">{{ service.title }}</span>
          </div>
        </template>
        <div class="text-base text-gray-600">
          {{ service.description }}
        </div>
      </UCard>
    </div>
  </template>
</UTabs>


    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import type { TabsItem } from '@nuxt/ui'

gsap.registerPlugin(ScrollTrigger)

const headerRef = ref<HTMLElement | null>(null)
const cardRefs = ref<HTMLElement[]>([])

const activeTab = ref('frontend')

const tabItems = [
  { 
    label: 'Web Frontend', 
    value: 'frontend', 
    slot: 'frontend' as const,
    
  },
  { 
    label: 'Web Backend', 
    value: 'backend', 
    slot: 'backend' as const
  },
  { 
    label: 'Full-Stack & DevOps', 
    value: 'fullstack', 
    slot: 'fullstack' as const
   }
] satisfies TabsItem[]

const services = {
  frontend: [
    {
      icon: '⚛️',
      title: 'React',
      description:
        'A popular JavaScript library for building interactive user interfaces with component-based architecture.'
    },
    {
      icon: '📦',
      title: 'Vite',
      description:
        'A fast build tool and development server optimized for modern frontend workflows.'
    },
    {
      icon: '🎨',
      title: 'Tailwind CSS',
      description:
        'A utility-first CSS framework for rapid UI development with responsive design support.'
    }
  ],
  backend: [
    {
      icon: '🧠',
      title: 'Node.js',
      description:
        'A runtime environment that allows you to run JavaScript on the server side, ideal for scalable apps.'
    },
    {
      icon: '🐘',
      title: 'PostgreSQL',
      description:
        'A powerful, open-source relational database known for its robustness and SQL compliance.'
    },
    {
      icon: '⚙️',
      title: 'NestJS',
      description:
        'A progressive Node.js framework for building efficient and scalable server-side applications.'
    }
  ],
  fullstack: [
    {
      icon: '🌐',
      title: 'Nuxt 3',
      description:
        'A fullstack framework built on Vue 3, designed for creating universal web applications with SSR and API routes.'
    },
    {
      icon: '🔌',
      title: 'GraphQL',
      description:
        'A flexible query language for APIs that allows clients to request exactly the data they need.'
    },
    {
      icon: '📡',
      title: 'tRPC',
      description:
        'End-to-end typesafe APIs with zero code generation, ideal for fullstack TypeScript applications.'
    },
    {
      icon: '☁️',
      title: 'Supabase',
      description:
        'An open-source Firebase alternative providing auth, database, storage, and real-time capabilities.'
    },
    {
      icon: '🚀',
      title: 'Prisma',
      description:
        'A next-generation ORM for Node.js and TypeScript with type-safety and a powerful query engine.'
    },
    {
      icon: '🧩',
      title: 'Redis',
      description:
        'An in-memory key-value store often used for caching, sessions, and pub/sub messaging.'
    }
  ]
}


onMounted(() => {
  if (headerRef.value) {
    gsap.fromTo(
      headerRef.value,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: headerRef.value,
          start: 'top 80%',
          end: 'bottom 70%',
          toggleActions: 'play none none none'
        }
      }
    )
  }

  nextTick(() => {
    cardRefs.value.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
  })
})

  const uiTabs ={
    list: 'bg-pink-100 p-1.5 dark:bg-slate-600',
    trigger: 'text-blue-600',
    content: 'text-indigo-500 '
  }
</script>
