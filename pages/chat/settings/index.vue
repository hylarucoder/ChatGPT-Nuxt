<script setup lang="ts">
import { onMounted } from "vue"
import VEmojiAvatar from "~/components/VEmojiAvatar.vue"
import { languageOptions, modelOptions, sendKeyOptions, themeOptions, useSettingStore } from "~/composable/settings"
import SettingItem from "~/pages/chat/settings/SettingItem.vue"

const settingStore = useSettingStore()
const settings = settingStore.settings
onMounted(() => {
  settingStore.fetchRemoteLatestCommitDate()
})
</script>
<template>
  <ClientOnly>
    <div class="flex flex-1 flex-col">
      <div class="flex items-center justify-between border-y border-gray-200 p-3.5">
        <div class="truncate">
          <div class="truncate text-[1.25rem] font-bold">设置</div>
          <div class="mt-1 text-[0.88rem]">设置选项</div>
        </div>
        <div class="flex">
          <div class="ml-3">
            <button
              class="flex h-10 w-10 cursor-pointer items-center justify-center truncate rounded-xl border border-neutral-200 p-3 text-center"
            >
              <div class="flex items-center justify-center">
                <VSvgIcon icon="clear" />
              </div>
            </button>
          </div>
          <div class="ml-3">
            <button
              class="flex h-10 w-10 cursor-pointer items-center justify-center truncate rounded-xl border border-neutral-200 p-3 text-center"
            >
              <div class="flex items-center justify-center">
                <VSvgIcon icon="reload" />
              </div>
            </button>
          </div>
          <div class="ml-3">
            <button
              class="flex h-10 w-10 cursor-pointer items-center justify-center truncate rounded-xl border border-neutral-200 p-3 text-center"
            >
              <div class="flex items-center justify-center">
                <VSvgIcon icon="close" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div class="overflow-scroll p-5">
        <div class="mb-5 divide-y rounded-xl border shadow-sm">
          <SettingItem title="头像">
            <VEmojiAvatar v-model="settings.avatar" />
          </SettingItem>

          <SettingItem
            :title="`当前版本：${settings.latestCommitDate}`"
            :subtitle="settings.hasNewVersion ? `发现新版本：${settings.remoteLatestCommitDate}` : ``"
          >
            <a
              href="https://github.com/hylarucoder/ChatGPT-Nuxt#keep-updated"
              class="cursor-pointer text-[0.75rem] text-emerald-400"
              >{{ settings.hasNewVersion ? "前往更新" : "无需更新" }}</a
            >
          </SettingItem>

          <SettingItem title="发送键">
            <UISelect :options="sendKeyOptions" v-model="settings.sendKey" />
          </SettingItem>

          <SettingItem title="主题">
            <UISelect :options="themeOptions" v-model="settings.theme" />
          </SettingItem>

          <SettingItem title="Language">
            <UISelect :options="languageOptions" v-model="settings.language" />
          </SettingItem>

          <SettingItem title="字体大小" subtitle="聊天内容的字体大小">
            {{ settings.fontSize }}px
            <UIInputRange :step="1" :max="18" :min="10" v-model="settings.fontSize" class="ml-1 h-5 w-32 text-center" />
          </SettingItem>

          <SettingItem title="面具启动页" subtitle="新建聊天时，展示面具启动页">
            <UICheckbox
              v-model="settings.maskLaunchPage"
              class="flex h-4 w-4 cursor-pointer items-center justify-center rounded border bg-no-repeat text-center align-middle"
            />
          </SettingItem>
        </div>
        <div class="mb-5 divide-y rounded-xl border shadow-sm">
          <SettingItem title="API Key" subtitle="使用自己的 Key 可绕过密码访问限制">
            <div class="flex justify-end">
              <button
                class="mr-1 flex h-9 w-9 cursor-pointer items-center justify-center truncate rounded-xl p-3 text-center"
              >
                <div class="flex items-center justify-center">
                  <VSvgIcon icon="eye-off" class="h-4 w-4" />
                </div>
              </button>
              <input
                v-model="settings.apiKey"
                type="password"
                placeholder="OpenAI API Key"
                class="h-9 w-52 cursor-text rounded-xl border border-neutral-200 px-3 text-center"
              />
            </div>
          </SettingItem>

          <SettingItem title="余额查询" subtitle="本月已使用 $[?]，订阅总额 $[?]">
            <button
              class="hover:bg-gray flex h-10 w-24 cursor-pointer items-center justify-center truncate rounded-xl p-3 text-center"
            >
              <div class="flex items-center justify-center">
                <VSvgIcon icon="reload" />
              </div>
              <div class="ml-1 truncate text-[0.75rem]">重新检查</div>
            </button>
          </SettingItem>
        </div>
        <div class="mb-5 divide-y rounded-xl border shadow-sm">
          <SettingItem title="禁用提示词自动补全" subtitle="在输入框开头输入 / 即可触发自动补全">
            <UICheckbox v-model="settings.disableAutoCompletePrompt" />
          </SettingItem>

          <SettingItem title="自定义提示词列表" subtitle="内置 0 条，用户定义 0 条">
            <button
              class="flex h-10 w-32 cursor-pointer items-center justify-center truncate rounded-xl p-3 text-center"
            >
              <div class="flex items-center justify-center">
                <VSvgIcon icon="edit" />
              </div>
              <div class="ml-1 truncate text-[0.75rem]">编辑</div>
            </button>
          </SettingItem>
        </div>
        <div class="mb-5 divide-y rounded-xl border shadow-sm">
          <SettingItem title="模型 (model)">
            <UISelect :options="modelOptions" v-model="settings.model" />
          </SettingItem>

          <SettingItem title="随机性 (temperature)" subtitle="值越大，回复越随机">
            <div class="flex rounded-xl border border-neutral-200 px-3 py-1 pr-3.5 text-[0.75rem]">
              {{ settings.temperature }}
              <UIInputRange :min="0.0" :max="1.0" :step="0.1" class="ml-1" v-model="settings.temperature" />
            </div>
          </SettingItem>

          <SettingItem title="单次回复限制 (max_tokens)" subtitle="单次交互所用的最大 Token 数">
            <UIInputNumber
              class="h-9 w-20 cursor-text rounded-xl border border-neutral-200 px-3 text-center"
              v-model="settings.maxTokens"
            />
          </SettingItem>

          <SettingItem title="话题新鲜度 (presence_penalty)" subtitle="值越大，越有可能扩展到新话题">
            <div class="flex rounded-xl border border-neutral-200 px-3 py-1 pr-3.5 text-[0.75rem]">
              {{ settings.presencePenalty }}
              <UIInputRange
                :min="-2.0"
                :max="2.0"
                :step="0.1"
                v-model="settings.presencePenalty"
                class="ml-1 h-5 w-32 text-center"
              />
            </div>
          </SettingItem>

          <SettingItem title="附带历史消息数" subtitle="每次请求携带的历史消息数">
            <div class="flex rounded-xl border border-neutral-200 px-3 py-1 pr-3.5 text-[0.75rem]">
              {{ settings.historyMessagesCount }}
              <UIInputRange
                :min="0"
                :max="32"
                :step="1"
                class="ml-1 h-5 w-32 text-center"
                v-model="settings.historyMessagesCount"
              />
            </div>
          </SettingItem>

          <SettingItem title="历史消息长度压缩阈值" subtitle="当未压缩的历史消息超过该值时，将进行压缩">
            <UIInputNumber
              class="h-9 w-20 cursor-text rounded-xl border border-neutral-200 px-3 text-center"
              v-model="settings.historyMessagesThreshold"
            />
          </SettingItem>

          <SettingItem title="历史摘要" subtitle="自动压缩聊天记录并作为上下文发送">
            <UICheckbox
              v-model="settings.historySummary"
              class="flex h-4 w-4 cursor-pointer items-center justify-center rounded border bg-no-repeat text-center align-middle"
            />
          </SettingItem>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
