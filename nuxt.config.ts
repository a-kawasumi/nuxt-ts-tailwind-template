import { NuxtConfig } from "@nuxt/types";
import { resolve } from 'path'

const config: NuxtConfig = {
  ssr: false,
  srcDir: 'src/',
  alias: {
    '~': resolve(__dirname, './src'),
  },
  server: {
    port: 8000
  },
  head: {
    title: "nuxt-typescript-tailwindcss-template",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  plugins: [],
  components: true,
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  modules: [],
  tailwindcss: {
    exposeConfig: true,
    jit: true,
    // tailwindチートシート
    viewer: false
  },
  build: {
    extend(conf, ctx) {
       if (ctx.isDev && ctx.isClient && conf?.module) {
          // 保存時のeslint
          conf.module.rules.push({
           enforce: "pre",
           test: /\.(js|vue)$/,
           loader: "eslint-loader",
           exclude: /(node_modules)/
          })
       }
     }
   }
};

export default config;
