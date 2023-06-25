<template>
  <div class="flex flex-col w-full">
    <div class="items-center flex justify-between p-3.5 border-gray-200 border">
      <div class="truncate">
        <div class="text-[1.25rem] font-bold truncate">设置</div>
        <div class="text-[0.88rem] mt-1">设置选项</div>
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
                  <path id="clear_svg__a" d="M0 0h16v16H0z"></path>
                </defs>
                <g>
                  <mask id="clear_svg__b" fill="#fff">
                    <use xlink:href="#clear_svg__a"></use>
                  </mask>
                  <g>
                    <path
                      style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                      transform="translate(2.667 5)"
                      d="M1 9.67h8.67l1-9.67H0l1 9.67Z"
                    ></path>
                    <path
                      style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                      transform="translate(6.667 8.334)"
                      d="M0 0v3.33"
                    ></path>
                    <path
                      style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                      transform="translate(9.334 8.333)"
                      d="M0 0v3.33"
                    ></path>
                    <path
                      style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                      transform="translate(4 1)"
                      d="m0 4 5.44-4L8 4"
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
                  <path id="reload_svg__a" d="M0 0h16v16H0z"></path>
                </defs>
                <g>
                  <mask id="reload_svg__b" fill="#fff">
                    <use xlink:href="#reload_svg__a"></use>
                  </mask>
                  <g>
                    <path
                      style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                      transform="translate(14 2.667)"
                      d="M0 0v5.33"
                    ></path>
                    <path
                      style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                      transform="translate(2 8)"
                      d="M0 0v5.33"
                    ></path>
                    <path
                      style="stroke: rgb(51, 51, 51); stroke-width: 1.333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                      transform="translate(2 2)"
                      d="M12.003 6a6.005 6.005 0 0 0-10.32-4.17M0 6a6.005 6.005 0 0 0 10.17 4.32"
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
                  <path id="close_svg__a" d="M0 0h16v16H0z"></path>
                </defs>
                <g>
                  <mask id="close_svg__b" fill="#fff">
                    <use xlink:href="#close_svg__a"></use>
                  </mask>
                  <g>
                    <path
                      style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                      transform="translate(2.667 2.667)"
                      d="m0 0 10.67 10.67M0 10.67 10.67 0"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="p-5">
      <div class="mb-5 rounded-xl border">
        <div class="items-center flex justify-between py-3 px-5 border-gray-200 border">
          <div class="items-center flex">
            <div class="text-[0.88rem] font-bold">
              <div>UID</div>
            </div>
          </div>
          <div class="cursor-pointer"><p>#1</p></div>
        </div>
        <div class="items-center flex justify-between py-3 px-5 border-gray-200 border">
          <div class="items-center flex">
            <div class="text-[0.88rem] font-bold">
              <div>头像</div>
            </div>
          </div>
          <div class="z-[2]">
            <div class="cursor-pointer">
              <div class="items-center flex justify-center border-neutral-200 rounded-xl border">
                <img
                  src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f603.png"
                  class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="items-center flex justify-between py-3 px-5 border-gray-200 border">
          <div class="items-center flex">
            <div class="text-[0.88rem] font-bold">
              <div>当前版本：20230607</div>
              <div class="text-[0.75rem]">发现新版本：19700101</div>
            </div>
          </div>
          <a
            href="https://github.com/hylarucoder/Best Prompts Hub#keep-updated"
            class="text-emerald-400 cursor-pointer text-[0.75rem]"
            >前往更新</a
          >
        </div>
        <div class="items-center flex justify-between py-3 px-5 border-gray-200 border">
          <div class="items-center flex">
            <div class="text-[0.88rem] font-bold">
              <div>发送键</div>
            </div>
          </div>
          <div class="relative">
            <select
              class="items-center cursor-pointer inline-block h-12 pl-3 pr-6 text-center w-32 border-neutral-200 rounded-xl border"
            >
              <option value="Enter" class="px-1">Enter</option>
              <option value="Ctrl + Enter" class="px-1">Ctrl + Enter</option>
              <option value="Shift + Enter" class="px-1">Shift + Enter</option>
              <option value="Alt + Enter" class="px-1">Alt + Enter</option>
              <option value="Meta + Enter" class="px-1">Meta + Enter</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="16"
              height="16"
              fill="none"
              class="bottom-[0.44rem] h-4 left-[6.81rem] absolute right-[0.63rem] top-[1.44rem] align-middle w-4 truncate"
            >
              <defs>
                <path id="down_svg__a" d="M0 0h16v16H0z"></path>
              </defs>
              <g>
                <mask id="down_svg__b" fill="#fff">
                  <use xlink:href="#down_svg__a"></use>
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
        </div>
        <div class="items-center flex justify-between py-3 px-5 border-gray-200 border">
          <div class="items-center flex">
            <div class="text-[0.88rem] font-bold">
              <div>主题</div>
            </div>
          </div>
          <div class="relative">
            <select
              class="items-center cursor-pointer inline-block h-12 pl-3 pr-6 text-center w-16 border-neutral-200 rounded-xl border"
            >
              <option value="auto" class="px-1">auto</option>
              <option value="dark" class="px-1">dark</option>
              <option value="light" class="px-1">light</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="16"
              height="16"
              fill="none"
              class="bottom-[0.44rem] h-4 left-[2.81rem] absolute right-[0.63rem] top-[1.44rem] align-middle w-4 truncate"
            >
              <defs>
                <path id="down_svg__a" d="M0 0h16v16H0z"></path>
              </defs>
              <g>
                <mask id="down_svg__b" fill="#fff">
                  <use xlink:href="#down_svg__a"></use>
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
        </div>
        <div class="items-center flex justify-between py-3 px-5 border-gray-200 border">
          <div class="items-center flex">
            <div class="text-[0.88rem] font-bold">
              <div>Language</div>
            </div>
          </div>
          <div class="relative">
            <select
              class="items-center cursor-pointer inline-block h-12 pl-3 pr-6 text-center w-28 border-neutral-200 rounded-xl border"
            >
              <option value="en" class="px-1">English</option>
              <option value="cn" class="px-1">简体中文</option>
              <option value="tw" class="px-1">繁體中文</option>
              <option value="fr" class="px-1">Français</option>
              <option value="es" class="px-1">Español</option>
              <option value="it" class="px-1">Italiano</option>
              <option value="tr" class="px-1">Türkçe</option>
              <option value="jp" class="px-1">日本語</option>
              <option value="de" class="px-1">Deutsch</option>
              <option value="vi" class="px-1">Tiếng Việt</option>
              <option value="ru" class="px-1">Русский</option>
              <option value="cs" class="px-1">Čeština</option>
              <option value="ko" class="px-1">한국어</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="16"
              height="16"
              fill="none"
              class="bottom-[0.44rem] h-4 left-[5.50rem] absolute right-[0.63rem] top-[1.44rem] align-middle w-4 truncate"
            >
              <defs>
                <path id="down_svg__a" d="M0 0h16v16H0z"></path>
              </defs>
              <g>
                <mask id="down_svg__b" fill="#fff">
                  <use xlink:href="#down_svg__a"></use>
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
        </div>
        <div class="items-center flex justify-between py-3 px-5 border-gray-200 border">
          <div class="items-center flex">
            <div class="text-[0.88rem] font-bold">
              <div>字体大小</div>
              <div class="text-[0.75rem]">聊天内容的字体大小</div>
            </div>
          </div>
          <div class="flex text-[0.75rem] py-1 px-3 pr-3.5 border-neutral-200 rounded-xl border">
            14px<input value="14" type="range" class="h-5 text-center w-32" />
          </div>
        </div>
        <div class="items-center flex justify-between py-3 px-5 border-gray-200 border">
          <div class="items-center flex">
            <div class="text-[0.88rem] font-bold">
              <div>预览气泡</div>
              <div class="text-[0.75rem]">在预览气泡中预览 Markdown 内容</div>
            </div>
          </div>
          <input
            style="
              background-image: url('data:image/svg+xml,%3csvg viewBox=\'0 0 16 16\' fill=\'white\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath d=\'M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z\'/%3e%3c/svg%3e');
              background-position: 50% 50%;
              background-size: 100% 100%;
            "
            type="checkbox"
            class="items-center bg-zinc-800 bg-no-repeat cursor-pointer flex h-4 justify-center text-center align-middle w-4 rounded border"
          />
        </div>
        <div class="items-center flex justify-between py-3 px-5">
          <div class="items-center flex">
            <div class="text-[0.88rem] font-bold">
              <div>面具启动页</div>
              <div class="text-[0.75rem]">新建聊天时，展示面具启动页</div>
            </div>
          </div>
          <input
            style="
              background-image: url('data:image/svg+xml,%3csvg viewBox=\'0 0 16 16\' fill=\'white\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath d=\'M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z\'/%3e%3c/svg%3e');
              background-position: 50% 50%;
              background-size: 100% 100%;
            "
            type="checkbox"
            class="items-center bg-zinc-800 bg-no-repeat cursor-pointer flex h-4 justify-center text-center align-middle w-4 rounded border"
          />
        </div>
      </div>
      <div class="mb-5 rounded-xl border">
        <div class="items-center flex justify-between py-3 px-5 border-gray-200 border">
          <div class="items-center flex">
            <div class="text-[0.88rem] font-bold">
              <div>API Key</div>
              <div class="text-[0.75rem]">使用自己的 Key 可绕过密码访问限制</div>
            </div>
          </div>
          <div class="flex justify-end">
            <button
              class="items-center cursor-pointer flex h-9 justify-center mr-1 text-center w-9 p-3 rounded-xl truncate"
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
                    d="M19.707 5.707a1 1 0 0 0-1.414-1.414l-4.261 4.26a4 4 0 0 0-5.478 5.478l-4.261 4.262a1 1 0 1 0 1.414 1.414l4.261-4.26a4 4 0 0 0 5.478-5.478l4.261-4.262Zm-7.189 4.36a2 2 0 0 0-2.45 2.45l2.45-2.45Zm-1.036 3.865 2.45-2.45a2 2 0 0 1-2.45 2.45Zm4.283-9.111C14.63 4.32 13.367 4 12 4 9.148 4 6.757 5.395 4.998 6.906c-1.765 1.517-2.99 3.232-3.534 4.064a1.876 1.876 0 0 0 0 2.06 20.304 20.304 0 0 0 2.748 3.344l1.414-1.414A18.315 18.315 0 0 1 3.18 12c.51-.773 1.598-2.268 3.121-3.577C7.874 7.072 9.816 6 12 6a7.06 7.06 0 0 1 2.22.367l1.545-1.546ZM12 18a7.06 7.06 0 0 1-2.22-.367L8.236 19.18c1.136.5 2.398.821 3.765.821 2.852 0 5.243-1.395 7.002-2.906 1.765-1.517 2.99-3.232 3.534-4.064.411-.628.411-1.431 0-2.06a20.303 20.303 0 0 0-2.748-3.344L18.374 9.04A18.312 18.312 0 0 1 20.82 12c-.51.773-1.598 2.268-3.121 3.577C16.126 16.928 14.184 18 12 18Z"
                    fill="#000"
                  ></path>
                </svg>
              </div>
            </button>
            <input
              value=""
              type="password"
              placeholder="OpenAI API Key"
              class="cursor-text h-9 px-3 text-center w-52 border-neutral-200 rounded-xl border"
            />
          </div>
        </div>
        <div class="items-center flex justify-between py-3 px-5">
          <div class="items-center flex">
            <div class="text-[0.88rem] font-bold">
              <div>余额查询</div>
              <div class="text-[0.75rem]">本月已使用 $[?]，订阅总额 $[?]</div>
            </div>
          </div>
          <button class="items-center cursor-pointer flex h-10 justify-center text-center w-24 p-3 rounded-xl truncate">
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
                  <path id="reload_svg__a" d="M0 0h16v16H0z"></path>
                </defs>
                <g>
                  <mask id="reload_svg__b" fill="#fff">
                    <use xlink:href="#reload_svg__a"></use>
                  </mask>
                  <g>
                    <path
                      style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                      transform="translate(14 2.667)"
                      d="M0 0v5.33"
                    ></path>
                    <path
                      style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                      transform="translate(2 8)"
                      d="M0 0v5.33"
                    ></path>
                    <path
                      style="stroke: rgb(51, 51, 51); stroke-width: 1.333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                      transform="translate(2 2)"
                      d="M12.003 6a6.005 6.005 0 0 0-10.32-4.17M0 6a6.005 6.005 0 0 0 10.17 4.32"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div class="text-[0.75rem] ml-1 truncate">重新检查</div>
          </button>
        </div>
      </div>
      <div class="mb-5 rounded-xl border">
        <div class="items-center flex justify-between py-3 px-5 border-gray-200 border">
          <div class="items-center flex">
            <div class="text-[0.88rem] font-bold">
              <div>禁用提示词自动补全</div>
              <div class="text-[0.75rem]">在输入框开头输入 / 即可触发自动补全</div>
            </div>
          </div>
          <input
            type="checkbox"
            class="items-center cursor-pointer flex h-4 justify-center text-center align-middle w-4 border-neutral-200 rounded border"
          />
        </div>
        <div class="items-center flex justify-between py-3 px-5">
          <div class="items-center flex">
            <div class="text-[0.88rem] font-bold">
              <div>自定义提示词列表</div>
              <div class="text-[0.75rem]">内置 0 条，用户定义 0 条</div>
            </div>
          </div>
          <button class="items-center cursor-pointer flex h-10 justify-center text-center w-16 p-3 rounded-xl truncate">
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
                  <path id="edit_svg__a" d="M0 0h16v16H0z"></path>
                </defs>
                <g>
                  <mask id="edit_svg__b" fill="#fff">
                    <use xlink:href="#edit_svg__a"></use>
                  </mask>
                  <g>
                    <path
                      style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                      transform="translate(10.5 11)"
                      d="M2.83 0v3c0 .37-.3.67-.66.67H0"
                    ></path>
                    <path
                      style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                      transform="translate(2.667 1.333)"
                      d="M10.67 4V.67c0-.37-.3-.67-.67-.67H.67C.3 0 0 .3 0 .67v12c0 .36.3.66.67.66h2"
                    ></path>
                    <path
                      style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                      transform="translate(5.333 5.333)"
                      d="M0 0h4.67"
                    ></path>
                    <path
                      style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                      transform="translate(7.667 7.667)"
                      d="m0 7 5.67-7"
                    ></path>
                    <path
                      style="stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0"
                      transform="translate(5.333 8)"
                      d="M0 0h2.67"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div class="text-[0.75rem] ml-1 truncate">编辑</div>
          </button>
        </div>
      </div>
      <div class="mb-5 rounded-xl border">
        <div class="items-center flex justify-between py-3 px-5 border-gray-200 border">
          <div class="items-center flex">
            <div class="text-[0.88rem] font-bold">
              <div>模型 (model)</div>
            </div>
          </div>
          <div class="relative">
            <select
              class="items-center cursor-pointer inline-block h-12 pl-3 pr-6 text-center w-80 border-neutral-200 rounded-xl border"
            >
              <option value="gpt-4" class="px-1">gpt-4</option>
              <option value="gpt-4-0314" class="px-1">gpt-4-0314</option>
              <option value="gpt-4-32k" class="px-1">gpt-4-32k</option>
              <option value="gpt-4-32k-0314" class="px-1">gpt-4-32k-0314</option>
              <option value="gpt-4-mobile" class="px-1">gpt-4-mobile</option>
              <option value="text-davinci-002-render-sha-mobile" class="px-1">
                text-davinci-002-render-sha-mobile
              </option>
              <option value="gpt-3.5-turbo" class="px-1">gpt-3.5-turbo</option>
              <option value="gpt-3.5-turbo-0301" class="px-1">gpt-3.5-turbo-0301</option>
              <option value="qwen-v1" class="text-zinc-500 px-1">qwen-v1</option>
              <option value="ernie" class="text-zinc-500 px-1">ernie</option>
              <option value="spark" class="text-zinc-500 px-1">spark</option>
              <option value="llama" class="text-zinc-500 px-1">llama</option>
              <option value="chatglm" class="text-zinc-500 px-1">chatglm</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="16"
              height="16"
              fill="none"
              class="bottom-[0.44rem] h-4 left-[17.88rem] absolute right-[0.63rem] top-[1.44rem] align-middle w-4 truncate"
            >
              <defs>
                <path id="down_svg__a" d="M0 0h16v16H0z"></path>
              </defs>
              <g>
                <mask id="down_svg__b" fill="#fff">
                  <use xlink:href="#down_svg__a"></use>
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
        </div>
        <div class="items-center flex justify-between py-3 px-5 border-gray-200 border">
          <div class="items-center flex">
            <div class="text-[0.88rem] font-bold">
              <div>随机性 (temperature)</div>
              <div class="text-[0.75rem]">值越大，回复越随机</div>
            </div>
          </div>
          <div class="flex text-[0.75rem] py-1 px-3 pr-3.5 border-neutral-200 rounded-xl border">
            0.5<input value="0.5" type="range" class="h-5 text-center w-32" />
          </div>
        </div>
        <div class="items-center flex justify-between py-3 px-5 border-gray-200 border">
          <div class="items-center flex">
            <div class="text-[0.88rem] font-bold">
              <div>单次回复限制 (max_tokens)</div>
              <div class="text-[0.75rem]">单次交互所用的最大 Token 数</div>
            </div>
          </div>
          <input
            value="2000"
            type="number"
            class="cursor-text h-9 px-3 text-center w-20 border-neutral-200 rounded-xl border"
          />
        </div>
        <div class="items-center flex justify-between py-3 px-5 border-gray-200 border">
          <div class="items-center flex">
            <div class="text-[0.88rem] font-bold">
              <div>话题新鲜度 (presence_penalty)</div>
              <div class="text-[0.75rem]">值越大，越有可能扩展到新话题</div>
            </div>
          </div>
          <div class="flex text-[0.75rem] py-1 px-3 pr-3.5 border-neutral-200 rounded-xl border">
            0.0<input value="0.0" type="range" class="h-5 text-center w-32" />
          </div>
        </div>
        <div class="items-center flex justify-between py-3 px-5 border-gray-200 border">
          <div class="items-center flex">
            <div class="text-[0.88rem] font-bold">
              <div>附带历史消息数</div>
              <div class="text-[0.75rem]">每次请求携带的历史消息数</div>
            </div>
          </div>
          <div class="flex text-[0.75rem] py-1 px-3 pr-3.5 border-neutral-200 rounded-xl border">
            4<input value="4" type="range" class="h-5 text-center w-32" />
          </div>
        </div>
        <div class="items-center flex justify-between py-3 px-5 border-gray-200 border">
          <div class="items-center flex">
            <div class="text-[0.88rem] font-bold">
              <div>历史消息长度压缩阈值</div>
              <div class="text-[0.75rem]">当未压缩的历史消息超过该值时，将进行压缩</div>
            </div>
          </div>
          <input
            value="1000"
            type="number"
            class="cursor-text h-9 px-3 text-center w-20 border-neutral-200 rounded-xl border"
          />
        </div>
        <div class="items-center flex justify-between py-3 px-5">
          <div class="items-center flex">
            <div class="text-[0.88rem] font-bold">
              <div>历史摘要</div>
              <div class="text-[0.75rem]">自动压缩聊天记录并作为上下文发送</div>
            </div>
          </div>
          <input
            style="
              background-image: url('data:image/svg+xml,%3csvg viewBox=\'0 0 16 16\' fill=\'white\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath d=\'M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z\'/%3e%3c/svg%3e');
              background-position: 50% 50%;
              background-size: 100% 100%;
            "
            type="checkbox"
            class="items-center bg-zinc-800 bg-no-repeat cursor-pointer flex h-4 justify-center text-center align-middle w-4 rounded border"
          />
        </div>
      </div>
    </div>
  </div>
</template>
