<template>
  <div class="flex flex-col w-full">
    <div class="items-center flex justify-between p-3.5 border-gray-200 border-y">
      <div class="truncate">
        <div class="text-[1.25rem] font-bold truncate">设置</div>
        <div class="text-[0.88rem] mt-1">设置选项</div>
      </div>
      <div class="flex">
        <div class="ml-3">
          <button
            class="items-center cursor-pointer flex h-10 justify-center text-center w-10 p-3 border-neutral-200 rounded-xl border truncate"
          >
            <div class="items-center flex justify-center">
              <SvgIcon icon="clear" />
            </div>
          </button>
        </div>
        <div class="ml-3">
          <button
            class="items-center cursor-pointer flex h-10 justify-center text-center w-10 p-3 border-neutral-200 rounded-xl border truncate"
          >
            <div class="items-center flex justify-center">
              <SvgIcon icon="reload" />
            </div>
          </button>
        </div>
        <div class="ml-3">
          <button
            class="items-center cursor-pointer flex h-10 justify-center text-center w-10 p-3 border-neutral-200 rounded-xl border truncate"
          >
            <div class="items-center flex justify-center">
              <SvgIcon icon="close" />
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="p-5 overflow-scroll">
      <div class="mb-5 rounded-xl border divide-y">
        <SettingItem title="UID">
          <div class="cursor-pointer"><p>#1</p></div>
        </SettingItem>

        <SettingItem title="头像">
          <div class="z-[2]">
            <div class="cursor-pointer">
              <div class="items-center flex justify-center border-neutral-200 rounded-xl border">
                <img
                  src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f603.png"
                  class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
                />
              </div>
            </div>
          </div>
        </SettingItem>

        <SettingItem title="当前版本：20230607" subtitle="发现新版本：19700101">
          <a
            href="https://github.com/hylarucoder/Best Prompts Hub#keep-updated"
            class="text-emerald-400 cursor-pointer text-[0.75rem]"
            >前往更新</a
          >
        </SettingItem>

        <SettingItem title="发送键">
          <div class="relative">
            <select
              class="items-center cursor-pointer inline-block h-8 pl-3 pr-6 text-center w-28 border-neutral-200 rounded-xl border"
            >
              <option value="Enter" class="px-1">Enter</option>
              <option value="Ctrl + Enter" class="px-1">Ctrl + Enter</option>
              <option value="Shift + Enter" class="px-1">Shift + Enter</option>
              <option value="Alt + Enter" class="px-1">Alt + Enter</option>
              <option value="Meta + Enter" class="px-1">Meta + Enter</option>
            </select>
          </div>
        </SettingItem>

        <SettingItem title="主题">
          <div class="relative">
            <select
              class="items-center cursor-pointer inline-block h-8 pl-3 pr-6 text-center w-28 border-neutral-200 rounded-xl border"
            >
              <option value="auto" class="px-1">auto</option>
              <option value="dark" class="px-1">dark</option>
              <option value="light" class="px-1">light</option>
            </select>
          </div>
        </SettingItem>

        <SettingItem title="Language">
          <div class="relative">
            <select
              class="items-center cursor-pointer inline-block h-8 pl-3 pr-6 text-center w-28 border-neutral-200 rounded-xl border"
            >
              <option value="en" class="px-1">English</option>
              <option value="cn" class="px-1">简体中文</option>
              <option value="tw" class="px-1">繁體中文</option>
              <option value="fr" class="px-1">Français</option>
              <option value="es" class="px-1">Español</option>
              <option value="it" class="px-1">Italiano</option>
              <option value="tr" class="px-1">Türkçe</option>
              <option value="jp" class="px-1">日本語</option>
              <option value="de" class="px-1">Deutsch</option>
              <option value="vi" class="px-1">Tiếng Việt</option>
              <option value="ru" class="px-1">Русский</option>
              <option value="cs" class="px-1">Čeština</option>
              <option value="ko" class="px-1">한국어</option>
            </select>
          </div>
        </SettingItem>

        <SettingItem title="字体大小" subtitle="聊天内容的字体大小">
          14px
          <input value="14" type="range" class="h-5 text-center w-32 ml-1" />
        </SettingItem>

        <SettingItem title="预览气泡" subtitle="在预览气泡中预览 Markdown 内容">
          <input
            type="checkbox"
            class="items-center bg-zinc-800 bg-no-repeat cursor-pointer flex h-4 justify-center text-center align-middle w-4 rounded border"
          />
        </SettingItem>

        <SettingItem title="面具启动页" subtitle="新建聊天时，展示面具启动页">
          <input
            type="checkbox"
            class="items-center bg-zinc-800 bg-no-repeat cursor-pointer flex h-4 justify-center text-center align-middle w-4 rounded border"
          />
        </SettingItem>
      </div>
      <div class="mb-5 rounded-xl border divide-y">
        <SettingItem title="API Key" subtitle="使用自己的 Key 可绕过密码访问限制">
          <div class="flex justify-end">
            <button
              class="items-center cursor-pointer flex h-9 justify-center mr-1 text-center w-9 p-3 rounded-xl truncate"
            >
              <div class="items-center flex justify-center">
                <SvgIcon icon="eye-off" class="w-4 h-4" />
              </div>
            </button>
            <input
              value=""
              type="password"
              placeholder="OpenAI API Key"
              class="cursor-text h-9 px-3 text-center w-52 border-neutral-200 rounded-xl border"
            />
          </div>
        </SettingItem>

        <SettingItem title="余额查询" subtitle="本月已使用 $[?]，订阅总额 $[?]">
          <button class="items-center cursor-pointer flex h-10 justify-center text-center w-24 p-3 rounded-xl truncate">
            <div class="items-center flex justify-center">
              <SvgIcon icon="reload" />
            </div>
            <div class="text-[0.75rem] ml-1 truncate">重新检查</div>
          </button>
        </SettingItem>
      </div>
      <div class="mb-5 rounded-xl border divide-y">
        <SettingItem title="禁用提示词自动补全" subtitle="在输入框开头输入 / 即可触发自动补全">
          <input
            type="checkbox"
            class="items-center cursor-pointer flex h-4 justify-center text-center align-middle w-4 border-neutral-200 rounded border"
          />
        </SettingItem>

        <SettingItem title="自定义提示词列表" subtitle="内置 0 条，用户定义 0 条">
          <button class="items-center cursor-pointer flex h-10 justify-center text-center w-32 p-3 rounded-xl truncate">
            <div class="items-center flex justify-center">
              <SvgIcon icon="edit" />
            </div>
            <div class="text-[0.75rem] ml-1 truncate">编辑</div>
          </button>
        </SettingItem>
      </div>
      <div class="mb-5 rounded-xl border divide-y">
        <SettingItem title="模型 (model)">
          <div class="relative">
            <select
              class="items-center cursor-pointer inline-block h-8 pl-3 pr-6 text-center w-32 border-neutral-200 rounded-xl border"
            >
              <option value="gpt-4" class="px-1">gpt-4</option>
              <option value="gpt-4-0314" class="px-1">gpt-4-0314</option>
              <option value="gpt-4-32k" class="px-1">gpt-4-32k</option>
              <option value="gpt-4-32k-0314" class="px-1">gpt-4-32k-0314</option>
              <option value="gpt-4-mobile" class="px-1">gpt-4-mobile</option>
              <option value="text-davinci-002-render-sha-mobile" class="px-1">
                text-davinci-002-render-sha-mobile
              </option>
              <option value="gpt-3.5-turbo" class="px-1">gpt-3.5-turbo</option>
              <option value="gpt-3.5-turbo-0301" class="px-1">gpt-3.5-turbo-0301</option>
              <option value="qwen-v1" class="text-zinc-500 px-1">qwen-v1</option>
              <option value="ernie" class="text-zinc-500 px-1">ernie</option>
              <option value="spark" class="text-zinc-500 px-1">spark</option>
              <option value="llama" class="text-zinc-500 px-1">llama</option>
              <option value="chatglm" class="text-zinc-500 px-1">chatglm</option>
            </select>
          </div>
        </SettingItem>

        <SettingItem title="随机性 (temperature)" subtitle="值越大，回复越随机">
          <div class="flex text-[0.75rem] py-1 px-3 pr-3.5 border-neutral-200 rounded-xl border">
            0.5<input value="0.5" type="range" class="h-5 text-center w-32 ml-1" />
          </div>
        </SettingItem>

        <SettingItem title="单次回复限制 (max_tokens)" subtitle="单次交互所用的最大 Token 数">
          <input
            value="2000"
            type="number"
            class="cursor-text h-9 px-3 text-center w-20 border-neutral-200 rounded-xl border"
          />
        </SettingItem>

        <SettingItem title="话题新鲜度 (presence_penalty)" subtitle="值越大，越有可能扩展到新话题">
          <div class="flex text-[0.75rem] py-1 px-3 pr-3.5 border-neutral-200 rounded-xl border">
            0.0<input value="0.0" type="range" class="h-5 text-center w-32 ml-1" />
          </div>
        </SettingItem>

        <SettingItem title="附带历史消息数" subtitle="每次请求携带的历史消息数">
          <div class="flex text-[0.75rem] py-1 px-3 pr-3.5 border-neutral-200 rounded-xl border">
            4<input value="4" type="range" class="h-5 text-center w-32 ml-1" />
          </div>
        </SettingItem>

        <SettingItem title="历史消息长度压缩阈值" subtitle="当未压缩的历史消息超过该值时，将进行压缩">
          <input
            value="1000"
            type="number"
            class="cursor-text h-9 px-3 text-center w-20 border-neutral-200 rounded-xl border"
          />
        </SettingItem>

        <SettingItem title="历史摘要" subtitle="自动压缩聊天记录并作为上下文发送">
          <input
            type="checkbox"
            class="items-center bg-zinc-800 bg-no-repeat cursor-pointer flex h-4 justify-center text-center align-middle w-4 rounded border"
          />
        </SettingItem>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SettingItem from "~/pages/chat/SettingItem.vue"
</script>
