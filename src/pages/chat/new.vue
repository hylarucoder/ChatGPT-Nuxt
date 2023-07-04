<script setup lang="ts">
import MaskCard from "~/components/MaskCard.vue"
import { TLang, TPrompts, useMasks } from "~/composable/mask"
import { useMaskGroup } from "~/composable/maskGroup"
import { getRandomEmoji } from "~/utils/emoji"
import { useSidebarChatSessions } from "~/composable/chat"

const router = useRouter()
const chatStore = useSidebarChatSessions()
const masksUse = useMasks()
const { groups, computeGroup } = useMaskGroup(masksUse.masks)

const maskRef = ref<HTMLDivElement | null>(null)

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

onMounted(() => {
  computeGroup()
})

watch(
  [groups, masksUse.masks],
  () => {
    if (maskRef.value && !!masksUse.masks) {
      computeGroup()
      maskRef.value.scrollLeft = (maskRef.value.scrollWidth - maskRef.value.clientWidth) / 4
    }
  },
  { deep: true, flush: "post" }
)
</script>
<template>
  <div id="app-body" class="flex w-full flex-shrink flex-col items-center overflow-hidden">
    <div class="flex w-full justify-between p-3 text-zinc-800">
      <button
        class="flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-white p-3 text-center hover:bg-gray-200"
        @click="router.back()"
      >
        <div class="flex items-center justify-center">
          <Icon name="mingcute:left-line" size="1.2em" />
        </div>
        <div class="ml-1 overflow-hidden text-ellipsis text-xs">
          {{ $t("NewChat.Return") }}
        </div>
      </button>
      <button
        class="flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-white p-3 text-center hover:bg-gray-200"
      >
        <div class="ml-1 overflow-hidden text-ellipsis text-xs">
          {{ $t("NewChat.NotShow") }}
        </div>
      </button>
    </div>
    <div class="mb-5 mt-12 flex space-x-1">
      <div class="flex h-16 w-12 items-center justify-center rounded-2xl border border-neutral-200 bg-white px-3 py-5">
        <Icon name="😆" size="1.4em" />
      </div>
      <div class="flex h-16 w-12 items-center justify-center rounded-2xl border border-neutral-200 bg-white px-3 py-5">
        <Icon name="🤖" size="1.4em" />
      </div>
      <div class="flex h-16 w-12 items-center justify-center rounded-2xl border border-neutral-200 bg-white px-3 py-5">
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
        class="flex h-10 cursor-pointer items-center justify-center truncate rounded-xl border border-neutral-200 bg-white p-3 text-center hover:bg-gray-200"
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
        class="ml-3 flex h-10 cursor-pointer items-center justify-center truncate rounded-xl bg-[--primary] p-3 text-center text-white hover:bg-emerald-500"
        @click="
          newSessionAndNav({
            name: 'New Chat',
            description: `hello`,
            lang: `en`,
          })
        "
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
      <div class="mask-row mb-3 flex" v-for="(row, index) in groups" :key="index">
        <MaskCard
          @click="
            newSessionAndNav({
              name: mask.name,
              description: mask.description,
              lang: mask.lang,
            })
          "
          v-for="mask in row"
          :key="mask.name"
          :icon="getRandomEmoji(mask.name || '?')"
          :text="mask.name"
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
