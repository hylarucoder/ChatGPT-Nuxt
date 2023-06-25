import { appDescription } from "./constants"
import { pwa } from "./config/pwa"
import svgLoader from "vite-svg-loader"

export default defineNuxtConfig({
  routeRules: {
    "/": { redirect: "/chat" },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["trpc-nuxt"],
  },
  css: ["@/assets/css/globals.css"],
  runtimeConfig: {
    // API_BASE_URL: process.env.API_BASE_URL,
    public: {
      API_BASE_URL: process.env.NUXT_API_BASE_URL || "/api",
    },
  },
  modules: ["nuxt-icon", "@vueuse/nuxt", "@pinia/nuxt", "@nuxtjs/color-mode", "@vite-pwa/nuxt"],

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
      viewport: "width=device-width,initial-scale=1",
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

  pwa,

  devtools: {
    enabled: true,
  },
})
