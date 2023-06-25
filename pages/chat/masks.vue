<template>
  <div class="items-center text-zinc-800 flex flex-col justify-center w-full">
    <div class="flex justify-between p-3">
      <button
        class="items-center bg-white cursor-pointer flex h-10 justify-center text-center w-16 p-3 rounded-xl truncate"
      >
        <div class="items-center flex justify-center">
          <SvgIcon icon="return" class="w-4 h-4" />
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
          <SvgIcon icon="eye" class="w-4 h-4" />
        </div>
        <div class="ml-1 truncate text-black">查看全部</div>
      </button>
      <button
        class="items-center bg-emerald-400 text-white cursor-pointer flex h-10 justify-center ml-3 text-center w-24 p-3 rounded-xl truncate"
      >
        <div class="items-center flex justify-center">
          <SvgIcon icon="lightning" class="" style="color: white" />
        </div>
        <div class="ml-1 truncate text-white">直接开始</div>
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
            <SvgIcon icon="chatgpt" class="w-8 h-8" />
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
            <SvgIcon icon="chatgpt" class="w-8 h-8" />
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
            <SvgIcon icon="chatgpt" class="w-8 h-8" />
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
            <SvgIcon icon="chatgpt" class="w-8 h-8" />
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
            <SvgIcon icon="chatgpt" class="w-8 h-8" />
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
            <SvgIcon icon="chatgpt" class="w-8 h-8" />
          </div>
          <div class="text-[0.88rem] ml-3 truncate">新的聊天</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
