<script lang="ts" setup>
import { useTrans } from "~/composable/locales"

const { t } = useTrans()
</script>
<template>
  <div class="z-10 flex w-[--sidebar-width] flex-shrink-0 flex-col overflow-hidden bg-cyan-50 p-5 shadow">
    <div class="relative py-5">
      <div class="text-[1.25rem] font-bold">ChatGPT Nuxt</div>
      <div class="text-[0.75rem]">Build your own AI assistant.</div>

      <div class="absolute right-0 top-2">
        <img src="/nuxt.svg" class="h-16 w-16 opacity-80" />
      </div>
    </div>
    <div class="mb-5 flex space-x-2">
      <NuxtLink class="w-full flex-grow" :to="`/chat/masks`">
        <IconButton class="w-full" icon="i-mdi-robot-happy-outline" :text="t(`Mask.Name`)" />
      </NuxtLink>
      <NuxtLink class="w-full flex-grow" :to="`/chat/plugins`">
        <IconButton class="w-full" icon="i-mdi-folder-search-outline" :text="t(`Plugin.Name`)" />
      </NuxtLink>
    </div>
    <div class="flex-grow overflow-x-hidden">
      <VChatList />
    </div>
    <div class="flex justify-between pt-5">
      <div class="flex">
        <div>
          <NuxtLink to="/chat/settings" class="cursor-pointer">
            <IconButton icon="i-mdi-cog-outline" />
          </NuxtLink>
        </div>
      </div>
      <div>
        <NuxtLink :to="`/chat/new`">
          <IconButton icon="i-mdi-chat-outline" :text="t(`Home.NewChat`)" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
