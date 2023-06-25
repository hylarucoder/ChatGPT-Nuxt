<template>
  <div class="flex flex-row-reverse">
    <div class="items-end text-zinc-800 flex flex-col">
      <div class="mt-5">
        <div class="items-center flex justify-center border-neutral-200 rounded-xl border">
          <img
            src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f603.png"
            class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
          />
        </div>
      </div>
      <div
        style="user-select: text; word-break: break-word"
        class="bg-cyan-50 text-[0.88rem] mt-3 p-3 border-neutral-200 rounded-xl border"
      >
        <div class="text-zinc-800 break-words"><p>你猜猜</p></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChatMessageReceiver",
}
</script>
