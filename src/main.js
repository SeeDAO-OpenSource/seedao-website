import Vue from "vue"
import App from "./App.vue"
import router from "./router"

Vue.config.productionTip = false

import "../public/css/materialdesignicons.min.css"
import "swiper/swiper-bundle.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import { BootstrapVue } from "bootstrap-vue"
var VueScrollTo = require("vue-scrollto")
import Scrollspy from "vue2-scrollspy"
import VueYoutube from "vue-youtube"
import vueVimeoPlayer from "vue-vimeo-player"
import VueMasonry from "vue-masonry-css"

Vue.use(VueScrollTo, {
  duration: 3000,
  easing: "ease"
})

Vue.use(BootstrapVue)
Vue.use(Scrollspy)
Vue.use(VueYoutube)
Vue.use(vueVimeoPlayer)
Vue.use(VueMasonry)

// Multi Language Add
import en from "./locales/en.json"
import cn from "./locales/zh_CN.json"
import { defaultLocale, localeOptions } from "./constants/config"
import VueI18n from "vue-i18n"
Vue.use(VueI18n)

const messages = { en: en, cn: cn }
const CURRENT_LANGUAGE = "currentLanguage"
const locale =
  localStorage.getItem(CURRENT_LANGUAGE) &&
  localeOptions.filter((x) => x.id === localStorage.getItem(CURRENT_LANGUAGE))
    .length > 0
    ? localStorage.getItem(CURRENT_LANGUAGE)
    : defaultLocale
const i18n = new VueI18n({
  locale: locale,
  fallbackLocale: "cn",
  messages,
  silentTranslationWarn: true
})

import { Plugin } from 'vue-responsive-video-background-player'
Vue.use(Plugin);

new Vue({
  i18n,
  router,
  render: (h) => h(App)
}).$mount("#app")
