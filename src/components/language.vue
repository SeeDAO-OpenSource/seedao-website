<template>
  <span class="language" @click="changeLocale()">
    <img src="images/gobal.svg" />
    {{ $i18n.locale.toUpperCase() }}
  </span>
</template>

<script>
import { localeOptions } from "../constants/config";

export default {
  name: "Language",
  data() {
    return {
      localeOptions,
    };
  },
  watch: {
    "$i18n.locale"(to, from) {
      if (from !== to) {
        this.$router.go(this.$route.path);
      }
    },
  },
  methods: {
    changeLocale() {
      if (this.$i18n.locale == "en") {
        localStorage.setItem("currentLanguage", "cn");
      } else if (this.$i18n.locale == "cn") {
        localStorage.setItem("currentLanguage", "en");
      }
      window.location.reload();
    },
  },
};
</script>
<style scoped>
.language {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
}
</style>