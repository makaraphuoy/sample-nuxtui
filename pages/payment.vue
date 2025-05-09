<template>
  <div class="p-4">
    <button @click="makeTransaction" class="bg-green-600 text-white px-4 py-2 rounded">
      Create Transaction
    </button>
    <!-- <div v-if="response" class="mt-4">
      <pre>{{ response }}</pre>
    </div> -->
  </div>
  <template v-if="isModalOpen && iframeUrl">
  <UModal :ui="uiModal" v-model:open="isModalOpen" class="w-[100vh]">
    <!-- <UButton label="Open" color="neutral" variant="outline" /> -->

    <template #content>
      <iframe
          :src="iframeUrl"
          class="w-full h-[75vh] rounded-lg"
          frameborder="0"
        ></iframe>
    </template>
  </UModal>
</template>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isModalOpen = ref(false)
const iframeUrl = ref('')
const response = ref<any>(null)
const cookie = useCookie('tran_id');
// watch(isModalOpen, (newOpen)=>{
//   if(newOpen === false) isModalOpen.value = true;
// })

const makeTransaction = async () => {
  try {
    cookie.value = 'tran'+Date.now();
    if(!iframeUrl.value){
      const res = await fetch('http://localhost:3001/create-transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: '1.00',
          payment_option: 'cards',
          view_type: 'hosted_view',
          payment_gate: 0,
          continue_success_url: 'http://localhost:3000',
          return_url: 'http://localhost:3000/done',
          cancel_url :'http://localhost:3000/cancel'
        })
      })
      const url = await res.text() as string;
      iframeUrl.value = url;
      window.location.href = url;
      isModalOpen.value = true;
    }else{
      isModalOpen.value = true;
      iframeUrl.value = iframeUrl.value;
    }
  } catch (error: any) {
    console.log({error});
    iframeUrl.value = '';
    isModalOpen.value =false;
    response.value = { error: error.message }
  }
}

const uiModal ={
  wrapper: 'rounded-lg',
  body: 'rounded-lg',
  content: 'rounded-lg',
  header: 'rounded-lg'
}
</script>
