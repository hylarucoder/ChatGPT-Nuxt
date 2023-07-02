<script setup lang="ts">
import { useSidebarChatSessions } from "~/composable/chat"
import MaskCard from "~/components/MaskCard.vue"

const router = useRouter()
const chatStore = useSidebarChatSessions()

const newSessionAndNav = () => {
  const session = chatStore.newSession()
  router.push({
    path: "/chat/session/" + session.id,
  })
}

const maskCards = [
  {
    title: "职业顾问",
    icon: "job",
    description: "职业顾问",
    color: "bg-blue-500",
  },
  {
    title: "心灵导师",
    icon: "heart",
    description: "心灵导师",
    color: "bg-pink-500",
  },
  {
    title: "CAN",
    icon: "can",
    description: "CAN",
    color: "bg-yellow-500",
  },
  {
    title: "英专写手",
    icon: "english",
    description: "英专写手",
    color: "bg-green-500",
  },
  {
    title: "语言检测器",
    icon: "language",
    description: "语言检测器",
    color: "bg-purple-500",
  },
  {
    title: "小红书写手",
    icon: "xiaohongshu",
    description: "小红书写手",
    color: "bg-red-500",
  },
  {
    title: "简历写手",
    icon: "resume",
    description: "简历写手",
    color: "bg-blue-500",
  },
  {
    title: "心理医生",
    icon: "doctor",
    description: "心理医生",
    color: "bg-pink-500",
  },
  {
    title: "创业点子王",
    icon: "idea",
    description: "创业点子王",
    color: "bg-yellow-500",
  },
  {
    title: "新的聊天",
    icon: "chatgpt",
    description: "新的聊天",
    color: "bg-green-500",
  },
]
</script>
<template>
  <div class="flex flex-1 flex-col items-center justify-center text-zinc-800">
    <div class="flex w-full justify-between p-3">
      <button
        @click="router.back()"
        class="flex h-10 cursor-pointer items-center justify-center truncate rounded-xl bg-white p-3 text-center"
      >
        <div class="flex items-center justify-center">
          <VSvgIcon icon="return" class="h-4 w-4" />
        </div>
        <div class="ml-1 truncate text-[0.75rem]">返回</div>
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
    <div class="mb-2 text-[2.00rem] font-bold">挑选一个面具</div>
    <div>现在开始，与面具背后的灵魂思维碰撞</div>
    <div class="mb-5 mt-12 flex justify-center space-x-2 text-[0.75rem]">
      <button
        class="ml-3 flex h-10 w-24 cursor-pointer items-center justify-center truncate rounded-xl bg-emerald-400 p-3 text-center text-white hover:bg-emerald-500"
        @click="newSessionAndNav"
      >
        <div class="flex items-center justify-center">
          <VSvgIcon icon="lightning" class="" style="color: white" />
        </div>
        <div class="ml-1 truncate text-white">直接开始</div>
      </button>
      <button
        class="flex h-10 w-24 cursor-pointer items-center justify-center truncate rounded-xl border border-neutral-200 bg-white p-3 text-center hover:bg-gray-200"
        @click="router.push('/chat/masks')"
      >
        <div class="flex items-center justify-center">
          <VSvgIcon icon="eye" class="h-4 w-4" />
        </div>
        <div class="ml-1 truncate text-black">查看全部</div>
      </button>
    </div>
    <div class="flex-grow items-center overflow-hidden pt-5">
      <div class="mb-3 flex overflow-y-auto">
        <MaskCard v-for="mask in maskCards" :icon="getRandomEmoji(mask.title)" :text="mask.title" />
      </div>
      <div class="mb-3 ml-12 flex">
        <MaskCard v-for="mask in maskCards" :icon="getRandomEmoji(mask.title)" :text="mask.title" />
      </div>
      <div class="mb-3 flex">
        <MaskCard v-for="mask in maskCards" :icon="getRandomEmoji(mask.title)" :text="mask.title" />
      </div>
      <div class="mb-3 ml-12 flex">
        <MaskCard v-for="mask in maskCards" :icon="getRandomEmoji(mask.title)" :text="mask.title" />
      </div>
      <div class="mb-3 flex">
        <MaskCard v-for="mask in maskCards" :icon="getRandomEmoji(mask.title)" :text="mask.title" />
      </div>
      <div class="mb-3 ml-6 flex">
        <MaskCard v-for="mask in maskCards" :icon="getRandomEmoji(mask.title)" :text="mask.title" />
      </div>
      <div class="mb-3 ml-3 flex">
        <MaskCard v-for="mask in maskCards" :icon="getRandomEmoji(mask.title)" :text="mask.title" />
      </div>
      <div class="mb-3 flex">
        <MaskCard v-for="mask in maskCards" :icon="getRandomEmoji(mask.title)" :text="mask.title" />
      </div>
      <div class="mb-3 ml--4 flex">
        <MaskCard v-for="mask in maskCards" :icon="getRandomEmoji(mask.title)" :text="mask.title" />
      </div>
      <div class="mb-3 ml-2 flex">
        <MaskCard v-for="mask in maskCards" :icon="getRandomEmoji(mask.title)" :text="mask.title" />
      </div>
      <div class="mb-3 ml-4 flex">
        <MaskCard v-for="mask in maskCards" :icon="getRandomEmoji(mask.title)" :text="mask.title" />
      </div>
    </div>
  </div>
</template>
