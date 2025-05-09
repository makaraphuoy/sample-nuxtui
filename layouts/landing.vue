<template>
    <header class="border-b-2 dark:border-b-[1px] dark:border-slate-500 border-slate-100  p-6 flex justify-end">
        <ul class="flex flex-row gap-x-6">
          <li  v-for="li in list" :key="li" class="md:block lg:block xl:block hidden ">
              <BaseButton :to="li!=='home' ? '/#'+li: '/'" :label="li" :title="li" class="uppercase px-4  ring-0 " :ui="ui"/>
          </li>
          <li>
            <LangSwitcher/>
          </li>
          <li class="block md:hidden lg:hidden xl:hidden ">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 5L19 19M5 19L19 5"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L19 19M5 19L19 5;M5 5L19 5M5 19L19 19"/></path><path d="M12 12H12" opacity="0"><animate fill="freeze" attributeName="d" begin="0.2s" dur="0.4s" values="M12 12H12;M5 12H19"/><set fill="freeze" attributeName="opacity" begin="0.2s" to="1"/></path></g></svg>
          </li>
        </ul>
    </header>
    <main class="min-h-screen w-full">
      <slot/>
    </main>
    <footer class="w-full p-10 bg-white dark:border-t-[1px] border-t-2 dark:border-slate-500 border-slate-100 dark:bg-gray-900">
      <h3 class="font-bold text-center">TSC DEV</h3>
    </footer>
</template>

<script setup lang="ts">
  const list = ['home','tech','about','contact'];
  const ui ={
    base : 'outline-none ring-none border-none'
  }
</script>