<template>
  <div class="bg-cyan-50 flex flex-col p-5 max-w-[300px] shadow">
    <div class="py-5 relative">
      <div class="text-[1.25rem] font-bold">Best Prompts Hub</div>
      <div class="text-[0.75rem]">Build your own AI assistant.</div>

      <div class="bottom-[1.13rem] left-[13.56rem] absolute top-[1.63rem]">
        <SvgIcon icon="chatgpt" />
      </div>
    </div>
    <div class="flex mb-5 space-x-2">
      <NuxtLink class="flex-grow" to="/chat/masks">
        <IconButton icon="mask" text="面具" />
      </NuxtLink>
      <NuxtLink class="flex-grow" to="/chat/plugins">
        <IconButton icon="plugin" text="插件" />
      </NuxtLink>
    </div>
    <div class="flex-grow overflow-x-hidden">
      <ChatList />
    </div>
    <div class="flex justify-between pt-5">
      <div class="flex">
        <div>
          <NuxtLink to="/chat/settings" class="cursor-pointer">
            <IconButton icon="chat-settings" />
          </NuxtLink>
        </div>
      </div>
      <div>
        <NuxtLink to="/chat/new">
          <IconButton icon="add" text="新的聊天" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import ChatList from "~/components/ChatList.vue"
import IconButton from "~/components/IconButton.vue"
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
