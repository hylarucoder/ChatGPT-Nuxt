<script lang="ts">
import { defineComponent } from "vue"
import iconAdd from "@/icons/add.svg?component"
import iconAuto from "@/icons/auto.svg?component"
import iconBlackBot from "@/icons/black-bot.svg?component"
import iconBot from "@/icons/bot.svg?component"
import iconBottom from "@/icons/bottom.svg?component"
import iconBrain from "@/icons/brain.svg?component"
import iconBreak from "@/icons/break.svg?component"
import iconChat from "@/icons/chat.svg?component"
import iconChatSettings from "@/icons/chat-settings.svg?component"
import iconChatGpt from "@/icons/chatgpt.svg?component"
import iconClear from "@/icons/clear.svg?component"
import iconClose from "@/icons/close.svg?component"
import iconCopy from "@/icons/copy.svg?component"
import iconDark from "@/icons/dark.svg?component"
import iconDelete from "@/icons/delete.svg?component"
import iconDown from "@/icons/down.svg?component"
import iconDownload from "@/icons/download.svg?component"
import iconEdit from "@/icons/edit.svg?component"
import iconExport from "@/icons/export.svg?component"
import iconEye from "@/icons/eye.svg?component"
import iconEyeOff from "@/icons/eye-off.svg?component"
import iconGithub from "@/icons/github.svg?component"
import iconLeft from "@/icons/left.svg?component"
import iconLight from "@/icons/light.svg?component"
import iconLightning from "@/icons/lightning.svg?component"
import iconMask from "@/icons/mask.svg?component"
import iconMax from "@/icons/max.svg?component"
import iconMenu from "@/icons/menu.svg?component"
import iconMin from "@/icons/min.svg?component"
import iconPause from "@/icons/pause.svg?component"
import iconPlugin from "@/icons/plugin.svg?component"
import iconPrompt from "@/icons/prompt.svg?component"
import iconReload from "@/icons/reload.svg?component"
import iconRename from "@/icons/rename.svg?component"
import iconReturn from "@/icons/return.svg?component"
import iconRobot from "@/icons/robot.svg?component"
import iconSendWhite from "@/icons/send-white.svg?component"
import iconSettings from "@/icons/settings.svg?component"
import iconShare from "@/icons/share.svg?component"
import iconThreeDots from "@/icons/three-dots.svg?component"
import iconUpload from "@/icons/upload.svg?component"

const icons = {
  add: iconAdd,
  auto: iconAuto,
  "black-bot": iconBlackBot,
  bot: iconBot,
  bottom: iconBottom,
  brain: iconBrain,
  break: iconBreak,
  chat: iconChat,
  "chat-settings": iconChatSettings,
  chatgpt: iconChatGpt,
  clear: iconClear,
  close: iconClose,
  copy: iconCopy,
  dark: iconDark,
  delete: iconDelete,
  down: iconDown,
  download: iconDownload,
  edit: iconEdit,
  export: iconExport,
  eye: iconEye,
  "eye-off": iconEyeOff,
  github: iconGithub,
  left: iconLeft,
  light: iconLight,
  lightning: iconLightning,
  mask: iconMask,
  max: iconMax,
  menu: iconMenu,
  min: iconMin,
  pause: iconPause,
  plugin: iconPlugin,
  prompt: iconPrompt,
  reload: iconReload,
  rename: iconRename,
  return: iconReturn,
  robot: iconRobot,
  "send-white": iconSendWhite,
  settings: iconSettings,
  share: iconShare,
  "three-dots": iconThreeDots,
  upload: iconUpload,
}

export default defineComponent({
  name: "SvgIcon",
  props: {
    icon: {
      type: String,
      default: "",
      required: true,
    },
  },
  setup(props) {
    const currentComponent = icons[props.icon]

    return {
      currentComponent,
    }
  },
})
</script>
<template>
  <component :is="currentComponent" />
</template>
