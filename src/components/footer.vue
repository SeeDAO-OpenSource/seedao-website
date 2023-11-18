<script>
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  MailIcon
} from "vue-feather-icons"
export default {
  data() {
    return {}
  },
  components: {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    MailIcon
  },
  mounted() {
    const plugin = document.createElement("script")
    plugin.setAttribute("src", "https://substackapi.com/widget.js")
    plugin.async = true
    document.head.appendChild(plugin)
    window.CustomSubstackWidget = {
      substackUrl: "seedaogov.substack.com",
      placeholder: "example@gmail.com",
      buttonText: this.$t("Subscribe"),
      theme: "custom",
      colors: {
        primary: "#000000",
        input: "#FFFFFF",
        email: "#494848",
        text: "#04FFA4"
      }
    }
  }
}
</script>

<template>
  <div>
    <!-- Shape Start -->
    <div class="position-relative">
      <div class="shape overflow-hidden text-light">
        <svg
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <!--Shape End-->
    <!-- Footer Start -->
    <footer class="footer bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12 mb-0 pb-0 pb-md-2">
            <a href="#" class="logo-footer">
              <img
                src="images/logo-dark.png"
                class="l-light"
                height="72"
                alt=""
              />
            </a>
            <p class="mt-4 text-muted">
              {{ $t("Footer-Visions-Details") }}
            </p>
            <ul class="list-unstyled social-icon social mb-0 mt-4">
              <ul class="list-unstyled social-icon social mb-0 mt-4">
                <li class="list-inline-item">
                  <a
                    href="https://twitter.com/see_dao"
                    target="_blank"
                    class="rounded"
                  >
                    <img
                      src="images/social/twitter.png"
                      height="22"
                      alt=""
                      style="opacity: 0.3"
                    />
                  </a>
                </li>
                <li class="list-inline-item ml-1">
                  <a
                    href="https://discord.gg/seedao-xyz"
                    target="_blank"
                    class="rounded"
                  >
                    <img
                      src="images/social/discord.png"
                      height="18"
                      alt=""
                      style="opacity: 0.3"
                    />
                  </a>
                </li>
                <li class="list-inline-item ml-1">
                  <a
                    href="https://seedao.notion.site"
                    target="_blank"
                    class="rounded"
                  >
                    <img
                      src="images/social/notion.png"
                      height="22"
                      alt=""
                      style="opacity: 0.3"
                    />
                  </a>
                </li>
                <li class="list-inline-item ml-1">
                  <a
                    href="https://opensea.io/collection/seedaogenesis"
                    target="_blank"
                    class="rounded"
                  >
                    <img
                      src="images/social/opensea.png"
                      height="25"
                      alt=""
                      style="opacity: 0.3"
                    />
                  </a>
                </li>
                <li class="list-inline-item ml-1">
                  <a
                    href=" https://t.me/theseedao"
                    target="_blank"
                    class="rounded"
                  >
                    <img
                      src="images/social/telegram.png"
                      height="23"
                      alt=""
                      style="opacity: 0.3"
                    />
                  </a>
                </li>
                <li class="list-inline-item ml-1">
                  <a href="https://mirror.xyz/seedao.eth" class="rounded">
                    <img
                      src="images/social/mirror.png"
                      height="22"
                      alt=""
                      style="opacity: 0.3"
                    />
                  </a>
                </li>
              </ul>
            </ul>
            <!--end icon-->
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-dark footer-head">
              <b>{{ $t("Cooperation-Application") }}</b>
            </h5>
            <ul class="list-unstyled footer-list mt-4">
              <li>
                <a
                  href="https://tally.so/r/wLzvRG"
                  class="text-foot"
                  target="_blank"
                  ><i class="mdi mdi-chevron-right mr-1"></i>
                  {{ $t("City-Hall-Cooperation") }}</a
                >
              </li>
              <li>
                <a
                  href="https://tally.so/r/wAr0Q0"
                  class="text-foot"
                  target="_blank"
                  ><i class="mdi mdi-chevron-right mr-1"></i>
                  {{ $t("Incubator-Cooperation") }}</a
                >
              </li>
              <li>
                <a
                  href="https://tally.so/r/nG6vRj"
                  target="_blank"
                  class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i
                  >{{ $t("Bug-Reporting") }}</a
                >
              </li>
              <li>
                <router-link to="/tos" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>
                  {{ $t("Terms-of-Services") }}</router-link
                >
              </li>
              <li>
                <router-link to="/privacy" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>
                  {{ $t("Privacy-Policy") }}</router-link
                >
              </li>
            </ul>
            <h6 class="mt-4 text-dark footer-head">
              <b>{{ $t("Contact-Us") }} :</b>
            </h6>
            <p class="text-muted">
              contactus@seedao.info
            </p>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-dark footer-head">
              <b>{{ $t("Follow-SeeDAO") }}</b>
            </h5>
            <p class="mt-4 text-muted">
              {{ $t("Home-Follow-Details") }}
            </p>

            <form>
              <div class="row">
                <div class="col-lg-12">
                  <div class="foot-subscribe foot-white form-group">
                    <label class="text-muted"
                      >{{ $t("Email") }}
                      <span class="text-danger">*</span></label
                    >
                    <br />
                    <div id="custom-substack-embed"></div>
                  </div>
                </div>
              </div>
            </form>            
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
    </footer>
    <!--end footer-->
    <footer class="footer footer-bar">
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <div class="text-sm-left">
              <p class="mb-0">
                © {{ new Date().getFullYear() }} SeeDAO. All Rights Reserved.
              </p>
            </div>
          </div>
          <!--end col-->

          <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="text-sm-right">
              <p class="mb-0">
                Powered with
                <i class="mdi mdi-heart text-danger"></i> by
                <span class="text-reset">SeeDAO OS Team</span>.
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </footer>
    <!--end footer-->
  </div>
</template>
