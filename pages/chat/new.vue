<template>
  <div class="items-center text-zinc-800 flex flex-col justify-center flex-1">
    <div class="flex justify-between p-3 w-full">
      <button
        @click="router.back()"
        class="items-center bg-white cursor-pointer flex h-10 justify-center text-center p-3 rounded-xl truncate"
      >
        <div class="items-center flex justify-center">
          <SvgIcon icon="return" class="w-4 h-4" />
        </div>
        <div class="text-[0.75rem] ml-1 truncate">返回</div>
      </button>
    </div>
    <div class="flex mb-5 mt-12 space-x-1">
      <div class="bg-white h-16 py-5 px-3 w-12 border-neutral-200 rounded-2xl border">
        <img
          src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f606.png"
          class="text-[1.50rem] h-6 align-middle w-6 overflow-clip"
        />
      </div>
      <div class="bg-white h-16 py-5 px-3 w-12 border-neutral-200 rounded-2xl border">
        <img
          src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f916.png"
          class="text-[1.50rem] h-6 align-middle w-6 overflow-clip"
        />
      </div>
      <div class="bg-white h-16 py-5 px-3 w-12 border-neutral-200 rounded-2xl border">
        <img
          src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f479.png"
          class="text-[1.50rem] h-6 align-middle w-6 overflow-clip"
        />
      </div>
    </div>
    <div class="text-[2.00rem] font-bold mb-2">挑选一个面具</div>
    <div>现在开始，与面具背后的灵魂思维碰撞</div>
    <div class="flex text-[0.75rem] justify-center mb-5 mt-12 space-x-2">
      <button
        class="items-center bg-emerald-400 text-white cursor-pointer flex h-10 justify-center ml-3 text-center w-24 p-3 rounded-xl truncate hover:bg-emerald-500"
        @click="newSessionAndNav"
      >
        <div class="items-center flex justify-center">
          <SvgIcon icon="lightning" class="" style="color: white" />
        </div>
        <div class="ml-1 truncate text-white">直接开始</div>
      </button>
      <button
        class="items-center bg-white cursor-pointer flex h-10 justify-center text-center w-24 p-3 border-neutral-200 rounded-xl border truncate hover:bg-gray-200"
      >
        <div class="items-center flex justify-center">
          <SvgIcon icon="eye" class="w-4 h-4" />
        </div>
        <div class="ml-1 truncate text-black">查看全部</div>
      </button>
    </div>
    <div class="items-center flex-grow pt-5 overflow-hidden">
      <div class="flex mb-3 overflow-y-auto">
        <MaskCard
          v-for="mask in maskCards"
          icon="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f69b.png"
          :text="mask.title"
        />
      </div>
      <div class="flex mb-3 ml-12">
        <MaskCard
          v-for="mask in maskCards"
          icon="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f69b.png"
          :text="mask.title"
        />
      </div>
      <div class="flex mb-3">
        <MaskCard
          v-for="mask in maskCards"
          icon="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f69b.png"
          :text="mask.title"
        />
      </div>
      <div class="flex mb-3 ml-12">
        <MaskCard
          v-for="mask in maskCards"
          icon="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f69b.png"
          :text="mask.title"
        />
      </div>
      <div class="flex mb-3">
        <MaskCard
          v-for="mask in maskCards"
          icon="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f69b.png"
          :text="mask.title"
        />
      </div>
      <div class="flex mb-3 ml-6">
        <MaskCard
          v-for="mask in maskCards"
          icon="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f69b.png"
          :text="mask.title"
        />
      </div>
      <div class="flex mb-3 ml-3">
        <MaskCard
          v-for="mask in maskCards"
          icon="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f69b.png"
          :text="mask.title"
        />
      </div>
      <div class="flex mb-3">
        <MaskCard
          v-for="mask in maskCards"
          icon="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f69b.png"
          :text="mask.title"
        />
      </div>
      <div class="flex mb-3 ml--4">
        <MaskCard
          v-for="mask in maskCards"
          icon="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f69b.png"
          :text="mask.title"
        />
      </div>
      <div class="flex mb-3 ml-2">
        <MaskCard
          v-for="mask in maskCards"
          icon="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f69b.png"
          :text="mask.title"
        />
      </div>
      <div class="flex mb-3 ml-4">
        <MaskCard
          v-for="mask in maskCards"
          icon="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f69b.png"
          :text="mask.title"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useChatStore } from "~/composables/chat"
import MaskCard from "~/components/MaskCard.vue"

const router = useRouter()
const chatStore = useChatStore()

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
