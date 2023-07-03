<script setup lang="ts">
import { onMounted } from "vue"
import VEmojiAvatar from "~/components/VEmojiAvatar.vue"
import { languageOptions, modelOptions, sendKeyOptions, themeOptions, useSettingStore } from "~/composable/settings"
import { TLocale } from "~/locales/en"
import SettingItem from "~/pages/chat/settings/SettingItem.vue"

const settingStore = useSettingStore()
const settings = settingStore.settings
onMounted(() => {
  settingStore.fetchRemoteLatestCommitDate()
})

const { t, setLocale } = useI18n<{ message: TLocale }>({
  useScope: "global",
})

watch(
  () => settings.language,
  () => {
    setLocale(settings.language)
  }
)
</script>
<template>
  <ClientOnly>
    <div class="flex flex-1 flex-col">
      <div class="flex items-center justify-between border-b border-gray-200 p-3.5">
        <div class="truncate">
          <div class="truncate text-[1.25rem] font-bold">
            {{ t("Settings.Title") }}
          </div>
          <div class="mt-1 text-[0.88rem]">
            {{ t("Settings.SubTitle") }}
          </div>
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
          <SettingItem :title="t('Settings.Avatar')">
            <VEmojiAvatar v-model="settings.avatar" />
          </SettingItem>

          <SettingItem
            :title="t('Settings.Update.Version', { x: settings.latestCommitDate })"
            :subtitle="
              settings.hasNewVersion
                ? t('Settings.Update.FoundUpdate', { x: `${settings.remoteLatestCommitDate}` })
                : ``
            "
          >
            <a
              href="https://github.com/hylarucoder/ChatGPT-Nuxt#keep-updated"
              class="cursor-pointer text-[0.75rem] text-emerald-400"
              >{{ settings.hasNewVersion ? t("Settings.Update.GoToUpdate") : t("Settings.Update.IsLatest") }}</a
            >
          </SettingItem>

          <SettingItem :title="t('Settings.SendKey')">
            <UISelect :options="sendKeyOptions" v-model="settings.sendKey" />
          </SettingItem>

          <SettingItem :title="t('Settings.Theme')">
            <UISelect :options="themeOptions" v-model="settings.theme" />
          </SettingItem>

          <SettingItem :title="t('Settings.Lang.Name')">
            <UISelect :options="languageOptions" v-model="settings.language" />
          </SettingItem>

          <SettingItem :title="t('Settings.FontSize.Title')" :subtitle="t('Settings.FontSize.SubTitle')">
            {{ settings.fontSize }}px
            <UIInputRange :step="1" :max="18" :min="10" v-model="settings.fontSize" class="ml-1 h-5 w-32 text-center" />
          </SettingItem>

          <SettingItem :title="t('Settings.Mask.Title')" :subtitle="t('Settings.Mask.SubTitle')">
            <UICheckbox
              v-model="settings.maskLaunchPage"
              class="flex h-4 w-4 cursor-pointer items-center justify-center rounded border bg-no-repeat text-center align-middle"
            />
          </SettingItem>
        </div>
        <div class="mb-5 divide-y rounded-xl border shadow-sm">
          <SettingItem :title="t('Settings.Token.Title')" :subtitle="t('Settings.Token.SubTitle')">
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
                :placeholder="t('Settings.Token.Placeholder')"
                class="h-9 w-52 cursor-text rounded-xl border border-neutral-200 px-3 text-center"
              />
            </div>
          </SettingItem>

          <SettingItem
            :title="t('Settings.Usage.Title')"
            :subtitle="t('Settings.Usage.SubTitle', { used: `[?]`, total: `[?]` })"
          >
            <button
              class="hover:bg-gray flex h-10 w-24 cursor-pointer items-center justify-center truncate rounded-xl p-3 text-center"
            >
              <div class="flex items-center justify-center">
                <VSvgIcon icon="reload" />
              </div>
              <div class="ml-1 truncate text-[0.75rem]">{{ t("Settings.Usage.Check") }}</div>
            </button>
          </SettingItem>
        </div>
        <div class="mb-5 divide-y rounded-xl border shadow-sm">
          <SettingItem :title="t('Settings.Prompt.Disable.Title')" :subtitle="t('Settings.Prompt.Disable.SubTitle')">
            <UICheckbox v-model="settings.disableAutoCompletePrompt" />
          </SettingItem>

          <SettingItem
            :title="t('Settings.Prompt.List')"
            :subtitle="t('Settings.Prompt.ListCount', { builtin: 0, custom: 0 })"
          >
            <button
              class="flex h-10 w-32 cursor-pointer items-center justify-center truncate rounded-xl p-3 text-center"
            >
              <div class="flex items-center justify-center">
                <VSvgIcon icon="edit" />
              </div>
              <div class="ml-1 truncate text-[0.75rem]">{{ t("Settings.Prompt.Edit") }}</div>
            </button>
          </SettingItem>
        </div>
        <div class="mb-5 divide-y rounded-xl border shadow-sm">
          <SettingItem :title="t('Settings.Model')">
            <UISelect :options="modelOptions" v-model="settings.model" />
          </SettingItem>

          <SettingItem :title="t('Settings.Temperature.Title')" :subtitle="t('Settings.Temperature.SubTitle')">
            <div class="flex rounded-xl border border-neutral-200 px-3 py-1 pr-3.5 text-[0.75rem]">
              {{ settings.temperature }}
              <UIInputRange :min="0.0" :max="1.0" :step="0.1" class="ml-1" v-model="settings.temperature" />
            </div>
          </SettingItem>

          <SettingItem :title="t('Settings.MaxTokens.Title')" :subtitle="t('Settings.MaxTokens.SubTitle')">
            <UIInputNumber
              class="h-9 w-20 cursor-text rounded-xl border border-neutral-200 px-3 text-center"
              v-model="settings.maxTokens"
            />
          </SettingItem>

          <SettingItem :title="t('Settings.PresencePenalty.Title')" :subtitle="t('Settings.PresencePenalty.SubTitle')">
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

          <SettingItem
            :title="t('Settings.FrequencyPenalty.Title')"
            :subtitle="t('Settings.FrequencyPenalty.SubTitle')"
          >
            <div class="flex rounded-xl border border-neutral-200 px-3 py-1 pr-3.5 text-[0.75rem]">
              {{ settings.frequencyPenalty }}
              <UIInputRange
                :min="-2.0"
                :max="2.0"
                :step="0.1"
                v-model="settings.frequencyPenalty"
                class="ml-1 h-5 w-32 text-center"
              />
            </div>
          </SettingItem>

          <SettingItem :title="t('Settings.HistoryCount.Title')" :subtitle="t('Settings.HistoryCount.SubTitle')">
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

          <SettingItem
            :title="t('Settings.CompressThreshold.Title')"
            :subtitle="t('Settings.CompressThreshold.SubTitle')"
          >
            <UIInputNumber
              class="h-9 w-20 cursor-text rounded-xl border border-neutral-200 px-3 text-center"
              v-model="settings.historyMessagesThreshold"
            />
          </SettingItem>

          <SettingItem :title="t('Memory.Title')" :subtitle="t('Memory.Send')">
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
