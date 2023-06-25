<template>
  <div class="items-center flex justify-between py-3.5 px-5 relative border-gray-200 border">
    <div class="truncate">
      <div class="cursor-pointer text-[1.25rem] font-bold truncate">新的聊天</div>
      <div class="text-[0.88rem] mt-1">与 ChatGPT 的 30 条对话</div>
    </div>
    <div class="flex">
      <div class="ml-3">
        <button
          class="items-center cursor-pointer flex h-10 justify-center text-center w-10 p-3 border-neutral-200 rounded-xl border truncate"
        >
          <div class="items-center flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="16"
              height="16"
              fill="none"
              class="h-4 align-middle w-4 truncate"
            >
              <defs>
                <path id="rename_svg__a" d="M0 0h16v16H0z"></path>
              </defs>
              <g>
                <mask id="rename_svg__b" fill="#fff">
                  <use xlink:href="#rename_svg__a"></use>
                </mask>
                <g>
                  <path
                    style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                    transform="translate(1.775 1.3)"
                    d="M2.83 13.2 13.2 2.83 10.37 0 0 10.37v2.83h2.83Z"
                  ></path>
                  <path
                    style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                    transform="translate(9.317 4.13)"
                    d="m0 0 2.83 2.83"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </button>
      </div>
      <div class="ml-3">
        <button
          class="items-center cursor-pointer flex h-10 justify-center text-center w-10 p-3 border-neutral-200 rounded-xl border truncate"
        >
          <div class="items-center flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="16"
              height="16"
              fill="none"
              class="h-4 align-middle w-4 truncate"
            >
              <defs>
                <path id="share_svg__a" d="M0 0h16v16H0z"></path>
              </defs>
              <g>
                <mask id="share_svg__b" fill="#fff">
                  <use xlink:href="#share_svg__a"></use>
                </mask>
                <g>
                  <path
                    style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                    d="M6.67 3.67C1.67 3.67 0 7.33 0 13c0 0 2-5 6.67-5v3.67l6-5.67-6-6v3.67Z"
                    transform="translate(2 1.333)"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </button>
      </div>
      <div class="ml-3">
        <button
          class="items-center cursor-pointer flex h-10 justify-center text-center w-10 p-3 border-neutral-200 rounded-xl border truncate"
        >
          <div class="items-center flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="16"
              height="16"
              fill="none"
              class="h-4 align-middle w-4 truncate"
            >
              <defs>
                <path id="max_svg__a" d="M0 0h16v16H0z"></path>
              </defs>
              <g>
                <mask id="max_svg__b" fill="#fff">
                  <use xlink:href="#max_svg__a"></use>
                </mask>
                <g>
                  <path
                    style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                    d="m0 0 3.33 3.3"
                    transform="translate(2 2)"
                  ></path>
                  <path
                    style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                    d="M0 3.3 3.33 0"
                    transform="translate(2 10.667)"
                  ></path>
                  <path
                    style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                    d="M3.3 3.3 0 0"
                    transform="translate(10.7 10.667)"
                  ></path>
                  <path
                    style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                    d="M3.3 0 0 3.3"
                    transform="translate(10.667 2)"
                  ></path>
                  <path
                    style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                    d="M0 0h3v3"
                    transform="translate(11 2)"
                  ></path>
                  <path
                    style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                    d="M3 0v3H0"
                    transform="translate(11 11)"
                  ></path>
                  <path
                    style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                    d="M3 3H0V0"
                    transform="translate(2 11)"
                  ></path>
                  <path
                    style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                    d="M0 3V0h3"
                    transform="translate(2 2)"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </button>
      </div>
    </div>
    <div class="bottom-[-3.13rem] flex justify-center left-[1.25rem] absolute right-[1.25rem] top-[5.88rem] z-[999]">
      <div
        class="items-center cursor-pointer flex text-[0.75rem] justify-center py-3 border-neutral-200 rounded-full border"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="16"
          height="16"
          fill="none"
          class="h-4 align-middle w-4 truncate"
        >
          <defs>
            <path id="brain_svg__a" d="M0 0h16v16H0z"></path>
          </defs>
          <g>
            <mask id="brain_svg__b" fill="#fff">
              <use xlink:href="#brain_svg__a"></use>
            </mask>
            <g>
              <path
                style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                d="M5.01 13.33c-.32-1.06-.82-1.86-1.48-2.38-.98-.78-2.56-.3-3.14-1.11-.58-.8.41-2.29.76-3.17.34-.88-1.33-1.19-1.13-1.44.13-.16.97-.64 2.53-1.44C3 1.26 4.63 0 7.47 0c4.24 0 5.86 3.6 5.86 5.89 0 2.29-1.96 4.76-4.75 5.29-.25.37.11 1.08 1.08 2.15"
                transform="translate(1.333 1.333)"
              ></path>
              <path
                style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                d="M2.1 3.33c-.19 1.09.04 1.6.69 1.53.65-.07 1.05-.34 1.18-.81 1.02.28 1.57.04 1.66-.72.12-1.15-.5-2.07-.75-2.07s-.91-.03-.91-.38C3.97.52 3.2.33 2.5.33c-.69 0-.27-.47-1.23-.29C.64.17.26.44.13.88c-.22.84-.16 1.43.19 1.78.35.34.94.56 1.78.67Z"
                transform="translate(6.374 3.957)"
              ></path>
              <path
                style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                d="M1.97 0c-.34.21-.8.56-1 .83-.49.69-.88 1.1-.97 1.54"
                transform="translate(8.193 8.5)"
              ></path>
            </g>
          </g>
        </svg>
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
