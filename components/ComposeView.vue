<template>
  <div class="flex-col p-3 rounded-xl border relative">
    <p>{{ a }}</p>
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
      <textarea class="relative cursor-text h-24 break-words pb-3 pl-3.5 pr-24 w-full rounded-xl border"></textarea>
      <button
        class="absolute items-center bg-emerald-400 bottom-1 text-white cursor-pointer flex h-10 justify-center right-1 text-center top-[5.63rem] w-16 p-3 rounded-xl truncate"
      >
        <div class="items-center flex justify-center">
          <SvgIcon icon="send-white" />
        </div>
        <div class="text-[0.75rem] ml-1 truncate" @click="test">发送</div>
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import { fetchStream } from "~/constants/api"

let a = ref("-")

const test = async () => {
  fetchStream((receivedData) => {
    a.value = receivedData
    console.log("Received message:", receivedData)
  }).catch((error) => {
    console.error("Error occurred:", error)
  })
}
</script>
