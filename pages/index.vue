<script setup lang="ts">
const online = useOnline()
</script>

<template>
  <div class="bg-white text-zinc-800 flex border-neutral-200 rounded-2xl border  truncate">
    <div class="bg-cyan-50 flex flex-col p-5">
      <div class="py-5 relative">
        <div class="text-[1.25rem] font-bold">Best Prompts Hub</div>
        <div class="text-[0.75rem]">Build your own AI assistant.</div>
        <div class="bottom-[1.13rem] left-[13.56rem] absolute top-[1.63rem]">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="43" height="44"
               fill="none" class="h-11 align-middle w-11  truncate"
          >
            <defs>
              <path id="chatgpt_svg__a" d="M0 0h43v43.58H0z"></path>
            </defs>
            <g>
              <mask id="chatgpt_svg__b" fill="#fff">
                <use xlink:href="#chatgpt_svg__a"></use>
              </mask>
              <g>
                <path style="fill: rgb(139, 202, 224);" fill-rule="evenodd" opacity="0.27"
                      d="M40.17 17.84c.36-1.11.55-2.27.55-3.43 0-1.93-.51-3.83-1.49-5.49a10.98 10.98 0 0 0-9.52-5.51c-.77 0-1.55.08-2.3.24A10.868 10.868 0 0 0 19.29 0h-.1c-4.76 0-8.98 3.07-10.45 7.6-3.06.63-5.71 2.55-7.26 5.27a10.993 10.993 0 0 0 1.35 12.87c-.36 1.11-.55 2.27-.55 3.43 0 1.93.51 3.83 1.49 5.49a10.97 10.97 0 0 0 11.82 5.27c2.06 2.32 5.02 3.65 8.12 3.65h.1c4.76 0 8.99-3.07 10.45-7.61a10.82 10.82 0 0 0 7.26-5.26 10.995 10.995 0 0 0-1.35-12.87ZM18.817 38.695c-.09.05-.17.1-.26.15a8.145 8.145 0 0 0 5.22 1.89h.01c4.5-.01 8.15-3.67 8.16-8.17v-10.13a.153.153 0 0 0-.07-.1l-3.67-2.12v12.24c0 .51-.27.98-.72 1.23l-8.67 5.01Zm-1.424-2.472 8.77-5.06c.04-.03.06-.07.06-.11h-.01v-4.24l-10.59 6.12c-.44.25-.98.25-1.42 0l-8.68-5.01c-.08-.05-.2-.12-.26-.16a8.19 8.19 0 0 0 .97 5.47 8.18 8.18 0 0 0 7.08 4.08c1.43 0 2.84-.37 4.08-1.09Zm-9.187-25.21v-.3c-1.79.66-3.3 1.93-4.25 3.58a8.226 8.226 0 0 0-1.09 4.08c0 2.92 1.55 5.61 4.08 7.07l8.77 5.07c.04.02.09.02.12-.01l3.67-2.12-10.59-6.11c-.44-.25-.71-.72-.71-1.23v-10.03Zm27.849 7.117-8.77-5.07a.126.126 0 0 0-.12.01l-3.67 2.12 10.59 6.12c.44.25.71.71.71 1.22v10.33a8.168 8.168 0 0 0 5.35-7.66 8.16 8.16 0 0 0-4.09-7.07Zm-19.22-5.718a.16.16 0 0 0-.05.11v4.24l10.59-6.12c.22-.12.47-.19.72-.19s.49.07.71.19l8.68 5.02c.08.05.17.1.25.15.08-.46.12-.92.12-1.38 0-4.51-3.66-8.17-8.17-8.17-1.43 0-2.83.38-4.08 1.09l-8.77 5.06ZM19.22 2.85c-4.51 0-8.17 3.65-8.17 8.16v10.13c.01.05.03.08.07.1l3.67 2.12.01-12.23v-.01c0-.5.27-.97.71-1.22l8.68-5.01c.07-.05.19-.11.25-.15a8.145 8.145 0 0 0-5.22-1.89ZM16.783 24.51l4.72 2.73 4.72-2.73v-5.45l-4.72-2.72-4.72 2.73v5.44Z"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="flex mb-5">
        <button
            class="items-center bg-white cursor-pointer flex flex-grow h-10 justify-center mr-3 text-center w-32 p-3 rounded-xl  truncate"
        >
          <div class="items-center flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"
                 fill="none" class="h-4 align-middle w-4  truncate"
            >
              <defs>
                <path id="mask_svg__a" d="M0 0h16v16H0z"></path>
              </defs>
              <g>
                <mask id="mask_svg__b" fill="#fff">
                  <use xlink:href="#mask_svg__a"></use>
                </mask>
                <g>
                  <path
                      style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                      d="M6 0C2.69 0 0 2.54 0 5.67s2.69 5.66 6 5.66 6-2.53 6-5.66C12 2.54 9.31 0 6 0Z"
                      transform="translate(2 3.333)"
                  ></path>
                  <path
                      style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                      d="M1 0C.45 0 0 .6 0 1.33c0 .74.45 1.34 1 1.34s1-.6 1-1.34C2 .6 1.55 0 1 0Z"
                      transform="rotate(15 -22.183 22.313)"
                  ></path>
                  <path
                      style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                      d="M1 0C.45 0 0 .6 0 1.33c0 .74.45 1.34 1 1.34s1-.6 1-1.34C2 .6 1.55 0 1 0Z"
                      transform="rotate(165 5.213 5.304)"
                  ></path>
                  <path
                      style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                      d="M4 4.51c1.04-1.04 1.15-2.74.1-3.78C3.06-.32 1.04-.2 0 .84" transform="translate(9.667 2.493)"
                  ></path>
                  <path
                      style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                      d="M.84 4.51C-.2 3.47-.32 1.77.73.73 1.77-.32 3.8-.2 4.84.84" transform="translate(1.493 2.493)"
                  ></path>
                  <path
                      style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                      d="M0 0c.17.43.73 1.09 1.67.29.93.8 1.5.14 1.66-.29" transform="translate(6.5 11.67)"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div class="text-[0.75rem] ml-1   truncate">面具</div>
        </button>
        <button
            class="items-center bg-white cursor-pointer flex flex-grow h-10 justify-center text-center w-32 p-3 rounded-xl  truncate"
        >
          <div class="items-center flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"
                 fill="none" class="h-4 align-middle w-4  truncate"
            >
              <g>
                <mask id="plugin_svg__b" fill="#fff">
                  <use xlink:href="#plugin_svg__a"></use>
                </mask>
                <g>
                  <path
                      d="M6.945 1.725c.261.26.392.576.392.945V6c0 .37-.13.684-.392.945A1.288 1.288 0 0 1 6 7.337H2.67c-.37 0-.684-.13-.945-.392A1.288 1.288 0 0 1 1.333 6V2.67c0-.37.13-.684.392-.945.26-.261.576-.392.945-.392H6c.37 0 .684.13.945.392zM2.667 6c0 .002 0 .003.003.003H6c.002 0 .003 0 .003-.003V2.67c0-.002 0-.003-.003-.003H2.67c-.002 0-.003 0-.003.003zM6.945 9.058c.261.261.392.576.392.945v3.33c0 .37-.13.685-.392.946A1.288 1.288 0 0 1 6 14.67H2.67c-.37 0-.684-.13-.945-.391a1.288 1.288 0 0 1-.392-.946v-3.33c0-.369.13-.684.392-.945.26-.26.576-.391.945-.391H6c.37 0 .684.13.945.391zm-4.278 4.275c0 .003 0 .004.003.004H6c.002 0 .003-.001.003-.004v-3.33c0-.002 0-.003-.003-.003H2.67c-.002 0-.003.001-.003.003zM13.789 6.455a2.987 2.987 0 0 1-2.126.882c-.407 0-.797-.08-1.169-.238a2.97 2.97 0 0 1-.952-.645 2.983 2.983 0 0 1-.64-.956 2.984 2.984 0 0 1-.235-1.168 2.974 2.974 0 0 1 .876-2.12 2.973 2.973 0 0 1 2.12-.877c.407 0 .796.079 1.169.235.36.151.678.365.955.64a2.97 2.97 0 0 1 .883 2.122 2.988 2.988 0 0 1-.882 2.125zm-2.126-3.788c-.46 0-.853.162-1.177.486A1.603 1.603 0 0 0 10 4.33c0 .462.162.857.487 1.184.325.326.717.49 1.176.49.461 0 .855-.164 1.183-.492.327-.327.49-.721.49-1.182 0-.46-.163-.851-.489-1.176a1.618 1.618 0 0 0-1.184-.487zM14.278 9.058c.261.261.392.576.392.945v3.33c0 .37-.13.685-.392.946a1.288 1.288 0 0 1-.945.391h-3.33c-.369 0-.684-.13-.945-.391a1.288 1.288 0 0 1-.391-.946v-3.33c0-.369.13-.684.391-.945.261-.26.576-.391.945-.391h3.33c.37 0 .684.13.945.391zM10 13.333c0 .003.001.004.003.004h3.33c.003 0 .004-.001.004-.004v-3.33c0-.002-.001-.003-.004-.003h-3.33c-.002 0-.003.001-.003.003z"
                      style="fill: rgb(51, 51, 51);" class="opacity-100"
                  ></path>
                </g>
              </g>
              <defs>
                <path id="plugin_svg__a" d="M0 0h16v16H0z"></path>
              </defs>
            </svg>
          </div>
          <div class="text-[0.75rem] ml-1   truncate">市场</div>
        </button>
      </div>
      <div class="flex-grow overflow-x-hidden">
        <div>
          <div class="bg-white cursor-grab mb-3 p-3 rounded-xl border-2">
            <div class="text-[0.88rem] font-bold   truncate">Human Written |100% Unique |SEO Optimized Article</div>
            <div class="text-neutral-400 flex text-[0.75rem] justify-between mt-2">
              <div class="truncate">2 条对话</div>
              <div class="truncate">6/6/2023, 3:40:10 PM</div>
            </div>
          </div>
          <div class="bg-white cursor-grab mb-3 p-3 border-emerald-400 rounded-xl border-2">
            <div class="text-[0.88rem] font-bold   truncate">新的聊天</div>
            <div class="text-neutral-400 flex text-[0.75rem] justify-between mt-2">
              <div class="truncate">30 条对话</div>
              <div class="truncate">6/20/2023, 12:07:39 AM</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between pt-5">
        <div class="flex">
          <div><a href="https://chat.shopify-analytics.com/#/settings" class="cursor-pointer">
            <button class="items-center bg-white flex h-9 justify-center text-center w-9 p-3 rounded-xl  truncate">
              <div class="items-center flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16"
                     height="16" fill="none" class="h-4 align-middle w-4  truncate"
                >
                  <defs>
                    <path id="settings_svg__a" d="M0 0h16v16H0z"></path>
                  </defs>
                  <g>
                    <mask id="settings_svg__b" fill="#fff">
                      <use xlink:href="#settings_svg__a"></use>
                    </mask>
                    <g>
                      <path
                          style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                          transform="translate(1.333 2.333)" d="M13.33 5.67 10 0H3.33L0 5.67l3.33 5.66H10l3.33-5.66Z"
                      ></path>
                      <path
                          style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                          transform="translate(6.333 6.333)"
                          d="M3.33 1.67C3.33.75 2.59 0 1.67 0 .75 0 0 .75 0 1.67c0 .92.75 1.66 1.67 1.66.92 0 1.66-.74 1.66-1.66Z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </button>
          </a></div>
        </div>
        <div>
          <button
              class="items-center bg-white cursor-pointer flex h-10 justify-center text-center w-24 p-3 rounded-xl  truncate"
          >
            <div class="items-center flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"
                   fill="none" class="h-4 align-middle w-4  truncate"
              >
                <defs>
                  <path id="add_svg__a" d="M0 0h16v16H0z"></path>
                </defs>
                <g>
                  <mask id="add_svg__b" fill="#fff">
                    <use xlink:href="#add_svg__a"></use>
                  </mask>
                  <g>
                    <path
                        style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                        d="M13.33 6.67A6.66 6.66 0 0 0 6.67 0C2.98 0 0 2.98 0 6.67a6.66 6.66 0 0 0 6.67 6.66c3.68 0 6.66-2.98 6.66-6.66Z"
                        transform="translate(1.333 1.333)"
                    ></path>
                    <path
                        style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                        d="M0 0v5.33" transform="translate(8 5.333)"
                    ></path>
                    <path
                        style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                        d="M0 0h5.33" transform="translate(5.333 8)"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div class="text-[0.75rem] ml-1   truncate">新的聊天</div>
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex flex-col">
        <div class="items-center flex justify-between py-3.5 px-5 relative border-gray-200 border">
          <div class="truncate">
            <div class="cursor-pointer text-[1.25rem] font-bold   truncate">新的聊天</div>
            <div class="text-[0.88rem] mt-1">与 ChatGPT 的 30 条对话</div>
          </div>
          <div class="flex">
            <div class="ml-3">
              <button
                  class="items-center cursor-pointer flex h-10 justify-center text-center w-10 p-3 border-neutral-200 rounded-xl border  truncate"
              >
                <div class="items-center flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16"
                       height="16" fill="none" class="h-4 align-middle w-4  truncate"
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
                            style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                            transform="translate(1.775 1.3)" d="M2.83 13.2 13.2 2.83 10.37 0 0 10.37v2.83h2.83Z"
                        ></path>
                        <path
                            style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                            transform="translate(9.317 4.13)" d="m0 0 2.83 2.83"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </button>
            </div>
            <div class="ml-3">
              <button
                  class="items-center cursor-pointer flex h-10 justify-center text-center w-10 p-3 border-neutral-200 rounded-xl border  truncate"
              >
                <div class="items-center flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16"
                       height="16" fill="none" class="h-4 align-middle w-4  truncate"
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
                            style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
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
                  class="items-center cursor-pointer flex h-10 justify-center text-center w-10 p-3 border-neutral-200 rounded-xl border  truncate"
              >
                <div class="items-center flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16"
                       height="16" fill="none" class="h-4 align-middle w-4  truncate"
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
                            style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                            d="m0 0 3.33 3.3" transform="translate(2 2)"
                        ></path>
                        <path
                            style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                            d="M0 3.3 3.33 0" transform="translate(2 10.667)"
                        ></path>
                        <path
                            style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                            d="M3.3 3.3 0 0" transform="translate(10.7 10.667)"
                        ></path>
                        <path
                            style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                            d="M3.3 0 0 3.3" transform="translate(10.667 2)"
                        ></path>
                        <path
                            style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                            d="M0 0h3v3" transform="translate(11 2)"
                        ></path>
                        <path
                            style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                            d="M3 0v3H0" transform="translate(11 11)"
                        ></path>
                        <path
                            style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                            d="M3 3H0V0" transform="translate(2 11)"
                        ></path>
                        <path
                            style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                            d="M0 3V0h3" transform="translate(2 2)"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div
              class="bottom-[-3.13rem] flex justify-center left-[1.25rem] absolute right-[1.25rem] top-[5.88rem] z-[999]"
          >
            <div
                class="items-center cursor-pointer flex text-[0.75rem] justify-center py-3 border-neutral-200 rounded-full border"
            >
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"
                   fill="none" class="h-4 align-middle w-4  truncate"
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
                        style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                        d="M5.01 13.33c-.32-1.06-.82-1.86-1.48-2.38-.98-.78-2.56-.3-3.14-1.11-.58-.8.41-2.29.76-3.17.34-.88-1.33-1.19-1.13-1.44.13-.16.97-.64 2.53-1.44C3 1.26 4.63 0 7.47 0c4.24 0 5.86 3.6 5.86 5.89 0 2.29-1.96 4.76-4.75 5.29-.25.37.11 1.08 1.08 2.15"
                        transform="translate(1.333 1.333)"
                    ></path>
                    <path
                        style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                        d="M2.1 3.33c-.19 1.09.04 1.6.69 1.53.65-.07 1.05-.34 1.18-.81 1.02.28 1.57.04 1.66-.72.12-1.15-.5-2.07-.75-2.07s-.91-.03-.91-.38C3.97.52 3.2.33 2.5.33c-.69 0-.27-.47-1.23-.29C.64.17.26.44.13.88c-.22.84-.16 1.43.19 1.78.35.34.94.56 1.78.67Z"
                        transform="translate(6.374 3.957)"
                    ></path>
                    <path
                        style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                        d="M1.97 0c-.34.21-.8.56-1 .83-.49.69-.88 1.1-.97 1.54" transform="translate(8.193 8.5)"
                    ></path>
                  </g>
                </g>
              </svg>
              <span class="ml-3">包含 0 条预设提示词</span></div>
          </div>
        </div>
        <div class="flex-grow p-5">
          <div class="flex flex-row-reverse">
            <div class="items-end flex flex-col">
              <div class="mt-5">
                <div class="items-center flex justify-center rounded-xl border"><img
                    src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f603.png"
                    class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
                ></div>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="items-start flex flex-col">
              <div class="mt-5">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30"
                       height="30" fill="none"
                       class="items-center flex h-8 justify-center align-middle w-8 rounded-xl border  truncate"
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
                            <path fill-rule="evenodd"
                                  d="M19.11 8.37c.17-.52.26-1.06.26-1.61 0-.9-.24-1.79-.71-2.57a5.24 5.24 0 0 0-4.53-2.59c-.37 0-.73.04-1.09.11A5.201 5.201 0 0 0 9.17 0h-.04C6.86 0 4.86 1.44 4.16 3.57A5.11 5.11 0 0 0 .71 6.04C.24 6.83 0 7.72 0 8.63c0 1.27.48 2.51 1.35 3.45-.18.52-.27 1.07-.27 1.61 0 .91.25 1.8.71 2.58 1.13 1.94 3.41 2.94 5.63 2.47a5.18 5.18 0 0 0 3.86 1.71h.05c2.26 0 4.27-1.44 4.97-3.57a5.132 5.132 0 0 0 3.45-2.47c.46-.78.7-1.67.7-2.58 0-1.28-.48-2.51-1.34-3.46ZM8.947 18.158c-.04.03-.08.05-.12.07.7.58 1.57.89 2.48.89h.01c2.14 0 3.88-1.72 3.88-3.83v-4.76c0-.02-.02-.04-.04-.05l-1.74-.99v5.75c0 .23-.13.45-.34.57l-4.13 2.35Zm-.67-1.153 4.17-2.38c.02-.01.03-.03.03-.05v-1.99l-5.04 2.87c-.21.12-.47.12-.68 0l-4.13-2.35c-.04-.02-.09-.06-.12-.07-.04.21-.06.43-.06.65 0 .67.18 1.33.52 1.92v-.01c.7 1.19 1.98 1.92 3.37 1.92.68 0 1.35-.18 1.94-.51ZM3.903 5.168v-.14c-.85.31-1.57.9-2.02 1.68a3.78 3.78 0 0 0-.52 1.91c0 1.37.74 2.64 1.94 3.33l4.17 2.37c.02.01.04.01.06 0l1.75-1-5.04-2.87a.64.64 0 0 1-.34-.57v-4.71Zm13.253 3.337-4.18-2.38c-.02 0-.04 0-.06.01l-1.74.99 5.04 2.87c.21.12.34.34.34.58v4.85c1.52-.56 2.54-1.99 2.54-3.6 0-1.37-.74-2.63-1.94-3.32ZM8.014 5.83c-.02.01-.03.03-.03.05v1.99L13.024 5a.692.692 0 0 1 .68 0l4.13 2.35c.04.02.08.05.12.07.03-.21.05-.43.05-.65 0-2.11-1.74-3.83-3.88-3.83-.68 0-1.35.18-1.94.51l-4.17 2.38Zm1.133-4.492c-2.15 0-3.89 1.72-3.89 3.83v4.76c0 .02.02.03.03.04l1.75 1v-5.75c0-.23.13-.45.34-.57l4.13-2.35c.04-.03.09-.06.12-.07-.7-.58-1.58-.89-2.48-.89ZM7.983 11.51l2.24 1.27 2.25-1.27V8.95l-2.25-1.28-2.24 1.28v2.56Z"
                                  style="fill: rgb(31, 148, 140);"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="flex flex-row-reverse text-[0.75rem] pt-1">
                <div class="text-neutral-400">6/6/2023, 3:39:14 PM</div>
              </div>
            </div>
          </div>
          <div class="flex flex-row-reverse">
            <div class="items-end flex flex-col">
              <div class="mt-5">
                <div class="items-center flex justify-center rounded-xl border"><img
                    src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f603.png"
                    class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
                ></div>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="items-start flex flex-col">
              <div class="mt-5">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30"
                       height="30" fill="none"
                       class="items-center flex h-8 justify-center align-middle w-8 rounded-xl border  truncate"
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
                            <path fill-rule="evenodd"
                                  d="M19.11 8.37c.17-.52.26-1.06.26-1.61 0-.9-.24-1.79-.71-2.57a5.24 5.24 0 0 0-4.53-2.59c-.37 0-.73.04-1.09.11A5.201 5.201 0 0 0 9.17 0h-.04C6.86 0 4.86 1.44 4.16 3.57A5.11 5.11 0 0 0 .71 6.04C.24 6.83 0 7.72 0 8.63c0 1.27.48 2.51 1.35 3.45-.18.52-.27 1.07-.27 1.61 0 .91.25 1.8.71 2.58 1.13 1.94 3.41 2.94 5.63 2.47a5.18 5.18 0 0 0 3.86 1.71h.05c2.26 0 4.27-1.44 4.97-3.57a5.132 5.132 0 0 0 3.45-2.47c.46-.78.7-1.67.7-2.58 0-1.28-.48-2.51-1.34-3.46ZM8.947 18.158c-.04.03-.08.05-.12.07.7.58 1.57.89 2.48.89h.01c2.14 0 3.88-1.72 3.88-3.83v-4.76c0-.02-.02-.04-.04-.05l-1.74-.99v5.75c0 .23-.13.45-.34.57l-4.13 2.35Zm-.67-1.153 4.17-2.38c.02-.01.03-.03.03-.05v-1.99l-5.04 2.87c-.21.12-.47.12-.68 0l-4.13-2.35c-.04-.02-.09-.06-.12-.07-.04.21-.06.43-.06.65 0 .67.18 1.33.52 1.92v-.01c.7 1.19 1.98 1.92 3.37 1.92.68 0 1.35-.18 1.94-.51ZM3.903 5.168v-.14c-.85.31-1.57.9-2.02 1.68a3.78 3.78 0 0 0-.52 1.91c0 1.37.74 2.64 1.94 3.33l4.17 2.37c.02.01.04.01.06 0l1.75-1-5.04-2.87a.64.64 0 0 1-.34-.57v-4.71Zm13.253 3.337-4.18-2.38c-.02 0-.04 0-.06.01l-1.74.99 5.04 2.87c.21.12.34.34.34.58v4.85c1.52-.56 2.54-1.99 2.54-3.6 0-1.37-.74-2.63-1.94-3.32ZM8.014 5.83c-.02.01-.03.03-.03.05v1.99L13.024 5a.692.692 0 0 1 .68 0l4.13 2.35c.04.02.08.05.12.07.03-.21.05-.43.05-.65 0-2.11-1.74-3.83-3.88-3.83-.68 0-1.35.18-1.94.51l-4.17 2.38Zm1.133-4.492c-2.15 0-3.89 1.72-3.89 3.83v4.76c0 .02.02.03.03.04l1.75 1v-5.75c0-.23.13-.45.34-.57l4.13-2.35c.04-.03.09-.06.12-.07-.7-.58-1.58-.89-2.48-.89ZM7.983 11.51l2.24 1.27 2.25-1.27V8.95l-2.25-1.28-2.24 1.28v2.56Z"
                                  style="fill: rgb(31, 148, 140);"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="flex flex-row-reverse text-[0.75rem] pt-1">
                <div class="text-neutral-400">6/17/2023, 1:10:36 PM</div>
              </div>
            </div>
          </div>
          <div class="flex flex-row-reverse">
            <div class="items-end flex flex-col">
              <div class="mt-5">
                <div class="items-center flex justify-center rounded-xl border"><img
                    src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f603.png"
                    class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
                ></div>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="items-start flex flex-col">
              <div class="mt-5">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30"
                       height="30" fill="none"
                       class="items-center flex h-8 justify-center align-middle w-8 rounded-xl border  truncate"
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
                            <path fill-rule="evenodd"
                                  d="M19.11 8.37c.17-.52.26-1.06.26-1.61 0-.9-.24-1.79-.71-2.57a5.24 5.24 0 0 0-4.53-2.59c-.37 0-.73.04-1.09.11A5.201 5.201 0 0 0 9.17 0h-.04C6.86 0 4.86 1.44 4.16 3.57A5.11 5.11 0 0 0 .71 6.04C.24 6.83 0 7.72 0 8.63c0 1.27.48 2.51 1.35 3.45-.18.52-.27 1.07-.27 1.61 0 .91.25 1.8.71 2.58 1.13 1.94 3.41 2.94 5.63 2.47a5.18 5.18 0 0 0 3.86 1.71h.05c2.26 0 4.27-1.44 4.97-3.57a5.132 5.132 0 0 0 3.45-2.47c.46-.78.7-1.67.7-2.58 0-1.28-.48-2.51-1.34-3.46ZM8.947 18.158c-.04.03-.08.05-.12.07.7.58 1.57.89 2.48.89h.01c2.14 0 3.88-1.72 3.88-3.83v-4.76c0-.02-.02-.04-.04-.05l-1.74-.99v5.75c0 .23-.13.45-.34.57l-4.13 2.35Zm-.67-1.153 4.17-2.38c.02-.01.03-.03.03-.05v-1.99l-5.04 2.87c-.21.12-.47.12-.68 0l-4.13-2.35c-.04-.02-.09-.06-.12-.07-.04.21-.06.43-.06.65 0 .67.18 1.33.52 1.92v-.01c.7 1.19 1.98 1.92 3.37 1.92.68 0 1.35-.18 1.94-.51ZM3.903 5.168v-.14c-.85.31-1.57.9-2.02 1.68a3.78 3.78 0 0 0-.52 1.91c0 1.37.74 2.64 1.94 3.33l4.17 2.37c.02.01.04.01.06 0l1.75-1-5.04-2.87a.64.64 0 0 1-.34-.57v-4.71Zm13.253 3.337-4.18-2.38c-.02 0-.04 0-.06.01l-1.74.99 5.04 2.87c.21.12.34.34.34.58v4.85c1.52-.56 2.54-1.99 2.54-3.6 0-1.37-.74-2.63-1.94-3.32ZM8.014 5.83c-.02.01-.03.03-.03.05v1.99L13.024 5a.692.692 0 0 1 .68 0l4.13 2.35c.04.02.08.05.12.07.03-.21.05-.43.05-.65 0-2.11-1.74-3.83-3.88-3.83-.68 0-1.35.18-1.94.51l-4.17 2.38Zm1.133-4.492c-2.15 0-3.89 1.72-3.89 3.83v4.76c0 .02.02.03.03.04l1.75 1v-5.75c0-.23.13-.45.34-.57l4.13-2.35c.04-.03.09-.06.12-.07-.7-.58-1.58-.89-2.48-.89ZM7.983 11.51l2.24 1.27 2.25-1.27V8.95l-2.25-1.28-2.24 1.28v2.56Z"
                                  style="fill: rgb(31, 148, 140);"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="flex flex-row-reverse text-[0.75rem] pt-1">
                <div class="text-neutral-400">6/17/2023, 2:05:49 PM</div>
              </div>
            </div>
          </div>
          <div class="flex flex-row-reverse">
            <div class="items-end flex flex-col">
              <div class="mt-5">
                <div class="items-center flex justify-center rounded-xl border"><img
                    src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f603.png"
                    class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
                ></div>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="items-start flex flex-col">
              <div class="mt-5">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30"
                       height="30" fill="none"
                       class="items-center flex h-8 justify-center align-middle w-8 rounded-xl border  truncate"
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
                            <path fill-rule="evenodd"
                                  d="M19.11 8.37c.17-.52.26-1.06.26-1.61 0-.9-.24-1.79-.71-2.57a5.24 5.24 0 0 0-4.53-2.59c-.37 0-.73.04-1.09.11A5.201 5.201 0 0 0 9.17 0h-.04C6.86 0 4.86 1.44 4.16 3.57A5.11 5.11 0 0 0 .71 6.04C.24 6.83 0 7.72 0 8.63c0 1.27.48 2.51 1.35 3.45-.18.52-.27 1.07-.27 1.61 0 .91.25 1.8.71 2.58 1.13 1.94 3.41 2.94 5.63 2.47a5.18 5.18 0 0 0 3.86 1.71h.05c2.26 0 4.27-1.44 4.97-3.57a5.132 5.132 0 0 0 3.45-2.47c.46-.78.7-1.67.7-2.58 0-1.28-.48-2.51-1.34-3.46ZM8.947 18.158c-.04.03-.08.05-.12.07.7.58 1.57.89 2.48.89h.01c2.14 0 3.88-1.72 3.88-3.83v-4.76c0-.02-.02-.04-.04-.05l-1.74-.99v5.75c0 .23-.13.45-.34.57l-4.13 2.35Zm-.67-1.153 4.17-2.38c.02-.01.03-.03.03-.05v-1.99l-5.04 2.87c-.21.12-.47.12-.68 0l-4.13-2.35c-.04-.02-.09-.06-.12-.07-.04.21-.06.43-.06.65 0 .67.18 1.33.52 1.92v-.01c.7 1.19 1.98 1.92 3.37 1.92.68 0 1.35-.18 1.94-.51ZM3.903 5.168v-.14c-.85.31-1.57.9-2.02 1.68a3.78 3.78 0 0 0-.52 1.91c0 1.37.74 2.64 1.94 3.33l4.17 2.37c.02.01.04.01.06 0l1.75-1-5.04-2.87a.64.64 0 0 1-.34-.57v-4.71Zm13.253 3.337-4.18-2.38c-.02 0-.04 0-.06.01l-1.74.99 5.04 2.87c.21.12.34.34.34.58v4.85c1.52-.56 2.54-1.99 2.54-3.6 0-1.37-.74-2.63-1.94-3.32ZM8.014 5.83c-.02.01-.03.03-.03.05v1.99L13.024 5a.692.692 0 0 1 .68 0l4.13 2.35c.04.02.08.05.12.07.03-.21.05-.43.05-.65 0-2.11-1.74-3.83-3.88-3.83-.68 0-1.35.18-1.94.51l-4.17 2.38Zm1.133-4.492c-2.15 0-3.89 1.72-3.89 3.83v4.76c0 .02.02.03.03.04l1.75 1v-5.75c0-.23.13-.45.34-.57l4.13-2.35c.04-.03.09-.06.12-.07-.7-.58-1.58-.89-2.48-.89ZM7.983 11.51l2.24 1.27 2.25-1.27V8.95l-2.25-1.28-2.24 1.28v2.56Z"
                                  style="fill: rgb(31, 148, 140);"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="flex flex-row-reverse text-[0.75rem] pt-1">
                <div class="text-neutral-400">6/19/2023, 10:46:14 PM</div>
              </div>
            </div>
          </div>
          <div class="flex flex-row-reverse">
            <div class="items-end flex flex-col">
              <div class="mt-5">
                <div class="items-center flex justify-center rounded-xl border"><img
                    src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f603.png"
                    class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
                ></div>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="items-start flex flex-col">
              <div class="mt-5">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30"
                       height="30" fill="none"
                       class="items-center flex h-8 justify-center align-middle w-8 rounded-xl border  truncate"
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
                            <path fill-rule="evenodd"
                                  d="M19.11 8.37c.17-.52.26-1.06.26-1.61 0-.9-.24-1.79-.71-2.57a5.24 5.24 0 0 0-4.53-2.59c-.37 0-.73.04-1.09.11A5.201 5.201 0 0 0 9.17 0h-.04C6.86 0 4.86 1.44 4.16 3.57A5.11 5.11 0 0 0 .71 6.04C.24 6.83 0 7.72 0 8.63c0 1.27.48 2.51 1.35 3.45-.18.52-.27 1.07-.27 1.61 0 .91.25 1.8.71 2.58 1.13 1.94 3.41 2.94 5.63 2.47a5.18 5.18 0 0 0 3.86 1.71h.05c2.26 0 4.27-1.44 4.97-3.57a5.132 5.132 0 0 0 3.45-2.47c.46-.78.7-1.67.7-2.58 0-1.28-.48-2.51-1.34-3.46ZM8.947 18.158c-.04.03-.08.05-.12.07.7.58 1.57.89 2.48.89h.01c2.14 0 3.88-1.72 3.88-3.83v-4.76c0-.02-.02-.04-.04-.05l-1.74-.99v5.75c0 .23-.13.45-.34.57l-4.13 2.35Zm-.67-1.153 4.17-2.38c.02-.01.03-.03.03-.05v-1.99l-5.04 2.87c-.21.12-.47.12-.68 0l-4.13-2.35c-.04-.02-.09-.06-.12-.07-.04.21-.06.43-.06.65 0 .67.18 1.33.52 1.92v-.01c.7 1.19 1.98 1.92 3.37 1.92.68 0 1.35-.18 1.94-.51ZM3.903 5.168v-.14c-.85.31-1.57.9-2.02 1.68a3.78 3.78 0 0 0-.52 1.91c0 1.37.74 2.64 1.94 3.33l4.17 2.37c.02.01.04.01.06 0l1.75-1-5.04-2.87a.64.64 0 0 1-.34-.57v-4.71Zm13.253 3.337-4.18-2.38c-.02 0-.04 0-.06.01l-1.74.99 5.04 2.87c.21.12.34.34.34.58v4.85c1.52-.56 2.54-1.99 2.54-3.6 0-1.37-.74-2.63-1.94-3.32ZM8.014 5.83c-.02.01-.03.03-.03.05v1.99L13.024 5a.692.692 0 0 1 .68 0l4.13 2.35c.04.02.08.05.12.07.03-.21.05-.43.05-.65 0-2.11-1.74-3.83-3.88-3.83-.68 0-1.35.18-1.94.51l-4.17 2.38Zm1.133-4.492c-2.15 0-3.89 1.72-3.89 3.83v4.76c0 .02.02.03.03.04l1.75 1v-5.75c0-.23.13-.45.34-.57l4.13-2.35c.04-.03.09-.06.12-.07-.7-.58-1.58-.89-2.48-.89ZM7.983 11.51l2.24 1.27 2.25-1.27V8.95l-2.25-1.28-2.24 1.28v2.56Z"
                                  style="fill: rgb(31, 148, 140);"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="flex flex-row-reverse text-[0.75rem] pt-1">
                <div class="text-neutral-400">6/19/2023, 10:46:35 PM</div>
              </div>
            </div>
          </div>
          <div class="flex flex-row-reverse">
            <div class="items-end flex flex-col">
              <div class="mt-5">
                <div class="items-center flex justify-center rounded-xl border"><img
                    src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f603.png"
                    class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
                ></div>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="items-start flex flex-col">
              <div class="mt-5">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30"
                       height="30" fill="none"
                       class="items-center flex h-8 justify-center align-middle w-8 rounded-xl border  truncate"
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
                            <path fill-rule="evenodd"
                                  d="M19.11 8.37c.17-.52.26-1.06.26-1.61 0-.9-.24-1.79-.71-2.57a5.24 5.24 0 0 0-4.53-2.59c-.37 0-.73.04-1.09.11A5.201 5.201 0 0 0 9.17 0h-.04C6.86 0 4.86 1.44 4.16 3.57A5.11 5.11 0 0 0 .71 6.04C.24 6.83 0 7.72 0 8.63c0 1.27.48 2.51 1.35 3.45-.18.52-.27 1.07-.27 1.61 0 .91.25 1.8.71 2.58 1.13 1.94 3.41 2.94 5.63 2.47a5.18 5.18 0 0 0 3.86 1.71h.05c2.26 0 4.27-1.44 4.97-3.57a5.132 5.132 0 0 0 3.45-2.47c.46-.78.7-1.67.7-2.58 0-1.28-.48-2.51-1.34-3.46ZM8.947 18.158c-.04.03-.08.05-.12.07.7.58 1.57.89 2.48.89h.01c2.14 0 3.88-1.72 3.88-3.83v-4.76c0-.02-.02-.04-.04-.05l-1.74-.99v5.75c0 .23-.13.45-.34.57l-4.13 2.35Zm-.67-1.153 4.17-2.38c.02-.01.03-.03.03-.05v-1.99l-5.04 2.87c-.21.12-.47.12-.68 0l-4.13-2.35c-.04-.02-.09-.06-.12-.07-.04.21-.06.43-.06.65 0 .67.18 1.33.52 1.92v-.01c.7 1.19 1.98 1.92 3.37 1.92.68 0 1.35-.18 1.94-.51ZM3.903 5.168v-.14c-.85.31-1.57.9-2.02 1.68a3.78 3.78 0 0 0-.52 1.91c0 1.37.74 2.64 1.94 3.33l4.17 2.37c.02.01.04.01.06 0l1.75-1-5.04-2.87a.64.64 0 0 1-.34-.57v-4.71Zm13.253 3.337-4.18-2.38c-.02 0-.04 0-.06.01l-1.74.99 5.04 2.87c.21.12.34.34.34.58v4.85c1.52-.56 2.54-1.99 2.54-3.6 0-1.37-.74-2.63-1.94-3.32ZM8.014 5.83c-.02.01-.03.03-.03.05v1.99L13.024 5a.692.692 0 0 1 .68 0l4.13 2.35c.04.02.08.05.12.07.03-.21.05-.43.05-.65 0-2.11-1.74-3.83-3.88-3.83-.68 0-1.35.18-1.94.51l-4.17 2.38Zm1.133-4.492c-2.15 0-3.89 1.72-3.89 3.83v4.76c0 .02.02.03.03.04l1.75 1v-5.75c0-.23.13-.45.34-.57l4.13-2.35c.04-.03.09-.06.12-.07-.7-.58-1.58-.89-2.48-.89ZM7.983 11.51l2.24 1.27 2.25-1.27V8.95l-2.25-1.28-2.24 1.28v2.56Z"
                                  style="fill: rgb(31, 148, 140);"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="flex flex-row-reverse text-[0.75rem] pt-1">
                <div class="text-neutral-400">6/19/2023, 10:46:40 PM</div>
              </div>
            </div>
          </div>
          <div class="flex flex-row-reverse">
            <div class="items-end flex flex-col">
              <div class="mt-5">
                <div class="items-center flex justify-center rounded-xl border"><img
                    src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f603.png"
                    class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
                ></div>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="items-start flex flex-col">
              <div class="mt-5">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30"
                       height="30" fill="none"
                       class="items-center flex h-8 justify-center align-middle w-8 rounded-xl border  truncate"
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
                            <path fill-rule="evenodd"
                                  d="M19.11 8.37c.17-.52.26-1.06.26-1.61 0-.9-.24-1.79-.71-2.57a5.24 5.24 0 0 0-4.53-2.59c-.37 0-.73.04-1.09.11A5.201 5.201 0 0 0 9.17 0h-.04C6.86 0 4.86 1.44 4.16 3.57A5.11 5.11 0 0 0 .71 6.04C.24 6.83 0 7.72 0 8.63c0 1.27.48 2.51 1.35 3.45-.18.52-.27 1.07-.27 1.61 0 .91.25 1.8.71 2.58 1.13 1.94 3.41 2.94 5.63 2.47a5.18 5.18 0 0 0 3.86 1.71h.05c2.26 0 4.27-1.44 4.97-3.57a5.132 5.132 0 0 0 3.45-2.47c.46-.78.7-1.67.7-2.58 0-1.28-.48-2.51-1.34-3.46ZM8.947 18.158c-.04.03-.08.05-.12.07.7.58 1.57.89 2.48.89h.01c2.14 0 3.88-1.72 3.88-3.83v-4.76c0-.02-.02-.04-.04-.05l-1.74-.99v5.75c0 .23-.13.45-.34.57l-4.13 2.35Zm-.67-1.153 4.17-2.38c.02-.01.03-.03.03-.05v-1.99l-5.04 2.87c-.21.12-.47.12-.68 0l-4.13-2.35c-.04-.02-.09-.06-.12-.07-.04.21-.06.43-.06.65 0 .67.18 1.33.52 1.92v-.01c.7 1.19 1.98 1.92 3.37 1.92.68 0 1.35-.18 1.94-.51ZM3.903 5.168v-.14c-.85.31-1.57.9-2.02 1.68a3.78 3.78 0 0 0-.52 1.91c0 1.37.74 2.64 1.94 3.33l4.17 2.37c.02.01.04.01.06 0l1.75-1-5.04-2.87a.64.64 0 0 1-.34-.57v-4.71Zm13.253 3.337-4.18-2.38c-.02 0-.04 0-.06.01l-1.74.99 5.04 2.87c.21.12.34.34.34.58v4.85c1.52-.56 2.54-1.99 2.54-3.6 0-1.37-.74-2.63-1.94-3.32ZM8.014 5.83c-.02.01-.03.03-.03.05v1.99L13.024 5a.692.692 0 0 1 .68 0l4.13 2.35c.04.02.08.05.12.07.03-.21.05-.43.05-.65 0-2.11-1.74-3.83-3.88-3.83-.68 0-1.35.18-1.94.51l-4.17 2.38Zm1.133-4.492c-2.15 0-3.89 1.72-3.89 3.83v4.76c0 .02.02.03.03.04l1.75 1v-5.75c0-.23.13-.45.34-.57l4.13-2.35c.04-.03.09-.06.12-.07-.7-.58-1.58-.89-2.48-.89ZM7.983 11.51l2.24 1.27 2.25-1.27V8.95l-2.25-1.28-2.24 1.28v2.56Z"
                                  style="fill: rgb(31, 148, 140);"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="flex flex-row-reverse text-[0.75rem] pt-1">
                <div class="text-neutral-400">6/19/2023, 11:00:33 PM</div>
              </div>
            </div>
          </div>
          <div class="flex flex-row-reverse">
            <div class="items-end flex flex-col">
              <div class="mt-5">
                <div class="items-center flex justify-center rounded-xl border"><img
                    src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f603.png"
                    class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
                ></div>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="items-start flex flex-col">
              <div class="mt-5">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30"
                       height="30" fill="none"
                       class="items-center flex h-8 justify-center align-middle w-8 rounded-xl border  truncate"
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
                            <path fill-rule="evenodd"
                                  d="M19.11 8.37c.17-.52.26-1.06.26-1.61 0-.9-.24-1.79-.71-2.57a5.24 5.24 0 0 0-4.53-2.59c-.37 0-.73.04-1.09.11A5.201 5.201 0 0 0 9.17 0h-.04C6.86 0 4.86 1.44 4.16 3.57A5.11 5.11 0 0 0 .71 6.04C.24 6.83 0 7.72 0 8.63c0 1.27.48 2.51 1.35 3.45-.18.52-.27 1.07-.27 1.61 0 .91.25 1.8.71 2.58 1.13 1.94 3.41 2.94 5.63 2.47a5.18 5.18 0 0 0 3.86 1.71h.05c2.26 0 4.27-1.44 4.97-3.57a5.132 5.132 0 0 0 3.45-2.47c.46-.78.7-1.67.7-2.58 0-1.28-.48-2.51-1.34-3.46ZM8.947 18.158c-.04.03-.08.05-.12.07.7.58 1.57.89 2.48.89h.01c2.14 0 3.88-1.72 3.88-3.83v-4.76c0-.02-.02-.04-.04-.05l-1.74-.99v5.75c0 .23-.13.45-.34.57l-4.13 2.35Zm-.67-1.153 4.17-2.38c.02-.01.03-.03.03-.05v-1.99l-5.04 2.87c-.21.12-.47.12-.68 0l-4.13-2.35c-.04-.02-.09-.06-.12-.07-.04.21-.06.43-.06.65 0 .67.18 1.33.52 1.92v-.01c.7 1.19 1.98 1.92 3.37 1.92.68 0 1.35-.18 1.94-.51ZM3.903 5.168v-.14c-.85.31-1.57.9-2.02 1.68a3.78 3.78 0 0 0-.52 1.91c0 1.37.74 2.64 1.94 3.33l4.17 2.37c.02.01.04.01.06 0l1.75-1-5.04-2.87a.64.64 0 0 1-.34-.57v-4.71Zm13.253 3.337-4.18-2.38c-.02 0-.04 0-.06.01l-1.74.99 5.04 2.87c.21.12.34.34.34.58v4.85c1.52-.56 2.54-1.99 2.54-3.6 0-1.37-.74-2.63-1.94-3.32ZM8.014 5.83c-.02.01-.03.03-.03.05v1.99L13.024 5a.692.692 0 0 1 .68 0l4.13 2.35c.04.02.08.05.12.07.03-.21.05-.43.05-.65 0-2.11-1.74-3.83-3.88-3.83-.68 0-1.35.18-1.94.51l-4.17 2.38Zm1.133-4.492c-2.15 0-3.89 1.72-3.89 3.83v4.76c0 .02.02.03.03.04l1.75 1v-5.75c0-.23.13-.45.34-.57l4.13-2.35c.04-.03.09-.06.12-.07-.7-.58-1.58-.89-2.48-.89ZM7.983 11.51l2.24 1.27 2.25-1.27V8.95l-2.25-1.28-2.24 1.28v2.56Z"
                                  style="fill: rgb(31, 148, 140);"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="flex flex-row-reverse text-[0.75rem] pt-1">
                <div class="text-neutral-400">6/19/2023, 11:02:11 PM</div>
              </div>
            </div>
          </div>
          <div class="flex flex-row-reverse">
            <div class="items-end flex flex-col">
              <div class="mt-5">
                <div class="items-center flex justify-center rounded-xl border"><img
                    src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f603.png"
                    class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
                ></div>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="items-start flex flex-col">
              <div class="mt-5">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30"
                       height="30" fill="none"
                       class="items-center flex h-8 justify-center align-middle w-8 rounded-xl border  truncate"
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
                            <path fill-rule="evenodd"
                                  d="M19.11 8.37c.17-.52.26-1.06.26-1.61 0-.9-.24-1.79-.71-2.57a5.24 5.24 0 0 0-4.53-2.59c-.37 0-.73.04-1.09.11A5.201 5.201 0 0 0 9.17 0h-.04C6.86 0 4.86 1.44 4.16 3.57A5.11 5.11 0 0 0 .71 6.04C.24 6.83 0 7.72 0 8.63c0 1.27.48 2.51 1.35 3.45-.18.52-.27 1.07-.27 1.61 0 .91.25 1.8.71 2.58 1.13 1.94 3.41 2.94 5.63 2.47a5.18 5.18 0 0 0 3.86 1.71h.05c2.26 0 4.27-1.44 4.97-3.57a5.132 5.132 0 0 0 3.45-2.47c.46-.78.7-1.67.7-2.58 0-1.28-.48-2.51-1.34-3.46ZM8.947 18.158c-.04.03-.08.05-.12.07.7.58 1.57.89 2.48.89h.01c2.14 0 3.88-1.72 3.88-3.83v-4.76c0-.02-.02-.04-.04-.05l-1.74-.99v5.75c0 .23-.13.45-.34.57l-4.13 2.35Zm-.67-1.153 4.17-2.38c.02-.01.03-.03.03-.05v-1.99l-5.04 2.87c-.21.12-.47.12-.68 0l-4.13-2.35c-.04-.02-.09-.06-.12-.07-.04.21-.06.43-.06.65 0 .67.18 1.33.52 1.92v-.01c.7 1.19 1.98 1.92 3.37 1.92.68 0 1.35-.18 1.94-.51ZM3.903 5.168v-.14c-.85.31-1.57.9-2.02 1.68a3.78 3.78 0 0 0-.52 1.91c0 1.37.74 2.64 1.94 3.33l4.17 2.37c.02.01.04.01.06 0l1.75-1-5.04-2.87a.64.64 0 0 1-.34-.57v-4.71Zm13.253 3.337-4.18-2.38c-.02 0-.04 0-.06.01l-1.74.99 5.04 2.87c.21.12.34.34.34.58v4.85c1.52-.56 2.54-1.99 2.54-3.6 0-1.37-.74-2.63-1.94-3.32ZM8.014 5.83c-.02.01-.03.03-.03.05v1.99L13.024 5a.692.692 0 0 1 .68 0l4.13 2.35c.04.02.08.05.12.07.03-.21.05-.43.05-.65 0-2.11-1.74-3.83-3.88-3.83-.68 0-1.35.18-1.94.51l-4.17 2.38Zm1.133-4.492c-2.15 0-3.89 1.72-3.89 3.83v4.76c0 .02.02.03.03.04l1.75 1v-5.75c0-.23.13-.45.34-.57l4.13-2.35c.04-.03.09-.06.12-.07-.7-.58-1.58-.89-2.48-.89ZM7.983 11.51l2.24 1.27 2.25-1.27V8.95l-2.25-1.28-2.24 1.28v2.56Z"
                                  style="fill: rgb(31, 148, 140);"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="flex flex-row-reverse text-[0.75rem] pt-1">
                <div class="text-neutral-400">6/19/2023, 11:02:40 PM</div>
              </div>
            </div>
          </div>
          <div class="flex flex-row-reverse">
            <div class="items-end flex flex-col">
              <div class="mt-5">
                <div class="items-center flex justify-center rounded-xl border"><img
                    src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f603.png"
                    class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
                ></div>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="items-start flex flex-col">
              <div class="mt-5">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30"
                       height="30" fill="none"
                       class="items-center flex h-8 justify-center align-middle w-8 rounded-xl border  truncate"
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
                            <path fill-rule="evenodd"
                                  d="M19.11 8.37c.17-.52.26-1.06.26-1.61 0-.9-.24-1.79-.71-2.57a5.24 5.24 0 0 0-4.53-2.59c-.37 0-.73.04-1.09.11A5.201 5.201 0 0 0 9.17 0h-.04C6.86 0 4.86 1.44 4.16 3.57A5.11 5.11 0 0 0 .71 6.04C.24 6.83 0 7.72 0 8.63c0 1.27.48 2.51 1.35 3.45-.18.52-.27 1.07-.27 1.61 0 .91.25 1.8.71 2.58 1.13 1.94 3.41 2.94 5.63 2.47a5.18 5.18 0 0 0 3.86 1.71h.05c2.26 0 4.27-1.44 4.97-3.57a5.132 5.132 0 0 0 3.45-2.47c.46-.78.7-1.67.7-2.58 0-1.28-.48-2.51-1.34-3.46ZM8.947 18.158c-.04.03-.08.05-.12.07.7.58 1.57.89 2.48.89h.01c2.14 0 3.88-1.72 3.88-3.83v-4.76c0-.02-.02-.04-.04-.05l-1.74-.99v5.75c0 .23-.13.45-.34.57l-4.13 2.35Zm-.67-1.153 4.17-2.38c.02-.01.03-.03.03-.05v-1.99l-5.04 2.87c-.21.12-.47.12-.68 0l-4.13-2.35c-.04-.02-.09-.06-.12-.07-.04.21-.06.43-.06.65 0 .67.18 1.33.52 1.92v-.01c.7 1.19 1.98 1.92 3.37 1.92.68 0 1.35-.18 1.94-.51ZM3.903 5.168v-.14c-.85.31-1.57.9-2.02 1.68a3.78 3.78 0 0 0-.52 1.91c0 1.37.74 2.64 1.94 3.33l4.17 2.37c.02.01.04.01.06 0l1.75-1-5.04-2.87a.64.64 0 0 1-.34-.57v-4.71Zm13.253 3.337-4.18-2.38c-.02 0-.04 0-.06.01l-1.74.99 5.04 2.87c.21.12.34.34.34.58v4.85c1.52-.56 2.54-1.99 2.54-3.6 0-1.37-.74-2.63-1.94-3.32ZM8.014 5.83c-.02.01-.03.03-.03.05v1.99L13.024 5a.692.692 0 0 1 .68 0l4.13 2.35c.04.02.08.05.12.07.03-.21.05-.43.05-.65 0-2.11-1.74-3.83-3.88-3.83-.68 0-1.35.18-1.94.51l-4.17 2.38Zm1.133-4.492c-2.15 0-3.89 1.72-3.89 3.83v4.76c0 .02.02.03.03.04l1.75 1v-5.75c0-.23.13-.45.34-.57l4.13-2.35c.04-.03.09-.06.12-.07-.7-.58-1.58-.89-2.48-.89ZM7.983 11.51l2.24 1.27 2.25-1.27V8.95l-2.25-1.28-2.24 1.28v2.56Z"
                                  style="fill: rgb(31, 148, 140);"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="flex flex-row-reverse text-[0.75rem] pt-1">
                <div class="text-neutral-400">6/19/2023, 11:05:01 PM</div>
              </div>
            </div>
          </div>
          <div class="flex flex-row-reverse">
            <div class="items-end flex flex-col">
              <div class="mt-5">
                <div class="items-center flex justify-center rounded-xl border"><img
                    src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f603.png"
                    class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
                ></div>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="items-start flex flex-col">
              <div class="mt-5">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30"
                       height="30" fill="none"
                       class="items-center flex h-8 justify-center align-middle w-8 rounded-xl border  truncate"
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
                            <path fill-rule="evenodd"
                                  d="M19.11 8.37c.17-.52.26-1.06.26-1.61 0-.9-.24-1.79-.71-2.57a5.24 5.24 0 0 0-4.53-2.59c-.37 0-.73.04-1.09.11A5.201 5.201 0 0 0 9.17 0h-.04C6.86 0 4.86 1.44 4.16 3.57A5.11 5.11 0 0 0 .71 6.04C.24 6.83 0 7.72 0 8.63c0 1.27.48 2.51 1.35 3.45-.18.52-.27 1.07-.27 1.61 0 .91.25 1.8.71 2.58 1.13 1.94 3.41 2.94 5.63 2.47a5.18 5.18 0 0 0 3.86 1.71h.05c2.26 0 4.27-1.44 4.97-3.57a5.132 5.132 0 0 0 3.45-2.47c.46-.78.7-1.67.7-2.58 0-1.28-.48-2.51-1.34-3.46ZM8.947 18.158c-.04.03-.08.05-.12.07.7.58 1.57.89 2.48.89h.01c2.14 0 3.88-1.72 3.88-3.83v-4.76c0-.02-.02-.04-.04-.05l-1.74-.99v5.75c0 .23-.13.45-.34.57l-4.13 2.35Zm-.67-1.153 4.17-2.38c.02-.01.03-.03.03-.05v-1.99l-5.04 2.87c-.21.12-.47.12-.68 0l-4.13-2.35c-.04-.02-.09-.06-.12-.07-.04.21-.06.43-.06.65 0 .67.18 1.33.52 1.92v-.01c.7 1.19 1.98 1.92 3.37 1.92.68 0 1.35-.18 1.94-.51ZM3.903 5.168v-.14c-.85.31-1.57.9-2.02 1.68a3.78 3.78 0 0 0-.52 1.91c0 1.37.74 2.64 1.94 3.33l4.17 2.37c.02.01.04.01.06 0l1.75-1-5.04-2.87a.64.64 0 0 1-.34-.57v-4.71Zm13.253 3.337-4.18-2.38c-.02 0-.04 0-.06.01l-1.74.99 5.04 2.87c.21.12.34.34.34.58v4.85c1.52-.56 2.54-1.99 2.54-3.6 0-1.37-.74-2.63-1.94-3.32ZM8.014 5.83c-.02.01-.03.03-.03.05v1.99L13.024 5a.692.692 0 0 1 .68 0l4.13 2.35c.04.02.08.05.12.07.03-.21.05-.43.05-.65 0-2.11-1.74-3.83-3.88-3.83-.68 0-1.35.18-1.94.51l-4.17 2.38Zm1.133-4.492c-2.15 0-3.89 1.72-3.89 3.83v4.76c0 .02.02.03.03.04l1.75 1v-5.75c0-.23.13-.45.34-.57l4.13-2.35c.04-.03.09-.06.12-.07-.7-.58-1.58-.89-2.48-.89ZM7.983 11.51l2.24 1.27 2.25-1.27V8.95l-2.25-1.28-2.24 1.28v2.56Z"
                                  style="fill: rgb(31, 148, 140);"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="flex flex-row-reverse text-[0.75rem] pt-1">
                <div class="text-neutral-400">6/19/2023, 11:31:53 PM</div>
              </div>
            </div>
          </div>
          <div class="flex flex-row-reverse">
            <div class="items-end flex flex-col">
              <div class="mt-5">
                <div class="items-center flex justify-center rounded-xl border"><img
                    src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f603.png"
                    class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
                ></div>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="items-start flex flex-col">
              <div class="mt-5">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30"
                       height="30" fill="none"
                       class="items-center flex h-8 justify-center align-middle w-8 rounded-xl border  truncate"
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
                            <path fill-rule="evenodd"
                                  d="M19.11 8.37c.17-.52.26-1.06.26-1.61 0-.9-.24-1.79-.71-2.57a5.24 5.24 0 0 0-4.53-2.59c-.37 0-.73.04-1.09.11A5.201 5.201 0 0 0 9.17 0h-.04C6.86 0 4.86 1.44 4.16 3.57A5.11 5.11 0 0 0 .71 6.04C.24 6.83 0 7.72 0 8.63c0 1.27.48 2.51 1.35 3.45-.18.52-.27 1.07-.27 1.61 0 .91.25 1.8.71 2.58 1.13 1.94 3.41 2.94 5.63 2.47a5.18 5.18 0 0 0 3.86 1.71h.05c2.26 0 4.27-1.44 4.97-3.57a5.132 5.132 0 0 0 3.45-2.47c.46-.78.7-1.67.7-2.58 0-1.28-.48-2.51-1.34-3.46ZM8.947 18.158c-.04.03-.08.05-.12.07.7.58 1.57.89 2.48.89h.01c2.14 0 3.88-1.72 3.88-3.83v-4.76c0-.02-.02-.04-.04-.05l-1.74-.99v5.75c0 .23-.13.45-.34.57l-4.13 2.35Zm-.67-1.153 4.17-2.38c.02-.01.03-.03.03-.05v-1.99l-5.04 2.87c-.21.12-.47.12-.68 0l-4.13-2.35c-.04-.02-.09-.06-.12-.07-.04.21-.06.43-.06.65 0 .67.18 1.33.52 1.92v-.01c.7 1.19 1.98 1.92 3.37 1.92.68 0 1.35-.18 1.94-.51ZM3.903 5.168v-.14c-.85.31-1.57.9-2.02 1.68a3.78 3.78 0 0 0-.52 1.91c0 1.37.74 2.64 1.94 3.33l4.17 2.37c.02.01.04.01.06 0l1.75-1-5.04-2.87a.64.64 0 0 1-.34-.57v-4.71Zm13.253 3.337-4.18-2.38c-.02 0-.04 0-.06.01l-1.74.99 5.04 2.87c.21.12.34.34.34.58v4.85c1.52-.56 2.54-1.99 2.54-3.6 0-1.37-.74-2.63-1.94-3.32ZM8.014 5.83c-.02.01-.03.03-.03.05v1.99L13.024 5a.692.692 0 0 1 .68 0l4.13 2.35c.04.02.08.05.12.07.03-.21.05-.43.05-.65 0-2.11-1.74-3.83-3.88-3.83-.68 0-1.35.18-1.94.51l-4.17 2.38Zm1.133-4.492c-2.15 0-3.89 1.72-3.89 3.83v4.76c0 .02.02.03.03.04l1.75 1v-5.75c0-.23.13-.45.34-.57l4.13-2.35c.04-.03.09-.06.12-.07-.7-.58-1.58-.89-2.48-.89ZM7.983 11.51l2.24 1.27 2.25-1.27V8.95l-2.25-1.28-2.24 1.28v2.56Z"
                                  style="fill: rgb(31, 148, 140);"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div style="user-select: text; word-break: break-word;"
                   class="bg-black text-[0.88rem] mt-3 p-3 rounded-xl border"
              >
                <div class="text-zinc-800 break-words"><p class="mb-4">在Flutter中，可以使用<code
                    class="bg-gray-400 text-[0.74rem] py-1 px-1 rounded-md"
                >Stack</code>小部件来实现类似于zStack的效果。<code
                    class="bg-gray-400 text-[0.74rem] py-1 px-1 rounded-md"
                >Stack</code>小部件允许您在单个视图中重叠多个小部件。默认情况下，<code
                    class="bg-gray-400 text-[0.74rem] py-1 px-1 rounded-md"
                >Stack</code>小部件会将所有子小部件放置在左上角，但您可以使用<code
                    class="bg-gray-400 text-[0.74rem] py-1 px-1 rounded-md"
                >Positioned</code>小部件来指定每个子小部件的位置。</p>
                  <p class="mb-4">例如，以下代码演示了如何使用<code
                      class="bg-gray-400 text-[0.74rem] py-1 px-1 rounded-md"
                  >Stack</code>小部件将两个文本小部件重叠在一起：</p>
                  <pre class="bg-gray-900 text-slate-300 text-[0.74rem] mb-4 p-4 rounded-md"><code
                      class="inline-block overflow-x-scroll rounded-md"
                  >Stack(
  children: [
    Text(
      'Hello world',
      style: TextStyle(fontSize: 24.0),
    ),
    Positioned(
      top: 16.0,
      left: 16.0,
      child: Text(
        'Subtitle',
        style: TextStyle(fontSize: 16.0),
      ),
    ),
  ],
)
</code></pre>
                  <p>在这个例子中，<code class="bg-gray-400 text-[0.74rem] py-1 px-1 rounded-md">Text('Hello
                    world')</code>小部件将被放置在左上角，而<code
                      class="bg-gray-400 text-[0.74rem] py-1 px-1 rounded-md"
                  >Text('Subtitle')</code>小部件将被放置在其上方和左侧16个逻辑像素的位置。您可以根据需要调整<code
                      class="bg-gray-400 text-[0.74rem] py-1 px-1 rounded-md"
                  >top</code>和<code class="bg-gray-400 text-[0.74rem] py-1 px-1 rounded-md">left</code>属性的值来调整子小部件的位置。
                  </p></div>
              </div>
              <div class="flex flex-row-reverse text-[0.75rem] pt-1">
                <div class="text-neutral-400">6/19/2023, 11:40:37 PM</div>
              </div>
            </div>
          </div>
          <div class="flex flex-row-reverse">
            <div class="items-end flex flex-col">
              <div class="mt-5">
                <div class="items-center flex justify-center rounded-xl border"><img
                    src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f603.png"
                    class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
                ></div>
              </div>
              <div style="user-select: text; word-break: break-word;"
                   class="bg-cyan-50 text-[0.88rem] mt-3 p-3 rounded-xl border"
              >
                <div class="text-zinc-800 break-words"><pre
                    class="bg-gray-900 text-slate-300 text-[0.74rem] mb-4 p-4 rounded-md"
                ><code class="inline-block overflow-x-scroll rounded-md">    Divider(color: Colors.grey),
</code></pre>
                  <p>如何调整粗细</p></div>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="items-start flex flex-col">
              <div class="mt-5">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30"
                       height="30" fill="none"
                       class="items-center flex h-8 justify-center align-middle w-8 rounded-xl border  truncate"
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
                            <path fill-rule="evenodd"
                                  d="M19.11 8.37c.17-.52.26-1.06.26-1.61 0-.9-.24-1.79-.71-2.57a5.24 5.24 0 0 0-4.53-2.59c-.37 0-.73.04-1.09.11A5.201 5.201 0 0 0 9.17 0h-.04C6.86 0 4.86 1.44 4.16 3.57A5.11 5.11 0 0 0 .71 6.04C.24 6.83 0 7.72 0 8.63c0 1.27.48 2.51 1.35 3.45-.18.52-.27 1.07-.27 1.61 0 .91.25 1.8.71 2.58 1.13 1.94 3.41 2.94 5.63 2.47a5.18 5.18 0 0 0 3.86 1.71h.05c2.26 0 4.27-1.44 4.97-3.57a5.132 5.132 0 0 0 3.45-2.47c.46-.78.7-1.67.7-2.58 0-1.28-.48-2.51-1.34-3.46ZM8.947 18.158c-.04.03-.08.05-.12.07.7.58 1.57.89 2.48.89h.01c2.14 0 3.88-1.72 3.88-3.83v-4.76c0-.02-.02-.04-.04-.05l-1.74-.99v5.75c0 .23-.13.45-.34.57l-4.13 2.35Zm-.67-1.153 4.17-2.38c.02-.01.03-.03.03-.05v-1.99l-5.04 2.87c-.21.12-.47.12-.68 0l-4.13-2.35c-.04-.02-.09-.06-.12-.07-.04.21-.06.43-.06.65 0 .67.18 1.33.52 1.92v-.01c.7 1.19 1.98 1.92 3.37 1.92.68 0 1.35-.18 1.94-.51ZM3.903 5.168v-.14c-.85.31-1.57.9-2.02 1.68a3.78 3.78 0 0 0-.52 1.91c0 1.37.74 2.64 1.94 3.33l4.17 2.37c.02.01.04.01.06 0l1.75-1-5.04-2.87a.64.64 0 0 1-.34-.57v-4.71Zm13.253 3.337-4.18-2.38c-.02 0-.04 0-.06.01l-1.74.99 5.04 2.87c.21.12.34.34.34.58v4.85c1.52-.56 2.54-1.99 2.54-3.6 0-1.37-.74-2.63-1.94-3.32ZM8.014 5.83c-.02.01-.03.03-.03.05v1.99L13.024 5a.692.692 0 0 1 .68 0l4.13 2.35c.04.02.08.05.12.07.03-.21.05-.43.05-.65 0-2.11-1.74-3.83-3.88-3.83-.68 0-1.35.18-1.94.51l-4.17 2.38Zm1.133-4.492c-2.15 0-3.89 1.72-3.89 3.83v4.76c0 .02.02.03.03.04l1.75 1v-5.75c0-.23.13-.45.34-.57l4.13-2.35c.04-.03.09-.06.12-.07-.7-.58-1.58-.89-2.48-.89ZM7.983 11.51l2.24 1.27 2.25-1.27V8.95l-2.25-1.28-2.24 1.28v2.56Z"
                                  style="fill: rgb(31, 148, 140);"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div style="user-select: text; word-break: break-word;"
                   class="bg-black text-[0.88rem] mt-3 p-3 rounded-xl border"
              >
                <div class="text-zinc-800 break-words"><p class="mb-4">在Flutter中，您可以使用<code
                    class="bg-gray-400 text-[0.74rem] py-1 px-1 rounded-md"
                >Divider</code>小部件来创建分隔线。要调整分隔线的粗细，可以使用<code
                    class="bg-gray-400 text-[0.74rem] py-1 px-1 rounded-md"
                >thickness</code>属性。<code class="bg-gray-400 text-[0.74rem] py-1 px-1 rounded-md">thickness</code>属性是一个<code
                    class="bg-gray-400 text-[0.74rem] py-1 px-1 rounded-md"
                >double</code>类型的值，表示分隔线的粗细。</p>
                  <p class="mb-4">例如，以下代码将创建一个颜色为灰色、粗细为2个逻辑像素的分隔线：</p>
                  <pre class="bg-gray-900 text-slate-300 text-[0.74rem] mb-4 p-4 rounded-md"><code
                      class="inline-block overflow-x-scroll rounded-md"
                  >Divider(
  color: Colors.grey,
  thickness: 2.0,
)
</code></pre>
                  <p>您可以根据需要调整<code class="bg-gray-400 text-[0.74rem] py-1 px-1 rounded-md">thickness</code>属性的值来调整分隔线的粗细。
                  </p></div>
              </div>
              <div class="flex flex-row-reverse text-[0.75rem] pt-1">
                <div class="text-neutral-400">6/19/2023, 11:47:29 PM</div>
              </div>
            </div>
          </div>
          <div class="flex flex-row-reverse">
            <div class="items-end flex flex-col">
              <div class="mt-5">
                <div class="items-center flex justify-center rounded-xl border"><img
                    src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f603.png"
                    class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
                ></div>
              </div>
              <div style="user-select: text; word-break: break-word;"
                   class="bg-cyan-50 text-[0.88rem] mt-3 p-3 rounded-xl border"
              >
                <div class="text-zinc-800 break-words"><p class="mb-4">我感觉还是不够细为啥</p>
                  <pre class="bg-gray-900 text-slate-300 text-[0.74rem] p-4 rounded-md"><code
                      class="inline-block overflow-x-scroll rounded-md"
                  >    Divider(
      color: Colors.black,
      thickness: 0.1,
    ),
</code></pre>
                </div>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="items-start flex flex-col">
              <div class="mt-5">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30"
                       height="30" fill="none"
                       class="items-center flex h-8 justify-center align-middle w-8 rounded-xl border  truncate"
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
                            <path fill-rule="evenodd"
                                  d="M19.11 8.37c.17-.52.26-1.06.26-1.61 0-.9-.24-1.79-.71-2.57a5.24 5.24 0 0 0-4.53-2.59c-.37 0-.73.04-1.09.11A5.201 5.201 0 0 0 9.17 0h-.04C6.86 0 4.86 1.44 4.16 3.57A5.11 5.11 0 0 0 .71 6.04C.24 6.83 0 7.72 0 8.63c0 1.27.48 2.51 1.35 3.45-.18.52-.27 1.07-.27 1.61 0 .91.25 1.8.71 2.58 1.13 1.94 3.41 2.94 5.63 2.47a5.18 5.18 0 0 0 3.86 1.71h.05c2.26 0 4.27-1.44 4.97-3.57a5.132 5.132 0 0 0 3.45-2.47c.46-.78.7-1.67.7-2.58 0-1.28-.48-2.51-1.34-3.46ZM8.947 18.158c-.04.03-.08.05-.12.07.7.58 1.57.89 2.48.89h.01c2.14 0 3.88-1.72 3.88-3.83v-4.76c0-.02-.02-.04-.04-.05l-1.74-.99v5.75c0 .23-.13.45-.34.57l-4.13 2.35Zm-.67-1.153 4.17-2.38c.02-.01.03-.03.03-.05v-1.99l-5.04 2.87c-.21.12-.47.12-.68 0l-4.13-2.35c-.04-.02-.09-.06-.12-.07-.04.21-.06.43-.06.65 0 .67.18 1.33.52 1.92v-.01c.7 1.19 1.98 1.92 3.37 1.92.68 0 1.35-.18 1.94-.51ZM3.903 5.168v-.14c-.85.31-1.57.9-2.02 1.68a3.78 3.78 0 0 0-.52 1.91c0 1.37.74 2.64 1.94 3.33l4.17 2.37c.02.01.04.01.06 0l1.75-1-5.04-2.87a.64.64 0 0 1-.34-.57v-4.71Zm13.253 3.337-4.18-2.38c-.02 0-.04 0-.06.01l-1.74.99 5.04 2.87c.21.12.34.34.34.58v4.85c1.52-.56 2.54-1.99 2.54-3.6 0-1.37-.74-2.63-1.94-3.32ZM8.014 5.83c-.02.01-.03.03-.03.05v1.99L13.024 5a.692.692 0 0 1 .68 0l4.13 2.35c.04.02.08.05.12.07.03-.21.05-.43.05-.65 0-2.11-1.74-3.83-3.88-3.83-.68 0-1.35.18-1.94.51l-4.17 2.38Zm1.133-4.492c-2.15 0-3.89 1.72-3.89 3.83v4.76c0 .02.02.03.03.04l1.75 1v-5.75c0-.23.13-.45.34-.57l4.13-2.35c.04-.03.09-.06.12-.07-.7-.58-1.58-.89-2.48-.89ZM7.983 11.51l2.24 1.27 2.25-1.27V8.95l-2.25-1.28-2.24 1.28v2.56Z"
                                  style="fill: rgb(31, 148, 140);"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div style="user-select: text; word-break: break-word;"
                   class="bg-black text-[0.88rem] mt-3 p-3 rounded-xl border"
              >
                <div class="text-zinc-800 break-words"><p class="mb-4">
                  好的，那我再详细一些。在Flutter中，Divider小部件用于创建分隔线。默认情况下，分隔线的颜色为灰色，并且其高度为1像素。您可以使用color属性来更改分隔线的颜色，使用thickness属性来更改其厚度。thickness属性的值是分隔线的像素值，例如thickness:
                  2.0将创建一个2像素宽的分隔线。以下是一个示例代码片段，演示如何使用Divider小部件创建分隔线并调整其厚度：</p>
                  <pre class="bg-gray-900 text-slate-300 text-[0.74rem] mb-4 p-4 rounded-md"><code
                      class="inline-block overflow-x-scroll rounded-md"
                  >Divider(
  color: Colors.black,
  thickness: 2.0,
)
</code></pre>
                  <p>
                    在这个示例中，我们将分隔线的颜色设置为黑色，并将其厚度设置为2.0像素。这将创建一个黑色的分隔线，其厚度为2像素。希望这能帮到您。</p>
                </div>
              </div>
              <div class="flex flex-row-reverse text-[0.75rem] pt-1">
                <div class="text-neutral-400">6/19/2023, 11:48:46 PM</div>
              </div>
            </div>
          </div>
          <div class="flex flex-row-reverse">
            <div class="items-end flex flex-col">
              <div class="mt-5">
                <div class="items-center flex justify-center rounded-xl border"><img
                    src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f603.png"
                    class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
                ></div>
              </div>
              <div style="user-select: text; word-break: break-word;"
                   class="bg-cyan-50 text-[0.88rem] mt-3 p-3 rounded-xl border"
              >
                <div class="text-zinc-800 break-words"><p>dart 中如何赋值长文本，类似python 的""" 语法</p></div>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="items-start flex flex-col">
              <div class="mt-5">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30"
                       height="30" fill="none"
                       class="items-center flex h-8 justify-center align-middle w-8 rounded-xl border  truncate"
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
                            <path fill-rule="evenodd"
                                  d="M19.11 8.37c.17-.52.26-1.06.26-1.61 0-.9-.24-1.79-.71-2.57a5.24 5.24 0 0 0-4.53-2.59c-.37 0-.73.04-1.09.11A5.201 5.201 0 0 0 9.17 0h-.04C6.86 0 4.86 1.44 4.16 3.57A5.11 5.11 0 0 0 .71 6.04C.24 6.83 0 7.72 0 8.63c0 1.27.48 2.51 1.35 3.45-.18.52-.27 1.07-.27 1.61 0 .91.25 1.8.71 2.58 1.13 1.94 3.41 2.94 5.63 2.47a5.18 5.18 0 0 0 3.86 1.71h.05c2.26 0 4.27-1.44 4.97-3.57a5.132 5.132 0 0 0 3.45-2.47c.46-.78.7-1.67.7-2.58 0-1.28-.48-2.51-1.34-3.46ZM8.947 18.158c-.04.03-.08.05-.12.07.7.58 1.57.89 2.48.89h.01c2.14 0 3.88-1.72 3.88-3.83v-4.76c0-.02-.02-.04-.04-.05l-1.74-.99v5.75c0 .23-.13.45-.34.57l-4.13 2.35Zm-.67-1.153 4.17-2.38c.02-.01.03-.03.03-.05v-1.99l-5.04 2.87c-.21.12-.47.12-.68 0l-4.13-2.35c-.04-.02-.09-.06-.12-.07-.04.21-.06.43-.06.65 0 .67.18 1.33.52 1.92v-.01c.7 1.19 1.98 1.92 3.37 1.92.68 0 1.35-.18 1.94-.51ZM3.903 5.168v-.14c-.85.31-1.57.9-2.02 1.68a3.78 3.78 0 0 0-.52 1.91c0 1.37.74 2.64 1.94 3.33l4.17 2.37c.02.01.04.01.06 0l1.75-1-5.04-2.87a.64.64 0 0 1-.34-.57v-4.71Zm13.253 3.337-4.18-2.38c-.02 0-.04 0-.06.01l-1.74.99 5.04 2.87c.21.12.34.34.34.58v4.85c1.52-.56 2.54-1.99 2.54-3.6 0-1.37-.74-2.63-1.94-3.32ZM8.014 5.83c-.02.01-.03.03-.03.05v1.99L13.024 5a.692.692 0 0 1 .68 0l4.13 2.35c.04.02.08.05.12.07.03-.21.05-.43.05-.65 0-2.11-1.74-3.83-3.88-3.83-.68 0-1.35.18-1.94.51l-4.17 2.38Zm1.133-4.492c-2.15 0-3.89 1.72-3.89 3.83v4.76c0 .02.02.03.03.04l1.75 1v-5.75c0-.23.13-.45.34-.57l4.13-2.35c.04-.03.09-.06.12-.07-.7-.58-1.58-.89-2.48-.89ZM7.983 11.51l2.24 1.27 2.25-1.27V8.95l-2.25-1.28-2.24 1.28v2.56Z"
                                  style="fill: rgb(31, 148, 140);"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div style="user-select: text; word-break: break-word;"
                   class="bg-black text-[0.88rem] mt-3 p-3 rounded-xl border"
              >
                <div class="text-zinc-800 break-words"><p class="mb-4">
                  在Dart中，您可以使用三个单引号或三个双引号来创建多行字符串。这种语法类似于Python中的三重引号字符串。以下是一个示例：</p>
                  <pre class="bg-gray-900 text-slate-300 text-[0.74rem] mb-4 p-4 rounded-md"><code
                      class="inline-block overflow-x-scroll rounded-md"
                  >String longText = '''
  This is a long text that spans
  across multiple lines. You can
  use three single quotes or
  three double quotes to create
  multi-line strings in Dart.
''';

print(longText);
</code></pre>
                  <p class="mb-4">
                    在上面的示例中，我们使用三个单引号来创建一个多行字符串，并将其分配给变量longText。该字符串跨越多行，包含四个句子。我们可以使用print语句来打印该字符串。</p>
                  <p class="mb-4">您还可以使用三个双引号来创建多行字符串，如下所示：</p>
                  <pre class="bg-gray-900 text-slate-300 text-[0.74rem] mb-4 p-4 rounded-md"><code
                      class="inline-block overflow-x-scroll rounded-md"
                  >String longText = """
  This is a long text that spans
  across multiple lines. You can
  use three single quotes or
  three double quotes to create
  multi-line strings in Dart.
""";
</code></pre>
                  <p>这两种方法都可以用来创建多行字符串，具体取决于您的个人偏好。</p></div>
              </div>
              <div class="flex flex-row-reverse text-[0.75rem] pt-1">
                <div class="text-neutral-400">6/20/2023, 12:07:22 AM</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-col p-3 rounded-xl border">
          <div class="flex flex-wrap">
            <div class="items-center cursor-pointer flex text-[0.75rem] mb-3 mr-1 py-1 px-3 rounded-2xl border">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"
                   fill="none" class="h-4 align-middle w-4  truncate"
              >
                <defs>
                  <path id="bottom_svg__a" d="M0 0h16v16H0z"></path>
                </defs>
                <g>
                  <mask id="bottom_svg__b" fill="#fff">
                    <use xlink:href="#bottom_svg__a"></use>
                  </mask>
                  <g>
                    <path
                        style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                        d="M8 0 4 4 0 0" transform="translate(4 4)"
                    ></path>
                    <path
                        style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                        d="M8 0 4 4 0 0" transform="translate(4 8)"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div class="items-center cursor-pointer flex text-[0.75rem] mb-3 mr-1 py-1 px-3 rounded-2xl border">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"
                   fill="none" class="h-4 align-middle w-4  truncate"
              >
                <defs>
                  <path id="auto_svg__a" d="M0 0h16v16H0z"></path>
                </defs>
                <g>
                  <mask id="auto_svg__b" fill="#fff">
                    <use xlink:href="#auto_svg__a"></use>
                  </mask>
                  <g>
                    <path style="stroke: rgb(51, 51, 51); stroke-width: 1; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                          transform="translate(5.667 5.333)"
                          d="m0 5.337.73-1.67m3.938 1.67-.73-1.67M.728 3.67 2.33 0l1.61 3.67M.73 3.667h3.21"
                    ></path>
                    <path
                        style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                        transform="translate(1.333 1.333)" d="M13.07 5.33A6.672 6.672 0 0 0 0 5.33l2-.66"
                    ></path>
                    <path
                        style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                        transform="translate(1.333 9.333)" d="M0 0a6.672 6.672 0 0 0 13.07 0l-1.74.67"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div class="items-center cursor-pointer flex text-[0.75rem] mb-3 mr-1 py-1 px-3 rounded-2xl border">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"
                   fill="none" class="h-4 align-middle w-4  truncate"
              >
                <defs>
                  <path id="prompt_svg__a" d="M0 0h16v16H0z"></path>
                </defs>
                <g>
                  <mask id="prompt_svg__b" fill="#fff">
                    <use xlink:href="#prompt_svg__a"></use>
                  </mask>
                  <g>
                    <path style="stroke: rgb(51, 51, 51); stroke-width: 1.3; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                          d="m1.367 1.367 1.41 1.41M4.667 0v2m0 0V0m3.295 1.367-1.41 1.41m0 0 1.41-1.41m1.371 3.3h-2m0 0h2m-1.37 3.295-1.41-1.41m0 0 1.41 1.41M4.666 9.333v-2m0 0v2m-3.3-1.37 1.41-1.41m0 0-1.41 1.41M0 4.666h2m0 0H0"
                          transform="translate(5.333 1.333)"
                    ></path>
                    <path
                        style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                        d="M8.01 0 0 8.01" transform="translate(1.848 6.138)"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div class="items-center cursor-pointer flex text-[0.75rem] mb-3 mr-1 py-1 px-3 rounded-2xl border">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"
                   fill="none" class="h-4 align-middle w-4  truncate"
              >
                <defs>
                  <path id="mask_svg__a" d="M0 0h16v16H0z"></path>
                </defs>
                <g>
                  <mask id="mask_svg__b" fill="#fff">
                    <use xlink:href="#mask_svg__a"></use>
                  </mask>
                  <g>
                    <path
                        style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                        d="M6 0C2.69 0 0 2.54 0 5.67s2.69 5.66 6 5.66 6-2.53 6-5.66C12 2.54 9.31 0 6 0Z"
                        transform="translate(2 3.333)"
                    ></path>
                    <path
                        style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                        d="M1 0C.45 0 0 .6 0 1.33c0 .74.45 1.34 1 1.34s1-.6 1-1.34C2 .6 1.55 0 1 0Z"
                        transform="rotate(15 -22.183 22.313)"
                    ></path>
                    <path
                        style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                        d="M1 0C.45 0 0 .6 0 1.33c0 .74.45 1.34 1 1.34s1-.6 1-1.34C2 .6 1.55 0 1 0Z"
                        transform="rotate(165 5.213 5.304)"
                    ></path>
                    <path
                        style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                        d="M4 4.51c1.04-1.04 1.15-2.74.1-3.78C3.06-.32 1.04-.2 0 .84" transform="translate(9.667 2.493)"
                    ></path>
                    <path
                        style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                        d="M.84 4.51C-.2 3.47-.32 1.77.73.73 1.77-.32 3.8-.2 4.84.84" transform="translate(1.493 2.493)"
                    ></path>
                    <path
                        style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                        d="M0 0c.17.43.73 1.09 1.67.29.93.8 1.5.14 1.66-.29" transform="translate(6.5 11.67)"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div class="items-center cursor-pointer flex text-[0.75rem] mb-3 py-1 px-3 rounded-2xl border">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"
                   fill="none" class="h-4 align-middle w-4  truncate"
              >
                <path
                    d="M13.275-.275c.261.26.392.576.392.945v10.66c0 .37-.131.684-.392.945a1.288 1.288 0 0 1-.945.392H1.67c-.37 0-.684-.13-.945-.392a1.288 1.288 0 0 1-.392-.945V.67c0-.37.13-.684.392-.945.26-.261.576-.392.945-.392h10.66c.369 0 .684.13.945.392zM1.667 11.33c0 .002 0 .003.003.003h10.66c.002 0 .003 0 .003-.003V.67c0-.002 0-.003-.003-.003H1.67c-.002 0-.003 0-.003.003z"
                    transform="translate(1 2)" style="fill: rgb(51, 51, 51);" class="opacity-100"
                ></path>
                <path
                    d="M9.763 7.507a.666.666 0 0 1-.867 0L7 5.878 5.104 7.506a.665.665 0 0 1-.867.001L2.331 5.878.434 7.506a.66.66 0 0 1-.485.16.66.66 0 0 1-.53-.338.665.665 0 0 1 .147-.834l2.33-2a.666.666 0 0 1 .867 0L4.67 6.123l1.897-1.629a.666.666 0 0 1 .868 0l1.897 1.629 1.906-1.63a.668.668 0 0 1 .867.002l2.33 2a.66.66 0 0 1 .23.455.661.661 0 0 1-.252.575.666.666 0 0 1-.846-.019l-1.897-1.628z"
                    transform="translate(1 2)" style="fill: rgb(51, 51, 51);" class="opacity-100"
                ></path>
                <g>
                  <mask id="break_svg__b" fill="#fff">
                    <use xlink:href="#break_svg__a"></use>
                  </mask>
                </g>
                <defs>
                  <path id="break_svg__a" d="M0 0h16v16H0z"></path>
                </defs>
              </svg>
            </div>
          </div>
          <div class="flex flex-grow"><textarea
              class="cursor-text h-24 break-words pb-3 pl-3.5 pr-24 w-[53.63rem] rounded-xl border"
          ></textarea>
            <button
                class="items-center bg-emerald-400 bottom-[2.00rem] text-white cursor-pointer flex h-10 justify-center left-[50.19rem] absolute right-[1.88rem] text-center top-[5.63rem] w-16 p-3 rounded-xl  truncate"
            >
              <div class="items-center flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16"
                     height="16" fill="none" class="h-4 align-middle w-4  truncate"
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
                          style="stroke: rgb(255, 255, 255); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                          transform="translate(1.333 2)" d="M0 4.71 6.67 6l1.67 6.67L12.67 0 0 4.71Z"
                      ></path>
                      <path
                          style="stroke: rgb(255, 255, 255); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                          transform="translate(8.003 6.117)" d="M0 1.89 1.89 0"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="text-[0.75rem] ml-1   truncate">发送</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
