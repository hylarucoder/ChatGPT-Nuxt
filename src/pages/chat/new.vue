<script setup lang="ts">
import { onMounted } from "vue"
import MaskCard from "~/components/MaskCard.vue"
import { TPrompts, useMasks } from "~/composable/mask"
import { useSettingStore } from "~/composable/settings"
import { getRandomEmoji } from "~/utils/emoji"
import { useSidebarChatSessions } from "~/composable/chat"

const router = useRouter()
const { settings } = useSettingStore()
const chatStore = useSidebarChatSessions()
const masksUse = useMasks()

const maskRef = ref<HTMLDivElement | null>(null)
const pageRef = ref<HTMLDivElement | null>(null)

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

const newDefaultSession = () => {
  newSessionAndNav({
    name: "New Chat",
    description: `hello`,
    lang: `en`,
  })
}

onBeforeMount(() => {
  if (!settings.maskLaunchPage) {
    newDefaultSession()
  }
})

const resizeMaskRows = useThrottleFn(
  ({ width, height }: { width: number; height: number }) => {
    if (!pageRef.value) {
      return
    }
    if (!masksUse.masks || masksUse.masks.length === 0) {
      return
    }
    masksUse.computeMaskRows({
      width,
      height,
    })
    if (!maskRef.value) {
      return
    }
    nextTick(() => {
      maskRef.value.scrollLeft = (maskRef.value.scrollWidth - maskRef.value.clientWidth) / 2
    })
  },
  300,
  true,
  true,
)

useResizeObserver(pageRef, (entries) => {
  const { width, height } = entries[0].contentRect
  resizeMaskRows({
    width,
    height,
  })
})

onMounted(() => {
  if (!pageRef.value) {
    return
  }
  resizeMaskRows({
    width: pageRef.value.clientWidth,
    height: pageRef.value.clientHeight,
  })
})

const notShowAndNav = () => {
  settings.maskLaunchPage = false
  newDefaultSession()
}
</script>
<template>
  <div ref="pageRef" class="flex flex-grow flex-col items-center overflow-hidden">
    <div class="flex w-full justify-between p-3 text-zinc-800">
      <button
        class="flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-md bg-white p-3 text-center hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200"
        @click="router.back()"
      >
        <div class="flex items-center justify-center">
          <span class="i-mdi-chevron-left h-4" />
        </div>
        <div class="ml-0 overflow-hidden text-ellipsis text-xs">
          {{ $t("NewChat.Return") }}
        </div>
      </button>
      <button
        class="flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-md bg-white p-3 text-center hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200"
        @click="notShowAndNav()"
      >
        <div class="ml-1 overflow-hidden text-ellipsis text-xs">
          {{ $t("NewChat.NotShow") }}
        </div>
      </button>
    </div>
    <div class="mb-5 mt-12 flex space-x-1">
      <div class="flex h-16 w-12 items-center justify-center rounded-md border border-neutral-200 bg-white px-3 py-5">
        <Icon name="😆" size="1.4em" />
      </div>
      <div class="flex h-16 w-12 items-center justify-center rounded-md border border-neutral-200 bg-white px-3 py-5">
        <Icon name="🤖" size="1.4em" />
      </div>
      <div class="flex h-16 w-12 items-center justify-center rounded-md border border-neutral-200 bg-white px-3 py-5">
        <Icon name="👹" size="1.4em" />
      </div>
    </div>
    <div class="mb-2 text-[2.00rem] font-bold">
      {{ $t("NewChat.Title") }}
    </div>
    <div>
      {{ $t("NewChat.SubTitle") }}
    </div>
    <div class="mb-5 mt-12 flex justify-center space-x-2 text-[0.75rem]">
      <button
        class="flex h-10 cursor-pointer items-center justify-center truncate rounded-md border border-neutral-200 bg-white p-3 text-center hover:bg-gray-200"
        @click="router.push('/chat/masks')"
      >
        <div class="flex items-center justify-center">
          <Icon size="1.3em" name="ph:eye" color="#000" />
        </div>
        <div class="ml-1 truncate text-black">
          {{ $t("NewChat.More") }}
        </div>
      </button>
      <button
        class="ml-3 flex h-10 cursor-pointer items-center justify-center truncate rounded-md bg-[--primary] p-3 text-center text-white hover:bg-green-800"
        @click="newDefaultSession()"
      >
        <div class="flex items-center justify-center">
          <Icon color="#FFF" size="1.4em" name="typcn:flash-outline" />
        </div>
        <div class="ml-1 truncate text-white">
          {{ $t("NewChat.Skip") }}
        </div>
      </button>
    </div>
    <div ref="maskRef" class="masks pt-5">
      <div v-for="(row, i) in masksUse.maskRows" :key="i" class="mask-row mb-3 flex">
        <MaskCard
          v-for="(mask, j) in row"
          :key="j"
          class="max-w-[200px]"
          :icon="getRandomEmoji(mask.name || '?')"
          :text="mask.name"
          @click="
            newSessionAndNav({
              name: mask.name,
              description: mask.description,
              lang: mask.lang,
            })
          "
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.masks {
  flex-grow: 1;
  width: 100%;
  overflow: auto;

  $linear: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

  -webkit-mask-image: $linear;
  mask-image: $linear;

  .mask-row {
    @for $i from 1 to 10 {
      &:nth-child(#{$i * 2}) {
        margin-left: 60px;
      }
    }
  }
}
</style>
