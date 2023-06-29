<template>
  <div class="flex flex-col w-full">
    <div
      style="
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        border-top-color: rgba(0, 0, 0, 0.1);
        border-right-color: rgba(0, 0, 0, 0.1);
        border-left-color: rgba(0, 0, 0, 0.1);
        border-top-style: solid;
        border-right-style: solid;
        border-left-style: solid;
      "
      class="items-center flex justify-between py-3.5 px-5"
    >
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
    <div class="p-5">
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

      <div class="container-mask divide-gray-200 overflow-auto h-3/5">
        <div
          v-for="(mask, index) in masks"
          style="
            border-left-color: rgb(222, 222, 222);
            border-left-style: solid;
            border-right-color: rgb(222, 222, 222);
            border-right-style: solid;
            border-top-color: rgb(222, 222, 222);
            border-top-style: solid;
            border-bottom-color: rgb(222, 222, 222);
            border-bottom-style: solid;
          "
          class="border-l border-r flex justify-between p-5 divide-gray-50 border-b"
          :class="{
            'rounded-tl-xl rounded-tr-xl border-t ': index === 0,
            'rounded-bl-xl rounded-br-xl': index === masks.length - 1,
          }"
        >
          <div class="items-center flex">
            <div class="items-center flex justify-center mr-3">
              <div style="border-bottom-color: rgb(222, 222, 222)" class="items-center flex justify-center rounded-xl">
                <Icon icon class="h-10 w-10 overflow-clip" :name="getRandomEmoji(mask.name)" />
              </div>
            </div>
            <div>
              <div class="text-sm font-bold">{{ mask.name }}</div>
              <div class="text-xs text-ellipsis overflow-hidden">{{ mask.desc }}</div>
            </div>
          </div>
          <div class="flex">
            <button
              class="items-center cursor-pointer flex text-[0.83rem] h-9 justify-center text-center w-32 rounded-xl p-3 overflow-hidden"
            >
              <div class="items-center flex justify-center h-4 w-4">
                <SvgIcon icon="add" />
              </div>
              <div class="text-xs ml-1 text-ellipsis overflow-hidden">对话</div>
            </button>
            <button
              class="items-center cursor-pointer flex text-[0.83rem] h-9 justify-center text-center w-32 rounded-xl p-3 overflow-hidden"
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

const masks = [
  {
    name: "以文搜图",
    desc: "包含 4 条预设对话 / 简体中文 / gpt-3.5-turbo",
  },
  {
    name: "文案写手",
    desc: "包含 1 条预设对话 / 简体中文 / gpt-3.5-turbo",
  },
  {
    name: "机器学习",
    desc: "包含 1 条预设对话 / 简体中文 / gpt-3.5-turbo",
  },
  {
    name: "Expert",
    desc: "包含 2 条预设对话 / English / gpt-4",
  },
]
for (let i = 0; i < 20; i++) {
  masks.push({
    name: "Expert",
    desc: "包含 2 条预设对话 / English / gpt-4",
  })
}
</script>
