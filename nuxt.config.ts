import { defineNuxtConfig } from "nuxt/config"
// import svgLoader from "vite-svg-loader"
import { pwa } from "./src/config/pwa"
import { appDescription } from "./src/constants"

function getGitCommitDateYMD() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { execSync } = require("child_process")
  const date = execSync("git show -s --format=%ci HEAD").toString()
  return date.slice(0, 10).replaceAll("-", "")
}

console.log(process.env.NUXT_ELECTRON)

export default defineNuxtConfig({
  srcDir: "src/",
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {},
  css: ["~/assets/scss/index.scss"],
  runtimeConfig: {
    public: {
      LATEST_COMMIT_DATE: getGitCommitDateYMD(),
      API_BASE_URL: process.env.NUXT_API_BASE_URL || "/api",
    },
  },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/device",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "@vite-pwa/nuxt",
    "@nuxt/ui",
  ].concat(process.env.NUXT_ELECTRON ? ["nuxt-electron"] : []),
  ui: {
    icons: ["mdi", "lucide"],
  },
  electron: {
    build: [
      {
        // Main-Process entry file of the Electron App.
        entry: "electron/main.ts",
        vite: {
          build: {
            lib: {
              entry: "electron/main.ts",
              formats: ["es"],
            },
          },
        },
      },
      {
        entry: "electron/preload.ts",
        vite: {
          build: {
            lib: {
              entry: "electron/preload.ts",
              formats: ["es"],
            },
          },
        },
        onstart(options) {
          // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
          // instead of restarting the entire Electron App.
          options.reload()
        },
      },
    ],
    renderer: {},
  },
  experimental: {
    appManifest: false,
  },

  colorMode: {
    classSuffix: "",
  },

  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
  },

  app: {
    head: {
      viewport: "width=device-width,initial-scale=1,user-scalable=no",
      link: [
        {
          rel: "icon",
          href: "/favicon.ico",
          sizes: "any",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/nuxt.svg",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
        },
        // {
        //   rel: "stylesheet",
        //   href: "https://rsms.me/inter/inter.css",
        // },
      ],
      script: [],
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "description",
          content: appDescription,
        },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
      ],
    },
  },

  i18n: {
    locales: ["en", "zh_CN"],
    defaultLocale: "en",
    strategy: "no_prefix",
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },

  pwa,

  devtools: {
    enabled: true,
  },
})
