<template>
  <div class="text-zinc-800 flex">
    <div class="items-start flex flex-col">
      <div class="mt-5">
        <div class="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="30"
            height="30"
            fill="none"
            class="items-center flex h-8 justify-center align-middle w-8 border-neutral-200 rounded-xl border truncate"
          >
            <defs>
              <path id="bot_svg__a" d="M0 0h30v30H0z"></path>
              <path id="bot_svg__c" d="M0 0h20.455v20.455H0z"></path>
            </defs>
            <g>
              <rect fill="#E7F8FF" width="30" height="30" rx="10"></rect>
              <mask id="bot_svg__b" fill="#fff">
                <use xlink:href="#bot_svg__a"></use>
              </mask>
              <g>
                <g>
                  <mask id="bot_svg__d" fill="#fff">
                    <use xlink:href="#bot_svg__c"></use>
                  </mask>
                  <g>
                    <path
                      fill-rule="evenodd"
                      d="M19.11 8.37c.17-.52.26-1.06.26-1.61 0-.9-.24-1.79-.71-2.57a5.24 5.24 0 0 0-4.53-2.59c-.37 0-.73.04-1.09.11A5.201 5.201 0 0 0 9.17 0h-.04C6.86 0 4.86 1.44 4.16 3.57A5.11 5.11 0 0 0 .71 6.04C.24 6.83 0 7.72 0 8.63c0 1.27.48 2.51 1.35 3.45-.18.52-.27 1.07-.27 1.61 0 .91.25 1.8.71 2.58 1.13 1.94 3.41 2.94 5.63 2.47a5.18 5.18 0 0 0 3.86 1.71h.05c2.26 0 4.27-1.44 4.97-3.57a5.132 5.132 0 0 0 3.45-2.47c.46-.78.7-1.67.7-2.58 0-1.28-.48-2.51-1.34-3.46ZM8.947 18.158c-.04.03-.08.05-.12.07.7.58 1.57.89 2.48.89h.01c2.14 0 3.88-1.72 3.88-3.83v-4.76c0-.02-.02-.04-.04-.05l-1.74-.99v5.75c0 .23-.13.45-.34.57l-4.13 2.35Zm-.67-1.153 4.17-2.38c.02-.01.03-.03.03-.05v-1.99l-5.04 2.87c-.21.12-.47.12-.68 0l-4.13-2.35c-.04-.02-.09-.06-.12-.07-.04.21-.06.43-.06.65 0 .67.18 1.33.52 1.92v-.01c.7 1.19 1.98 1.92 3.37 1.92.68 0 1.35-.18 1.94-.51ZM3.903 5.168v-.14c-.85.31-1.57.9-2.02 1.68a3.78 3.78 0 0 0-.52 1.91c0 1.37.74 2.64 1.94 3.33l4.17 2.37c.02.01.04.01.06 0l1.75-1-5.04-2.87a.64.64 0 0 1-.34-.57v-4.71Zm13.253 3.337-4.18-2.38c-.02 0-.04 0-.06.01l-1.74.99 5.04 2.87c.21.12.34.34.34.58v4.85c1.52-.56 2.54-1.99 2.54-3.6 0-1.37-.74-2.63-1.94-3.32ZM8.014 5.83c-.02.01-.03.03-.03.05v1.99L13.024 5a.692.692 0 0 1 .68 0l4.13 2.35c.04.02.08.05.12.07.03-.21.05-.43.05-.65 0-2.11-1.74-3.83-3.88-3.83-.68 0-1.35.18-1.94.51l-4.17 2.38Zm1.133-4.492c-2.15 0-3.89 1.72-3.89 3.83v4.76c0 .02.02.03.03.04l1.75 1v-5.75c0-.23.13-.45.34-.57l4.13-2.35c.04-.03.09-.06.12-.07-.7-.58-1.58-.89-2.48-.89ZM7.983 11.51l2.24 1.27 2.25-1.27V8.95l-2.25-1.28-2.24 1.28v2.56Z"
                      style="fill: rgb(31, 148, 140)"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div
        style="user-select: text; word-break: break-word"
        class="bg-black text-[0.88rem] h-9 mt-3 w-12 p-3 border-neutral-200 rounded-xl border"
      >
        <div class="text-zinc-800 break-words">
          <SvgIcon icon="three-dots" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Avatar from "~/components/Avatar.vue"

export default {
  name: "ChatMessageSend",
  components: { Avatar },
}
</script>
