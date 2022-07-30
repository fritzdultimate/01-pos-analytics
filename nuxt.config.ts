import { defineNuxtConfig } from 'nuxt';
import postcss from "./postcss.config.js";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  build: {
    postcss: {
      postcssOptions: postcss,
    },
  }
})