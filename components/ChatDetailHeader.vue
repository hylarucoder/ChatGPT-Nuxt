<template>
  <div class="items-center flex justify-between py-3.5 px-5 relative border-gray-200 border">
    <div class="truncate">
      <div class="cursor-pointer text-[1.25rem] font-bold truncate">新的聊天</div>
      <div class="text-[0.88rem] mt-1">与 ChatGPT 的 30 条对话</div>
    </div>
    <div class="flex w-[150px]">
      <div class="ml-3">
        <button
          class="items-center cursor-pointer flex h-10 justify-center text-center w-10 p-3 border-neutral-200 rounded-xl border truncate"
        >
          <div class="items-center flex justify-center">
            <SvgIcon icon="rename" />
          </div>
        </button>
      </div>
      <div class="ml-3">
        <button
          class="items-center cursor-pointer flex h-10 justify-center text-center w-10 p-3 border-neutral-200 rounded-xl border truncate"
        >
          <div class="items-center flex justify-center">
            <SvgIcon icon="share" />
          </div>
        </button>
      </div>
      <div class="ml-3">
        <button
          class="items-center cursor-pointer flex h-10 justify-center text-center w-10 p-3 border-neutral-200 rounded-xl border truncate"
        >
          <div class="items-center flex justify-center">
            <SvgIcon icon="max" />
          </div>
        </button>
      </div>
    </div>
    <div class="bottom-[-3.13rem] flex justify-center left-[1.25rem] absolute right-[1.25rem] top-[5.88rem] z-[999]">
      <div
        class="items-center cursor-pointer flex text-[0.75rem] justify-center py-3 border-neutral-200 rounded-full border"
      >
        <SvgIcon icon="brain" />
        <span class="ml-3">包含 0 条预设提示词</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChatDetailHeader",
}
</script>
