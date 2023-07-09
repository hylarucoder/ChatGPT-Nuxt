import { defineComponent, onMounted, ref, watch } from "vue"
import {
  ClientOnly,
  HeadIconButton,
  NuxtLink,
  UCheckbox,
  UInput,
  URange,
  USelect,
  VDetailHeader,
  VEmojiAvatar,
} from "#components"
import { useTrans } from "~/composable/locales"
import { languageOptions, modelOptions, sendKeyOptions, themeOptions, useSettingStore } from "~/composable/settings"

const SettingItem = defineComponent({
  props: {
    title: String,
    subtitle: String,
  },
  setup(props: { title: string; subtitle?: string }, { slots }) {
    console.log(props)
    return () => (
      <div class="flex items-center justify-between border-gray-200 py-3 pl-5 pr-2">
        <div class="flex items-center">
          <div class="text-[0.88rem]">
            <div class="font-bold">{props.title}</div>
            {props.subtitle && <div class="hidden text-xs sm:block">{props.subtitle}</div>}
          </div>
        </div>
        <div class="flex rounded-md border-neutral-200 px-3 py-1 pr-3.5 text-[0.75rem]">{slots?.default?.()}</div>
      </div>
    )
  },
})

export default defineComponent({
  setup() {
    const router = useRouter()
    // const colorMode = useColorMode()

    const settingStore = useSettingStore()
    const settings = settingStore.settings
    onMounted(() => {
      settingStore.fetchRemoteLatestCommitDate()
    })

    const { t, setLocale } = useTrans()

    const apiKeyShow = ref(false)
    const usageReloading = ref(false)
    const checkUsage = () => {
      if (usageReloading.value) {
        return
      }
      usageReloading.value = true
      setTimeout(() => {
        usageReloading.value = false
      }, 1000)
    }

    watch(
      () => settings.language,
      () => {
        setLocale(settings.language)
      },
    )

    return () => (
      <ClientOnly>
        <div class="flex w-screen flex-1 flex-col">
          <VDetailHeader>
            {{
              default: () => (
                <div class="max-w-1/2 truncate text-center">
                  <div class="max-w-1/2 cursor-pointer truncate text-sm font-bold sm:text-lg">
                    {t("Settings.Title")}
                  </div>
                  <div class="text-xs sm:text-sm">{t("Settings.SubTitle")}</div>
                </div>
              ),
              rightIcons: () => (
                <div class="flex w-[150px] justify-end space-x-2">
                  <HeadIconButton icon="i-mdi-bin-outline" size="1.3em" />
                  <HeadIconButton icon="i-mdi-reload" size="1.3em" />
                  <HeadIconButton icon="i-mdi-close" size="1.3em" onClick={() => router.back()} />
                </div>
              ),
            }}
          </VDetailHeader>
          <div class="w-full overflow-x-hidden overflow-y-scroll px-2 pt-5 sm:p-5">
            <div class="mb-5 divide-y rounded-md border shadow-sm dark:divide-gray-600 dark:border-gray-600">
              <SettingItem title={t("Settings.Avatar")}>
                <VEmojiAvatar v-model={settings.avatar} />
              </SettingItem>

              <SettingItem
                title={t("Settings.Update.Version", { x: settings.latestCommitDate })}
                subtitle={
                  settings.hasNewVersion
                    ? t("Settings.Update.FoundUpdate", { x: `${settings.remoteLatestCommitDate}` })
                    : ""
                }
              >
                <NuxtLink
                  target="_blank"
                  href="https://github.com/hylarucoder/ChatGPT-Nuxt#keep-updated"
                  class="cursor-pointer text-[0.75rem] text-emerald-400"
                >
                  {settings.hasNewVersion ? t("Settings.Update.GoToUpdate") : t("Settings.Update.IsLatest")}
                </NuxtLink>
              </SettingItem>

              <SettingItem title={t("Settings.SendKey")}>
                <USelect v-model={settings.sendKey} class="min-w-100" options={sendKeyOptions} />
              </SettingItem>

              <SettingItem title={t("Settings.Theme")}>
                <USelect v-model={settings.theme} options={themeOptions} />
              </SettingItem>

              <SettingItem title={t("Settings.Lang.Name")}>
                <USelect v-model={settings.language} options={languageOptions} />
              </SettingItem>
              <SettingItem title={t("Settings.FontSize.Title")} subtitle={t("Settings.FontSize.SubTitle")}>
                <div class="flex w-40 items-center justify-center">
                  <span class="mr-2 w-6"> {settings.fontSize}px </span>
                  <URange v-model={settings.fontSize} step={1} max={18} min={10} />
                </div>
              </SettingItem>

              <SettingItem title={t("Settings.Mask.Title")} subtitle={t("Settings.Mask.SubTitle")}>
                <UCheckbox v-model={settings.maskLaunchPage} />
              </SettingItem>
            </div>
            <div class="mb-5 divide-y rounded-md border shadow-sm dark:divide-gray-600 dark:border-gray-600">
              <SettingItem title={t("Settings.Endpoint.Title")} subtitle={t("Settings.Endpoint.SubTitle")}>
                <div class="flex justify-end">
                  <UInput v-model={settings.serverUrl} />
                </div>
              </SettingItem>
              <SettingItem title={t("Settings.Token.Title")} subtitle={t("Settings.Token.SubTitle")}>
                <div class="flex justify-end">
                  <button
                    class="mr-1 flex h-9 w-9 cursor-pointer items-center justify-center truncate rounded-md p-3 text-center hover:bg-gray-200"
                    onClick={() => (apiKeyShow.value = !apiKeyShow.value)}
                  >
                    <div class="flex items-center justify-center">
                      {apiKeyShow.value
                        ? (
                        <span class="i-mdi-eye-outline h-4 w-4" />
                          )
                        : (
                        <span class="i-mdi-eye-off-outline h-4 w-5" />
                          )}
                    </div>
                  </button>
                  <UInput
                    v-model={settings.apiKey}
                    type={!apiKeyShow.value ? "password" : "text"}
                    placeholder={t("Settings.Token.Placeholder")}
                  />
                </div>
              </SettingItem>

              <SettingItem
                title={t("Settings.Usage.Title")}
                subtitle={t("Settings.Usage.SubTitle", {
                  used: "[?]",
                  total: "[?]",
                })}
              >
                <button
                  class="flex h-10 w-24 cursor-pointer items-center justify-center truncate rounded-md p-3 text-center hover:bg-gray-200"
                  onClick={checkUsage}
                >
                  <div
                    class={{
                      "animate-spin": usageReloading,
                      "flex items-center justify-center": true,
                    }}
                  >
                    <span class="i-mdi-reload h-4 w-4" />
                  </div>
                  <div class="ml-1 truncate text-[0.75rem]">{t("Settings.Usage.Check")}</div>
                </button>
              </SettingItem>
            </div>
            <div class="mb-5 divide-y rounded-md border shadow-sm dark:divide-gray-600 dark:border-gray-600">
              <SettingItem title={t("Settings.Model")}>
                <USelect v-model={settings.model} options={modelOptions} />
              </SettingItem>

              <SettingItem title={t("Settings.Temperature.Title")} subtitle={t("Settings.Temperature.SubTitle")}>
                <div class="flex w-40 items-center justify-center">
                  <span class="mr-2">{settings.temperature}</span>
                  <URange v-model={settings.temperature} min={0.0} max={1.0} step={0.1} />
                </div>
              </SettingItem>

              <SettingItem title={t("Settings.MaxTokens.Title")} subtitle={t("Settings.MaxTokens.SubTitle")}>
                <div class="w-20">
                  <UInput v-model={settings.maxTokens} type="number" />
                </div>
              </SettingItem>

              <SettingItem
                title={t("Settings.PresencePenalty.Title")}
                subtitle={t("Settings.PresencePenalty.SubTitle")}
              >
                <div class="flex w-40 items-center justify-center">
                  <span class="mr-2">{settings.presencePenalty}</span>
                  <URange v-model={settings.presencePenalty} min={-2.0} max={2.0} step={0.1} />
                </div>
              </SettingItem>

              <SettingItem
                title={t("Settings.FrequencyPenalty.Title")}
                subtitle={t("Settings.FrequencyPenalty.SubTitle")}
              >
                <div class="flex w-40 items-center justify-center">
                  <span class="mr-2">{settings.frequencyPenalty}</span>
                  <URange v-model={settings.frequencyPenalty} min={-2.0} max={2.0} step={0.1} />
                </div>
              </SettingItem>

              <SettingItem title={t("Settings.HistoryCount.Title")} subtitle={t("Settings.HistoryCount.SubTitle")}>
                <div class="flex w-40 items-center justify-center">
                  <span class="mr-2">{settings.historyMessagesCount}</span>
                  <URange v-model={settings.historyMessagesCount} min={0} max={32} step={1} />
                </div>
              </SettingItem>

              <SettingItem
                title={t("Settings.CompressThreshold.Title")}
                subtitle={t("Settings.CompressThreshold.SubTitle")}
              >
                <div class="w-20">
                  <UInput v-model={settings.compressMessageLengthThreshold} type="number" />
                </div>
              </SettingItem>

              <SettingItem title={t("Memory.Title")} subtitle={t("Memory.Send")}>
                <UCheckbox v-model={settings.historySummary} />
              </SettingItem>
            </div>
          </div>
        </div>
      </ClientOnly>
    )
  },
})
