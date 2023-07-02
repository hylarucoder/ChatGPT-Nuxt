import { defineNuxtConfig } from "nuxt/config"
import svgLoader from "vite-svg-loader"
import { pwa } from "./config/pwa"
import { appDescription } from "./constants"

function getGitCommitDateYMD() {
  const { execSync } = require("child_process")
  const date = execSync("git show -s --format=%ci HEAD").toString()
  return date.slice(0, 10).replaceAll("-", "")
}

export default defineNuxtConfig({
  // @ts-ignore
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["trpc-nuxt"],
  },
  css: ["@/assets/css/globals.css", "@/assets/scss/index.scss"],
  runtimeConfig: {
    public: {
      LATEST_COMMIT_DATE: getGitCommitDateYMD(),
      API_BASE_URL: process.env.NUXT_API_BASE_URL || "/api",
    },
  },
  modules: [
    "@nuxtjs/i18n",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/color-mode",
    "@vite-pwa/nuxt",
    "@nuxt/content",
  ],

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  // colorMode: {
  //   classSuffix: '',
  // },

  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ["/"],
      ignore: ["/hi"],
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
        {
          rel: "stylesheet",
          href: "https://rsms.me/inter/inter.css",
        },
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
  vite: {
    plugins: [
      svgLoader({
        // Your settings.
      }),
    ],
  },

  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },

  pwa,

  devtools: {
    enabled: true,
  },
})
