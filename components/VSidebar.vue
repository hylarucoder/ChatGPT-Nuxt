<script lang="ts" setup></script>
<template>
  <div class="z-10 flex max-w-[300px] flex-shrink-0 flex-col overflow-hidden bg-cyan-50 p-5 shadow">
    <div class="relative py-5">
      <div class="text-[1.25rem] font-bold">ChatGPT Nuxt</div>
      <div class="text-[0.75rem]">Build your own AI assistant.</div>

      <div class="absolute bottom-[1.13rem] left-[13.56rem] top-[1.63rem]">
        <VSvgIcon icon="chatgpt" />
      </div>
    </div>
    <div class="mb-5 flex space-x-2">
      <NuxtLink class="flex-grow" to="/chat/masks">
        <IconButton icon="mask" text="面具" />
      </NuxtLink>
      <NuxtLink class="flex-grow" to="/chat/plugins">
        <IconButton icon="plugin" text="插件" />
      </NuxtLink>
    </div>
    <div class="flex-grow overflow-x-hidden">
      <VChatList />
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
