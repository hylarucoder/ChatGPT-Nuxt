<script setup lang="ts">
import { useTrans } from "~/composable/locales"
import { TPrompts, useMasks } from "~/composable/mask"
import { getRandomEmoji } from "~/utils/emoji"
import { ref } from "vue"
import { useSidebarChatSessions } from "~/composable/chat"

const router = useRouter()
const chatStore = useSidebarChatSessions()
const maskUse = useMasks()

const newSessionAndNav = (mask: TPrompts) => {
  const session = chatStore.newSession(undefined, {
    topic: mask.name,
    description: mask.description,
    avatar: getRandomEmoji("a"),
  })
  router.push({
    path: "/chat/session/" + session.id,
  })
}
const { t } = useTrans()

const visible = ref(false)
</script>
<template>
  <ClientOnly>
    <div class="flex h-full flex-1 flex-col overflow-hidden">
      <div style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)" class="flex items-center justify-between px-5 py-3.5">
        <div class="overflow-hidden">
          <div class="overflow-hidden text-ellipsis text-xl font-bold">
            {{ t("Mask.Page.Title") }}
          </div>
          <div>{{ t("Mask.Page.SubTitle", { count: maskUse.masks.length }) }}</div>
        </div>
        <div class="flex">
          <div>
            <HeadIconButton icon="i-mdi-inbox-arrow-down" size="1.3em" />
          </div>
          <div class="ml-3">
            <HeadIconButton icon="i-mdi-inbox-arrow-up" size="1.3em" />
          </div>
          <div class="ml-3">
            <HeadIconButton icon="i-mdi-close-octagon-outline" size="1.3em" />
          </div>
        </div>
      </div>
      <div class="max-h-full flex-grow overflow-scroll p-5">
        <div class="mb-5 flex">
          <input
            type="text"
            :placeholder="t(`Mask.Page.Search`)"
            class="h-10 flex-grow cursor-text rounded-xl border border-solid border-neutral-200 px-3 text-center text-[0.83rem]"
          />
          <div class="relative ml-3">
            <select
              class="inline-block h-10 cursor-pointer items-center rounded-xl border border-solid border-neutral-200 py-2 pl-3 pr-6 text-center text-[0.83rem]"
            >
              <option :value="t(`Settings.Lang.All`)" class="px-1">{{ t(`Settings.Lang.All`) }}</option>
              <option value="cn" class="px-1">简体中文</option>
              <option value="en" class="px-1">English</option>
            </select>
          </div>
          <button
            class="ml-3 flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-solid border-neutral-200 p-3 text-center text-[0.83rem] hover:bg-gray-200"
          >
            <div class="flex items-center justify-center">
              <span class="i-mdi-add" size="1.1em" />
            </div>
            <div @click="visible = true" class="ml-1 overflow-hidden text-ellipsis text-xs">
              {{ t(`Mask.Page.Create`) }}
            </div>
          </button>
          <VModel :visible="visible" title="My Modal" @close="visible = false">
            <p>This is an example Modal.</p>
            <p>This is an example Modal.</p>
            <p>This is an example Modal.</p>
          </VModel>
        </div>

        <div class="divide-gray-200">
          <div
            v-for="(mask, index) in maskUse.masks"
            style="border-color: rgb(222, 222, 222); border-style: solid"
            class="flex justify-between divide-gray-50 break-words border-b border-l border-r p-5"
            :class="{
              'rounded-tl-xl rounded-tr-xl border-t ': index === 0,
              'rounded-bl-xl rounded-br-xl': index === maskUse.masks.length - 1,
            }"
          >
            <div class="flex items-center overflow-auto text-ellipsis">
              <div class="mr-3 flex items-center justify-center">
                <div
                  style="border-bottom-color: rgb(222, 222, 222)"
                  class="flex items-center justify-center rounded-xl"
                >
                  <Icon size="1.4em" class="h-10 w-10 overflow-clip" :name="getRandomEmoji(mask.name)" />
                </div>
              </div>
              <div>
                <div class="text-sm font-bold">{{ mask.name }}</div>
                <p class="text-ellipsis text-xs">{{ mask.description }}</p>
              </div>
            </div>
            <div class="flex">
              <button
                class="flex h-9 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-xl p-3 text-center text-[0.83rem] hover:bg-gray-200"
                @click="newSessionAndNav(mask)"
              >
                <div class="flex h-4 w-4 items-center justify-center">
                  <span class="i-mdi-chat-outline h-4 w-4" />
                </div>
                <div class="ml-1 overflow-hidden text-ellipsis text-xs">
                  {{ t(`Mask.Item.Chat`) }}
                </div>
              </button>
              <button
                class="flex h-9 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-xl p-3 text-center text-[0.83rem] hover:bg-gray-200"
              >
                <div class="flex h-6 w-6 items-center justify-center">
                  <span class="i-mdi-eye-outline h-5 w-5" />
                </div>
                <div class="ml-1 overflow-hidden text-ellipsis text-xs">
                  {{ t(`Mask.Item.View`) }}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
