<script setup lang="ts">
import { useSettingStore } from "~/composables/settings"
import SettingItem from "~/pages/chat/settings/SettingItem.vue"

const settingStore = useSettingStore()
const settings = settingStore.settings
const settingOptions = settingStore.settingOptions
</script>
<template>
  <ClientOnly>
    <div class="flex flex-col flex-1">
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
                <VSvgIcon icon="clear" />
              </div>
            </button>
          </div>
          <div class="ml-3">
            <button
              class="items-center cursor-pointer flex h-10 justify-center text-center w-10 p-3 border-neutral-200 rounded-xl border truncate"
            >
              <div class="items-center flex justify-center">
                <VSvgIcon icon="reload" />
              </div>
            </button>
          </div>
          <div class="ml-3">
            <button
              class="items-center cursor-pointer flex h-10 justify-center text-center w-10 p-3 border-neutral-200 rounded-xl border truncate"
            >
              <div class="items-center flex justify-center">
                <VSvgIcon icon="close" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div class="p-5 overflow-scroll">
        <div class="mb-5 rounded-xl border divide-y shadow-sm">
          <SettingItem title="头像">
            <UIAvatar v-model="settings.avatar" @click="printVar" />
          </SettingItem>

          <SettingItem title="当前版本：20230607" subtitle="发现新版本：19700101">
            <a
              href="https://github.com/hylarucoder/ChatGPT-Nuxt#keep-updated"
              class="text-emerald-400 cursor-pointer text-[0.75rem]"
              >前往更新</a
            >
          </SettingItem>

          <SettingItem title="发送键">
            <UISelect :options="settingOptions.sendKey" v-model="settings.sendKey" />
          </SettingItem>

          <SettingItem title="主题">
            <UISelect :options="settingOptions.theme" v-model="settings.theme" />
          </SettingItem>

          <SettingItem title="Language">
            <UISelect :options="settingOptions.language" v-model="settings.language" />
          </SettingItem>

          <SettingItem title="字体大小" subtitle="聊天内容的字体大小">
            {{ settings.fontSize }}px
            <UIInputRange :step="1" :max="18" :min="10" v-model="settings.fontSize" class="h-5 text-center w-32 ml-1" />
          </SettingItem>

          <SettingItem title="预览气泡" subtitle="在预览气泡中预览 Markdown 内容">
            <UICheckbox
              v-model="settings.previewBubble"
              class="items-center bg-no-repeat cursor-pointer flex h-4 justify-center text-center align-middle w-4 rounded border"
            />
          </SettingItem>

          <SettingItem title="面具启动页" subtitle="新建聊天时，展示面具启动页">
            <UICheckbox
              v-model="settings.maskLaunchPage"
              class="items-center bg-no-repeat cursor-pointer flex h-4 justify-center text-center align-middle w-4 rounded border"
            />
          </SettingItem>
        </div>
        <div class="mb-5 rounded-xl border divide-y shadow-sm">
          <SettingItem title="API Key" subtitle="使用自己的 Key 可绕过密码访问限制">
            <div class="flex justify-end">
              <button
                class="items-center cursor-pointer flex h-9 justify-center mr-1 text-center w-9 p-3 rounded-xl truncate"
              >
                <div class="items-center flex justify-center">
                  <VSvgIcon icon="eye-off" class="w-4 h-4" />
                </div>
              </button>
              <input
                v-model="settings.apiKey"
                type="password"
                placeholder="OpenAI API Key"
                class="cursor-text h-9 px-3 text-center w-52 border-neutral-200 rounded-xl border"
              />
            </div>
          </SettingItem>

          <SettingItem title="余额查询" subtitle="本月已使用 $[?]，订阅总额 $[?]">
            <button
              class="items-center cursor-pointer hover:bg-gray flex h-10 justify-center text-center w-24 p-3 rounded-xl truncate"
            >
              <div class="items-center flex justify-center">
                <VSvgIcon icon="reload" />
              </div>
              <div class="text-[0.75rem] ml-1 truncate">重新检查</div>
            </button>
          </SettingItem>
        </div>
        <div class="mb-5 rounded-xl border divide-y shadow-sm">
          <SettingItem title="禁用提示词自动补全" subtitle="在输入框开头输入 / 即可触发自动补全">
            <UICheckbox v-model="settings.disableAutoCompletePrompt" />
          </SettingItem>

          <SettingItem title="自定义提示词列表" subtitle="内置 0 条，用户定义 0 条">
            <button
              class="items-center cursor-pointer flex h-10 justify-center text-center w-32 p-3 rounded-xl truncate"
            >
              <div class="items-center flex justify-center">
                <VSvgIcon icon="edit" />
              </div>
              <div class="text-[0.75rem] ml-1 truncate">编辑</div>
            </button>
          </SettingItem>
        </div>
        <div class="mb-5 rounded-xl border divide-y shadow-sm">
          <SettingItem title="模型 (model)">
            <UISelect :options="settingOptions.model" v-model="settings.model" />
          </SettingItem>

          <SettingItem title="随机性 (temperature)" subtitle="值越大，回复越随机">
            <div class="flex text-[0.75rem] py-1 px-3 pr-3.5 border-neutral-200 rounded-xl border">
              {{ settings.temperature }}
              <UIInputRange :min="0.0" :max="1.0" :step="0.1" class="ml-1" v-model="settings.temperature" />
            </div>
          </SettingItem>

          <SettingItem title="单次回复限制 (max_tokens)" subtitle="单次交互所用的最大 Token 数">
            <UIInputNumber
              class="cursor-text h-9 px-3 text-center w-20 border-neutral-200 rounded-xl border"
              v-model="settings.maxTokens"
            />
          </SettingItem>

          <SettingItem title="话题新鲜度 (presence_penalty)" subtitle="值越大，越有可能扩展到新话题">
            <div class="flex text-[0.75rem] py-1 px-3 pr-3.5 border-neutral-200 rounded-xl border">
              {{ settings.presencePenalty }}
              <UIInputRange
                :min="-2.0"
                :max="2.0"
                :step="0.1"
                v-model="settings.presencePenalty"
                class="h-5 text-center w-32 ml-1"
              />
            </div>
          </SettingItem>

          <SettingItem title="附带历史消息数" subtitle="每次请求携带的历史消息数">
            <div class="flex text-[0.75rem] py-1 px-3 pr-3.5 border-neutral-200 rounded-xl border">
              {{ settings.historyMessagesCount }}
              <UIInputRange
                :min="0"
                :max="32"
                :step="1"
                class="h-5 text-center w-32 ml-1"
                v-model="settings.historyMessagesCount"
              />
            </div>
          </SettingItem>

          <SettingItem title="历史消息长度压缩阈值" subtitle="当未压缩的历史消息超过该值时，将进行压缩">
            <UIInputNumber
              class="cursor-text h-9 px-3 text-center w-20 border-neutral-200 rounded-xl border"
              v-model="settings.historyMessagesThreshold"
            />
          </SettingItem>

          <SettingItem title="历史摘要" subtitle="自动压缩聊天记录并作为上下文发送">
            <UICheckbox
              v-model="settings.historySummary"
              class="items-center bg-no-repeat cursor-pointer flex h-4 justify-center text-center align-middle w-4 rounded border"
            />
          </SettingItem>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
