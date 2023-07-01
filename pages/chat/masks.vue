<script setup lang="ts">
import { getRandomEmoji } from "~/utils/emoji"
import { ref } from "vue"

const masks = ref<TPrompts[]>([])

interface TPromptsJson {
  cn: string[]
  en: string[]
}

enum TLang {
  cn,
  en,
}

interface TPrompts {
  name: string
  description: string
  lang: TLang
}

const visible = ref(false)

onMounted(() => {
  fetch("/prompts.json")
    .then((response) => response.json())
    .then((prompts: TPromptsJson) => {
      // 将结果放到变量 a 中
      for (let prompt of prompts.cn) {
        if (!prompt[0]) {
          continue
        }
        masks.value.push({
          name: prompt[0],
          description: prompt[1],
          lang: TLang.cn,
        })
      }

      for (let prompt of prompts.en) {
        if (!prompt[0]) {
          continue
        }
        masks.value.push({
          name: prompt[0],
          description: prompt[1],
          lang: TLang.en,
        })
      }

      // a.value = prompts
      // console.log("a value", a.value)
    })
    .catch((error) => console.error(error))
})
</script>
<template>
  <div class="flex h-screen flex-1 flex-col overflow-hidden">
    <div style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)" class="flex items-center justify-between px-5 py-3.5">
      <div class="overflow-hidden">
        <div class="overflow-hidden text-ellipsis text-xl font-bold">预设角色面具</div>
        <div>{{ masks.length }} 个预设角色定义</div>
      </div>
      <div class="flex">
        <div>
          <button
            class="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-solid border-neutral-200 p-3"
          >
            <div class="flex items-center justify-center">
              <VSvgIcon icon="download" />
            </div>
          </button>
        </div>
        <div class="ml-3">
          <button
            class="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-solid border-neutral-200 p-3"
          >
            <div class="flex items-center justify-center">
              <VSvgIcon icon="upload" />
            </div>
          </button>
        </div>
        <div class="ml-3">
          <button
            class="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-solid border-neutral-200 p-3"
          >
            <div class="flex items-center justify-center">
              <VSvgIcon icon="close" />
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="max-h-full flex-grow overflow-scroll p-5">
      <div class="mb-5 flex">
        <input
          type="text"
          placeholder="搜索角色面具"
          class="h-10 w-[41.03rem] flex-grow cursor-text rounded-xl border border-solid border-neutral-200 px-3 text-center text-[0.83rem]"
        />
        <div class="relative ml-3">
          <select
            class="w-30 inline-block h-10 cursor-pointer items-center rounded-xl border border-solid border-neutral-200 py-2 pl-3 pr-6 text-center text-[0.83rem]"
          >
            <option value="所有语言" class="px-1">所有语言</option>
            <option value="cn" class="px-1">简体中文</option>
            <option value="en" class="px-1">English</option>
            <option value="tw" class="px-1">繁體中文</option>
            <option value="jp" class="px-1">日本語</option>
            <option value="ko" class="px-1">한국어</option>
            <option value="fr" class="px-1">Français</option>
            <option value="es" class="px-1">Español</option>
            <option value="it" class="px-1">Italiano</option>
            <option value="tr" class="px-1">Türkçe</option>
            <option value="de" class="px-1">Deutsch</option>
            <option value="vi" class="px-1">Tiếng Việt</option>
            <option value="ru" class="px-1">Русский</option>
            <option value="cs" class="px-1">Čeština</option>
            <option value="no" class="px-1">Nynorsk</option>
            <option value="ar" class="px-1">العربية</option>
          </select>
        </div>
        <button
          class="w-30 ml-3 flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-solid border-neutral-200 p-3 text-center text-[0.83rem]"
        >
          <div class="flex items-center justify-center">
            <VSvgIcon icon="add" />
          </div>
          <div @click="visible = true" class="ml-1 overflow-hidden text-ellipsis text-xs">新建</div>
        </button>
        <VModel :visible="visible" title="My Modal" @close="visible = false">
          <p>This is an example Modal.</p>
          <p>This is an example Modal.</p>
          <p>This is an example Modal.</p>
        </VModel>
      </div>

      <div class="divide-gray-200">
        <div
          v-for="(mask, index) in masks"
          style="border-color: rgb(222, 222, 222); border-style: solid"
          class="flex justify-between divide-gray-50 break-words border-b border-l border-r p-5"
          :class="{
            'rounded-tl-xl rounded-tr-xl border-t ': index === 0,
            'rounded-bl-xl rounded-br-xl': index === masks.length - 1,
          }"
        >
          <div class="flex items-center overflow-auto text-ellipsis">
            <div class="mr-3 flex items-center justify-center">
              <div style="border-bottom-color: rgb(222, 222, 222)" class="flex items-center justify-center rounded-xl">
                <Icon icon class="h-10 w-10 overflow-clip" :name="getRandomEmoji(mask.name)" />
              </div>
            </div>
            <div>
              <div class="text-sm font-bold">{{ mask.name }}</div>
              <p class="text-ellipsis text-xs">{{ mask.description }}</p>
            </div>
          </div>
          <div class="flex">
            <button
              class="flex h-9 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-xl p-3 text-center text-[0.83rem]"
            >
              <div class="flex h-4 w-4 items-center justify-center">
                <VSvgIcon icon="add" />
              </div>
              <div class="ml-1 overflow-hidden text-ellipsis text-xs">对话</div>
            </button>
            <button
              class="flex h-9 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-xl p-3 text-center text-[0.83rem]"
            >
              <div class="flex h-4 w-4 items-center justify-center">
                <VSvgIcon icon="eye" />
              </div>
              <div class="ml-1 overflow-hidden text-ellipsis text-xs">查看</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
