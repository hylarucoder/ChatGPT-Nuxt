<template>
  <div class="items-center text-zinc-800 flex flex-col justify-center">
    <div class="flex justify-between p-3">
      <button
        class="items-center bg-white cursor-pointer flex h-10 justify-center text-center w-16 p-3 rounded-xl truncate"
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
              <path id="left_svg__a" d="M0 0h16v16H0z"></path>
            </defs>
            <g>
              <mask id="left_svg__b" fill="#fff">
                <use xlink:href="#left_svg__a"></use>
              </mask>
              <g>
                <path
                  style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                  d="M4 8 0 4l4-4"
                  transform="translate(6.333 4)"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <div class="text-[0.75rem] ml-1 truncate">返回</div>
      </button>
    </div>
    <div class="flex mb-5 mt-12">
      <div class="bg-white h-16 py-5 px-3 w-12 border-neutral-200 rounded-2xl border">
        <img
          src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f606.png"
          class="text-[1.50rem] h-6 align-middle w-6 overflow-clip"
        />
      </div>
      <div class="bg-white h-16 py-5 px-3 w-12 border-neutral-200 rounded-2xl border">
        <img
          src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f916.png"
          class="text-[1.50rem] h-6 align-middle w-6 overflow-clip"
        />
      </div>
      <div class="bg-white h-16 py-5 px-3 w-12 border-neutral-200 rounded-2xl border">
        <img
          src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f479.png"
          class="text-[1.50rem] h-6 align-middle w-6 overflow-clip"
        />
      </div>
    </div>
    <div class="text-[2.00rem] font-bold mb-2">挑选一个面具</div>
    <div>现在开始，与面具背后的灵魂思维碰撞</div>
    <div class="flex text-[0.75rem] justify-center mb-5 mt-12">
      <button
        class="items-center bg-white cursor-pointer flex h-10 justify-center text-center w-24 p-3 border-neutral-200 rounded-xl border truncate"
      >
        <div class="items-center flex justify-center">
          <svg
            width="800"
            height="800"
            viewbox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-[50.00rem] align-middle w-4 truncate"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.301 15.577C4.778 14.268 3.691 12.773 3.18 12c.51-.773 1.598-2.268 3.121-3.577C7.874 7.072 9.816 6 12 6c2.184 0 4.126 1.072 5.699 2.423 1.523 1.309 2.61 2.804 3.121 3.577-.51.773-1.598 2.268-3.121 3.577C16.126 16.928 14.184 18 12 18c-2.184 0-4.126-1.072-5.699-2.423ZM12 4C9.148 4 6.757 5.395 4.998 6.906c-1.765 1.517-2.99 3.232-3.534 4.064a1.876 1.876 0 0 0 0 2.06c.544.832 1.769 2.547 3.534 4.064C6.758 18.605 9.148 20 12 20c2.852 0 5.243-1.395 7.002-2.906 1.765-1.517 2.99-3.232 3.534-4.064.411-.628.411-1.431 0-2.06-.544-.832-1.769-2.547-3.534-4.064C17.242 5.395 14.852 4 12 4Zm-2 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
              fill="#000"
            ></path>
          </svg>
        </div>
        <div class="ml-1 truncate">查看全部</div>
      </button>
      <button
        class="items-center bg-emerald-400 text-white cursor-pointer flex h-10 justify-center ml-3 text-center w-24 p-3 rounded-xl truncate"
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
            <g>
              <mask id="lightning_svg__b" fill="#fff">
                <use xlink:href="#lightning_svg__a"></use>
              </mask>
              <g>
                <path
                  d="M2.248 8.852a.665.665 0 0 1-.172-.828l3.67-7a.664.664 0 0 1 .59-.357h6a.662.662 0 0 1 .634.46.669.669 0 0 1-.11.618l-2.822 3.592h3.629a.661.661 0 0 1 .605.387.663.663 0 0 1-.116.732l-8 8.66a.664.664 0 0 1-.893.078.66.66 0 0 1-.257-.441.66.66 0 0 1 .016-.26L6.472 9H2.666a.657.657 0 0 1-.42-.148zm1.52-1.185h3.569a.665.665 0 0 1 .644.836l-.986 3.74 5.148-5.573H8.667a.665.665 0 0 1-.63-.885.662.662 0 0 1 .105-.194L10.965 2H6.74z"
                  style="fill: rgb(51, 51, 51)"
                  class="opacity-100"
                ></path>
              </g>
            </g>
            <defs>
              <path id="lightning_svg__a" d="M0 0h16v16H0z"></path>
            </defs>
          </svg>
        </div>
        <div class="ml-1 truncate">直接开始</div>
      </button>
    </div>
    <div class="items-center flex-grow pt-5">
      <div class="flex mb-3">
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f69b.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">后勤工作</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="30"
              height="30"
              fill="none"
              class="items-center flex h-8 justify-center align-middle w-8 rounded-xl border truncate"
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
          <div class="text-[0.88rem] ml-3 truncate">新的聊天</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f5bc-fe0f.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">以文搜图</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f638.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">文案写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f978.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">机器学习</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f69b.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">后勤工作</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f469-200d-1f4bc.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">职业顾问</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f638.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">文案写手</div>
        </div>
      </div>
      <div class="flex mb-3 ml-12">
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f69b.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">后勤工作</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f9d1-200d-1f3eb.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">英专写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f4da.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">语言检测器</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f4d5.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">小红书写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f4d1.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">简历写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f469-200d-2695-fe0f.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">心理医生</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f4b8.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">创业点子王</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f47e.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">GitHub Copilot</div>
        </div>
      </div>
      <div class="flex mb-3">
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f9d1-200d-1f3eb.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">英专写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/270d-fe0f.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">互联网写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f63e.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">心灵导师</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f47e.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">GitHub Copilot</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f916.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">Prompt Improvement</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/2328-fe0f.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">CAN</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f60e.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">Expert</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f469-200d-2695-fe0f.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">心理医生</div>
        </div>
      </div>
      <div class="flex mb-3 ml-12">
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f63e.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">心灵导师</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="30"
              height="30"
              fill="none"
              class="items-center flex h-8 justify-center align-middle w-8 rounded-xl border truncate"
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
          <div class="text-[0.88rem] ml-3 truncate">新的聊天</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f5bc-fe0f.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">以文搜图</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f638.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">文案写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f978.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">机器学习</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f69b.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">后勤工作</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f469-200d-1f4bc.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">职业顾问</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="30"
              height="30"
              fill="none"
              class="items-center flex h-8 justify-center align-middle w-8 rounded-xl border truncate"
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
          <div class="text-[0.88rem] ml-3 truncate">新的聊天</div>
        </div>
      </div>
      <div class="flex mb-3">
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f9d1-200d-1f3eb.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">英专写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f9d1-200d-1f3eb.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">英专写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f4da.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">语言检测器</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f4d5.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">小红书写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f4d1.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">简历写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f469-200d-2695-fe0f.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">心理医生</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f4b8.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">创业点子王</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f916.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">Prompt Improvement</div>
        </div>
      </div>
      <div class="flex mb-3 ml-12">
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f4da.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">语言检测器</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/270d-fe0f.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">互联网写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f63e.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">心灵导师</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f47e.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">GitHub Copilot</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f916.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">Prompt Improvement</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/2328-fe0f.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">CAN</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f60e.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">Expert</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f469-200d-1f4bc.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">职业顾问</div>
        </div>
      </div>
      <div class="flex mb-3">
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f978.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">机器学习</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="30"
              height="30"
              fill="none"
              class="items-center flex h-8 justify-center align-middle w-8 rounded-xl border truncate"
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
          <div class="text-[0.88rem] ml-3 truncate">新的聊天</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f5bc-fe0f.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">以文搜图</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f638.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">文案写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f978.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">机器学习</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f69b.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">后勤工作</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f469-200d-1f4bc.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">职业顾问</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f4b8.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">创业点子王</div>
        </div>
      </div>
      <div class="flex mb-3 ml-12">
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/2328-fe0f.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">CAN</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f9d1-200d-1f3eb.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">英专写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f4da.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">语言检测器</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f4d5.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">小红书写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f4d1.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">简历写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f469-200d-2695-fe0f.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">心理医生</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f4b8.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">创业点子王</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f638.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">文案写手</div>
        </div>
      </div>
      <div class="flex mb-3">
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f9d1-200d-1f3eb.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">英专写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/270d-fe0f.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">互联网写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f63e.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">心灵导师</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f47e.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">GitHub Copilot</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f916.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">Prompt Improvement</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/2328-fe0f.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">CAN</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f60e.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">Expert</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f47e.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">GitHub Copilot</div>
        </div>
      </div>
      <div class="flex mb-3 ml-12">
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f638.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">文案写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="30"
              height="30"
              fill="none"
              class="items-center flex h-8 justify-center align-middle w-8 rounded-xl border truncate"
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
          <div class="text-[0.88rem] ml-3 truncate">新的聊天</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f5bc-fe0f.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">以文搜图</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f638.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">文案写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f978.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">机器学习</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f69b.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">后勤工作</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f469-200d-1f4bc.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">职业顾问</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f63e.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">心灵导师</div>
        </div>
      </div>
      <div class="flex mb-3">
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/2328-fe0f.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">CAN</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f9d1-200d-1f3eb.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">英专写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f4da.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">语言检测器</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f4d5.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">小红书写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f4d1.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">简历写手</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f469-200d-2695-fe0f.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">心理医生</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div class="items-center flex justify-center rounded-xl border">
            <img
              src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f4b8.png"
              class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
            />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">创业点子王</div>
        </div>
        <div class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="30"
              height="30"
              fill="none"
              class="items-center flex h-8 justify-center align-middle w-8 rounded-xl border truncate"
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
          <div class="text-[0.88rem] ml-3 truncate">新的聊天</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
