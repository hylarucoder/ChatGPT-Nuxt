<template>
  <div class="flex-col p-3 rounded-xl border relative">
    <div class="flex flex-wrap">
      <div class="items-center cursor-pointer flex text-[0.75rem] mb-3 mr-1 py-1 px-3 rounded-2xl border">
        <SvgIcon icon="bottom" />
      </div>
      <div class="items-center cursor-pointer flex text-[0.75rem] mb-3 mr-1 py-1 px-3 rounded-2xl border">
        <SvgIcon icon="reload" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="16"
          height="16"
          fill="none"
          class="h-4 align-middle w-4 truncate"
        >
          <defs>
            <path id="auto_svg__a" d="M0 0h16v16H0z"></path>
          </defs>
          <g>
            <mask id="auto_svg__b" fill="#fff">
              <use xlink:href="#auto_svg__a"></use>
            </mask>
            <g>
              <path
                style="stroke: rgb(51, 51, 51); stroke-width: 1; stroke-opacity: 1; stroke-dasharray: 0, 0"
                transform="translate(5.667 5.333)"
                d="m0 5.337.73-1.67m3.938 1.67-.73-1.67M.728 3.67 2.33 0l1.61 3.67M.73 3.667h3.21"
              ></path>
              <path
                style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                transform="translate(1.333 1.333)"
                d="M13.07 5.33A6.672 6.672 0 0 0 0 5.33l2-.66"
              ></path>
              <path
                style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                transform="translate(1.333 9.333)"
                d="M0 0a6.672 6.672 0 0 0 13.07 0l-1.74.67"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div class="items-center cursor-pointer flex text-[0.75rem] mb-3 mr-1 py-1 px-3 rounded-2xl border">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="16"
          height="16"
          fill="none"
          class="h-4 align-middle w-4 truncate"
        >
          <defs>
            <path id="prompt_svg__a" d="M0 0h16v16H0z"></path>
          </defs>
          <g>
            <mask id="prompt_svg__b" fill="#fff">
              <use xlink:href="#prompt_svg__a"></use>
            </mask>
            <g>
              <path
                style="stroke: rgb(51, 51, 51); stroke-width: 1.3; stroke-opacity: 1; stroke-dasharray: 0, 0"
                d="m1.367 1.367 1.41 1.41M4.667 0v2m0 0V0m3.295 1.367-1.41 1.41m0 0 1.41-1.41m1.371 3.3h-2m0 0h2m-1.37 3.295-1.41-1.41m0 0 1.41 1.41M4.666 9.333v-2m0 0v2m-3.3-1.37 1.41-1.41m0 0-1.41 1.41M0 4.666h2m0 0H0"
                transform="translate(5.333 1.333)"
              ></path>
              <path
                style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                d="M8.01 0 0 8.01"
                transform="translate(1.848 6.138)"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div class="items-center cursor-pointer flex text-[0.75rem] mb-3 mr-1 py-1 px-3 rounded-2xl border">
        <SvgIcon icon="mask" />
      </div>
      <div class="items-center cursor-pointer flex text-[0.75rem] mb-3 py-1 px-3 rounded-2xl border">
        <SvgIcon icon="break" />
      </div>
    </div>
    <div class="flex flex-grow">
      <textarea class="relative cursor-text h-24 break-words pb-3 pl-3.5 pr-24 w-full rounded-xl border"></textarea>
      <button
        class="absolute items-center bg-emerald-400 bottom-1 text-white cursor-pointer flex h-10 justify-center right-1 text-center top-[5.63rem] w-16 p-3 rounded-xl truncate"
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
              <path id="send-white_svg__a" d="M0 0h16v16H0z"></path>
            </defs>
            <g>
              <mask id="send-white_svg__b" fill="#fff">
                <use xlink:href="#send-white_svg__a"></use>
              </mask>
              <g>
                <path
                  style="stroke: rgb(255, 255, 255); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                  transform="translate(1.333 2)"
                  d="M0 4.71 6.67 6l1.67 6.67L12.67 0 0 4.71Z"
                ></path>
                <path
                  style="stroke: rgb(255, 255, 255); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                  transform="translate(8.003 6.117)"
                  d="M0 1.89 1.89 0"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <div class="text-[0.75rem] ml-1 truncate">发送</div>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ComposeView",
}
</script>
