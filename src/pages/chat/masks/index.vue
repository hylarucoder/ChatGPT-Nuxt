<script setup lang="ts">
import { ref } from "vue"
import { useTrans } from "~/composables/locales"
import { TPrompts, useMasks } from "~/composables/mask"
import { useSidebar } from "~/composables/useSidebar"
import { getRandomEmoji } from "~/utils/emoji"
import { useSidebarChatSessions } from "~/composables/chat"
import { MasksHeader } from "~/pages/chat/masks/MasksHeader"

const router = useRouter()
const chatStore = useSidebarChatSessions()
const maskUse = useMasks()
const sidebarUsed = useSidebar()
const visible = ref(false)

const newSessionAndNav = (mask: TPrompts) => {
  const session = chatStore.newSession(undefined, {
    topic: mask.name,
    description: mask.description,
    avatar: getRandomEmoji("a"),
  })
  sidebarUsed.hideIfMobile()
  router.push({
    path: "/chat/session/" + session.id,
  })
}
const { t } = useTrans()

const inputSearch = reactive({
  q: "",
  language: "all",
})
useThrottleFn(
  () => {
    maskUse.search({
      q: inputSearch.q,
    })
  },
  500,
  true,
  true,
  // TODO: revoke previous request if new request is sent
)
watch(
  () => inputSearch,
  (value) => {
    maskUse.search({
      q: value.q,
    })
  },
  {
    deep: true,
  },
)
</script>
<template>
  <ClientOnly>
    <div class="flex h-full w-full flex-1 flex-col overflow-hidden">
      <MasksHeader :count="maskUse.searchedMasks.length" />
      <div class="max-h-full flex-grow overflow-scroll p-5">
        <div class="mb-5 flex space-x-3">
          <div class="w-full flex-grow">
            <UInput v-model="inputSearch.q" size="md" type="text" :placeholder="t(`Mask.Page.Search`)" />
          </div>
          <div>
            <USelect
              size="md"
              :placeholder="t(`Settings.Lang.All`)"
              :options="[
                {
                  label: `简体中文`,
                  value: `zh_CN`,
                },
                {
                  label: `English`,
                  value: `en`,
                },
              ]"
            />
          </div>
          <div>
            <UButton size="md" color="white" variant="solid" @click="visible = true">
              {{ t(`Mask.Page.Create`) }}
            </UButton>
          </div>
          <UModal v-model="visible" @close="visible = false">
            <p>This is an example Modal.</p>
            <p>This is an example Modal.</p>
            <p>This is an example Modal.</p>
          </UModal>
        </div>

        <div class="divide-gray-200 dark:divide-gray-500">
          <div
            v-for="(mask, index) in maskUse.searchedMasks"
            :key="index"
            class="flex justify-between divide-gray-100 break-words border-b border-l border-r border-gray-200 p-5 dark:border-gray-500"
            :class="{
              'rounded-t-md border-t ': index === 0,
              'rounded-b-md ': index === maskUse.searchedMasks.length - 1,
            }"
          >
            <div class="flex items-center overflow-hidden text-ellipsis">
              <div class="mr-3 flex items-center justify-center">
                <div
                  style="border-bottom-color: rgb(222, 222, 222)"
                  class="flex items-center justify-center rounded-md"
                >
                  <Icon size="1.4em" class="h-10 w-10 overflow-clip" :name="getRandomEmoji(mask.name)" />
                </div>
              </div>
              <div>
                <div class="text-sm font-bold">
                  {{ mask.name }}
                </div>
                <p class="text-ellipsis text-xs">
                  {{ mask.description }}
                </p>
              </div>
            </div>
            <div class="flex">
              <button
                class="flex h-9 cursor-pointer items-center justify-center overflow-hidden rounded-md py-3 text-center text-[0.83rem] hover:bg-gray-200 sm:w-20"
                @click="newSessionAndNav(mask)"
              >
                <div class="flex items-center justify-center">
                  <span class="i-mdi-chat-outline h-5 w-5 sm:h-4 sm:w-4" />
                </div>
                <div class="ml-1 hidden overflow-hidden text-ellipsis text-xs sm:block">
                  {{ t(`Mask.Item.Chat`) }}
                </div>
              </button>
              <button
                class="flex h-9 cursor-pointer items-center justify-center overflow-hidden rounded-md py-3 text-center text-[0.83rem] hover:bg-gray-200 sm:w-20"
              >
                <div class="flex items-center justify-center">
                  <span class="i-mdi-eye-outline h-5 w-5 sm:h-4 sm:w-4" />
                </div>
                <div class="ml-1 hidden overflow-hidden text-ellipsis text-xs sm:block">
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
