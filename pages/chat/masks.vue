<template>
  <div class="flex flex-col overflow-hidden flex-1 h-screen">
    <div style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)" class="items-center flex justify-between py-3.5 px-5">
      <div class="overflow-hidden">
        <div class="text-xl font-bold text-ellipsis overflow-hidden">预设角色面具</div>
        <div>{{ masks.length }} 个预设角色定义</div>
      </div>
      <div class="flex">
        <div>
          <button
            class="items-center cursor-pointer flex h-10 justify-center w-10 border border-neutral-200 border-solid rounded-xl p-3 overflow-hidden"
          >
            <div class="items-center flex justify-center">
              <SvgIcon icon="download" />
            </div>
          </button>
        </div>
        <div class="ml-3">
          <button
            class="items-center cursor-pointer flex h-10 justify-center w-10 border border-neutral-200 border-solid rounded-xl p-3 overflow-hidden"
          >
            <div class="items-center flex justify-center">
              <SvgIcon icon="upload" />
            </div>
          </button>
        </div>
        <div class="ml-3">
          <button
            class="items-center cursor-pointer flex h-10 justify-center w-10 border border-neutral-200 border-solid rounded-xl p-3 overflow-hidden"
          >
            <div class="items-center flex justify-center">
              <SvgIcon icon="close" />
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="p-5 flex-grow overflow-scroll max-h-full">
      <div class="flex mb-5">
        <input
          type="text"
          placeholder="搜索角色面具"
          class="cursor-text flex-grow text-[0.83rem] h-10 px-3 text-center w-[41.03rem] border border-neutral-200 border-solid rounded-xl"
        />
        <div class="ml-3 relative">
          <select
            class="items-center cursor-pointer inline-block text-[0.83rem] h-10 py-2 pl-3 pr-6 text-center w-30 border border-neutral-200 border-solid rounded-xl"
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
          class="items-center cursor-pointer flex text-[0.83rem] h-10 justify-center ml-3 text-center w-30 border border-neutral-200 border-solid rounded-xl p-3 overflow-hidden"
        >
          <div class="items-center flex justify-center">
            <SvgIcon icon="add" />
          </div>
          <div class="text-xs ml-1 text-ellipsis overflow-hidden">新建</div>
        </button>
      </div>

      <div class="divide-gray-200">
        <div
          v-for="(mask, index) in masks"
          style="border-color: rgb(222, 222, 222); border-style: solid"
          class="border-l border-r break-words flex justify-between p-5 divide-gray-50 border-b"
          :class="{
            'rounded-tl-xl rounded-tr-xl border-t ': index === 0,
            'rounded-bl-xl rounded-br-xl': index === masks.length - 1,
          }"
        >
          <div class="items-center flex overflow-auto text-ellipsis">
            <div class="items-center flex justify-center mr-3">
              <div style="border-bottom-color: rgb(222, 222, 222)" class="items-center flex justify-center rounded-xl">
                <Icon icon class="h-10 w-10 overflow-clip" :name="getRandomEmoji(mask.name)" />
              </div>
            </div>
            <div>
              <div class="text-sm font-bold">{{ mask.name }}</div>
              <p class="text-xs text-ellipsis">{{ mask.description }}</p>
            </div>
          </div>
          <div class="flex">
            <button
              class="items-center cursor-pointer flex text-[0.83rem] h-9 justify-center text-center w-20 rounded-xl p-3 overflow-hidden"
            >
              <div class="items-center flex justify-center h-4 w-4">
                <SvgIcon icon="add" />
              </div>
              <div class="text-xs ml-1 text-ellipsis overflow-hidden">对话</div>
            </button>
            <button
              class="items-center cursor-pointer flex text-[0.83rem] h-9 justify-center text-center w-20 rounded-xl p-3 overflow-hidden"
            >
              <div class="items-center flex justify-center h-4 w-4">
                <SvgIcon icon="eye" />
              </div>
              <div class="text-xs ml-1 text-ellipsis overflow-hidden">查看</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getRandomEmoji } from "~/utils/emoji"

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
