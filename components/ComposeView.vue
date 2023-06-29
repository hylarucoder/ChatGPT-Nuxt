<template>
  <div class="flex-col p-3 rounded-xl border relative">
    <div class="flex flex-wrap">
      <div class="items-center cursor-pointer flex text-[0.75rem] mb-3 mr-1 py-1 px-3 rounded-2xl border">
        <SvgIcon icon="bottom" />
      </div>
      <div class="items-center cursor-pointer flex text-[0.75rem] mb-3 mr-1 py-1 px-3 rounded-2xl border">
        <SvgIcon icon="auto" />
      </div>
      <div class="items-center cursor-pointer flex text-[0.75rem] mb-3 mr-1 py-1 px-3 rounded-2xl border">
        <SvgIcon icon="prompt" />
      </div>
      <div class="items-center cursor-pointer flex text-[0.75rem] mb-3 mr-1 py-1 px-3 rounded-2xl border">
        <SvgIcon icon="mask" />
      </div>
      <div class="items-center cursor-pointer flex text-[0.75rem] mb-3 py-1 px-3 rounded-2xl border">
        <SvgIcon icon="break" />
      </div>
    </div>
    <div class="flex flex-grow">
      <textarea
        class="relative cursor-text h-24 break-words pb-3 pl-3.5 pr-24 w-full rounded-xl border"
        v-model="composeInput"
      />
      <button
        class="absolute items-center bg-emerald-400 bottom-0 text-white cursor-pointer flex h-10 justify-center right-2 text-center px-4 py-2 rounded-xl truncate"
      >
        <div class="items-center flex justify-center">
          <SvgIcon icon="send-white" />
        </div>
        <div class="text-[0.75rem] ml-1 truncate" @click="composeNewMessage">发送</div>
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import { useChatStore } from "~/composables/chat"

let composeInput = ref("")
const chatStore = useChatStore()

const composeNewMessage = () => {
  chatStore.onNewMessage(composeInput.value)
}

// let a = ref("-")
// const test = async (e) => {
//   e.preventDefault()
//   fetchStream(payload, (receivedData: string) => {
//     a.value = receivedData
//     console.log("Received message:", receivedData)
//   }).catch((error) => {
//     console.error("Error occurred:", error)
//   })
// }
</script>
