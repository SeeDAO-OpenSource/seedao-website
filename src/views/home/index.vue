<script>
import {
  HelpCircleIcon,
  ArrowUpIcon,
  PlayIcon,
  SettingsIcon,
  GitMergeIcon,
  UserCheckIcon,
  CodeIcon,
  FeatherIcon,
  BoldIcon,
  EyeIcon,
  HeartIcon,
  MonitorIcon,
  UserIcon,
  MailIcon,
  KeyIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  GithubIcon,
  TwitterIcon,
  GitlabIcon,
  VideoIcon
} from "vue-feather-icons"
import countTo from "vue-count-to"
import { Carousel, Slide } from "vue-carousel"

import Navbar from "@/components/navbar"
import Events from "@/components/events"
import Portfolios from "@/components/portfolios"
import Footers from "@/components/footer"
import Features from "@/components/features"
import Contributors from "@/components/contributors"
import Pricing from "@/components/pricing"
import Proposals from "@/components/proposals"

/**
 * Index-modern Business component
 */
export default {
  data() {
    return {}
  },
  components: {
    Portfolios,
    HelpCircleIcon,
    Contributors,
    Proposals,
    Footers,
    Navbar,
    Events,
    Features,
    Pricing,
    ArrowUpIcon,
    PlayIcon,
    SettingsIcon,
    GitMergeIcon,
    UserCheckIcon,
    VideoIcon,
    CodeIcon,
    FeatherIcon,
    BoldIcon,
    EyeIcon,
    HeartIcon,
    MonitorIcon,
    UserIcon,
    MailIcon,
    InstagramIcon,
    LinkedinIcon,
    KeyIcon,
    FacebookIcon,
    GithubIcon,
    TwitterIcon,
    GitlabIcon,
    countTo,
    Carousel,
    Slide
  },
  data() {
    return {
      windowWidth: window.innerWidth
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth
    })
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize)
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>

<template>
  <div>
    <Navbar :nav-light="true" />
    <!-- Hero Start -->
    <section
      class="d-table w-100"
      style="
        background: url('images/homebg.png') center center;
        background-size: 100% auto;
      "
      id="home"
      v-if="windowWidth > 1200"
    >
      <div class="bg-half-170 container">
        <div class="row align-items-center mt-md-5">
          <div class="col-lg-6 col-md-6 order-1">
            <div class="title-heading mt-4 ml-lg-4">
              <p
                class="title-dark text-black mb-3"
                style="
                  font-weight: 700;
                  font-size: 3rem;
                  line-height: 58px;
                  color: #000000;
                "
              >
                {{ $t("Home-Cover-Title-1") }}
              </p>
              <p
                class="para-desc para-dark text-black"
                style="font-size: 24px; font-weight: 300"
              >
                <b>{{ $t("Home-Cover-Title-2") }}</b>
              </p>
              <div class="watch-video mt-4 pt-2">
                <a
                  href="https://deschool.app/zh/series/62f0adc68b90ee1aa913a965/learning"
                  class="btn mb-2 mr-2"
                  style="
                    background: #000000;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 24px;
                    color: #03ffa4;
                  "
                  target="_blank"
                >
                  {{ $t("Earn-Membership") }}
                </a>
              </div>
              <b-modal
                id="modal"
                hide-footer
                size="lg"
                header-close-variant="white"
                header-class="border-0"
                content-class="border-0"
                centered
              >
                <youtube
                  video-id="soo7cAft0pc"
                  ref="youtube"
                  width="750"
                  height="450"
                ></youtube>
              </b-modal>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-6 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 order-2">
            <div class="card shadow border-0">
              <div class="card-body" style="border-radius: 0;">
                <h5 class="card-title" style="font-family: 'Inter';">{{ $t("Home-Card-1-Title") }}</h5>
              </div>
            </div>
            <br />
            <div class="card shadow border-0">
              <div class="card-body" style="border-radius: 0">
                <h5 class="card-title">{{ $t("Home-Card-2-Title") }}</h5>
              </div>
            </div>
            <br />
            <div class="card shadow border-0">
              <div class="card-body" style="border-radius: 0">
                <h5 class="card-title">{{ $t("Home-Card-3-Title") }}</h5>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <section
      class="d-table w-100"
      style="background: url('images/homebg.png') center center;
      background-size: auto 100%;"      
      id="home"
      v-else
    >
      <div class="bg-half-170 container">
        <div class="row align-items-center mt-md-5">
          <div class="col-lg-6 col-md-6 order-1">
            <div class="title-heading mt-4 ml-lg-4">
              <p
                class="title-dark text-black mb-3"
                style="
                  font-weight: 700;
                  font-size: 3rem;
                  line-height: 58px;
                  color: #000000;
                "
              >
                {{ $t("Home-Cover-Title-1") }}
              </p>
              <p
                class="para-desc para-dark text-black"
                style="font-size: 24px; font-weight: 300"
              >
                <b>{{ $t("Home-Cover-Title-2") }}</b>
              </p>
              <div class="watch-video mt-4 pt-2">
                <a
                  href="https://deschool.app/zh/series/62f0adc68b90ee1aa913a965/learning"
                  class="btn mb-2 mr-2"
                  style="
                    background: #000000;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 24px;
                    color: #03ffa4;
                  "
                  target="_blank"
                >
                  {{ $t("Earn-Membership") }}
                </a>
              </div>
              <b-modal
                id="modal"
                hide-footer
                size="lg"
                header-close-variant="white"
                header-class="border-0"
                content-class="border-0"
                centered
              >
                <youtube
                  video-id="soo7cAft0pc"
                  ref="youtube"
                  width="750"
                  height="450"
                ></youtube>
              </b-modal>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-6 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 order-2">
            <div class="card shadow border-0">
              <div class="card-body" style="border-radius: 0">
                <h5 class="card-title">{{ $t("Home-Card-1-Title") }}</h5>
              </div>
            </div>
            <br />
            <div class="card shadow border-0">
              <div class="card-body" style="border-radius: 0">
                <h5 class="card-title">{{ $t("Home-Card-2-Title") }}</h5>
              </div>
            </div>
            <br />
            <div class="card shadow border-0">
              <div class="card-body" style="border-radius: 0">
                <h5 class="card-title">{{ $t("Home-Card-3-Title") }}</h5>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!-- Hero End -->

    <!-- Shape Start -->
    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
        <svg
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="#FBF5EF"
          ></path>
        </svg>
      </div>
    </div>
    <!--Shape End-->

    <!-- Partners start -->
    <section class="py-4 border-bottom">
      <div class="container mt-100">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">
                {{ $t("Our-Visions-1") }} {{ $t("Our-Visions-2") }}
              </h4>
              <p class="mb-0 mx-auto text-black" style="font-weight: 300">
                {{ $t("Our-Visions-Details-1") }}<br />
                {{ $t("Our-Visions-Details-2") }}
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row" id="counter">
          <div class="col-md-3 col-6 mt-4 pt-2">
            <div class="counter-box text-center">
              <img src="images/Member.svg" class="avatar avatar-small" alt="" />
              <h2 class="mb-0 mt-4">
                <countTo
                  :startVal="1"
                  :endVal="11140"
                  :duration="10000"
                ></countTo
                >+
              </h2>
              <h6 class="counter-head text-muted mt-2">
                <a href="https://discord.gg/seedao-xyz" target="_blank">{{
                  $t("Discord-Member")
                }}</a>
              </h6>
            </div>
            <!--end counter box-->
          </div>
          <div class="col-md-3 col-6 mt-4 pt-2">
            <div class="counter-box text-center">
              <img src="images/Coin.svg" class="avatar avatar-small" alt="" />
              <h2 class="mb-0 mt-4">
                <countTo
                  :startVal="1"
                  :endVal="25279900"
                  :duration="10000"
                ></countTo
                >+
              </h2>
              <h6 class="counter-head text-muted mt-2">
                <a
                  href="https://docs.qq.com/sheet/DVFhrUm1PT0xkS1JG?tab=BB08J3"
                  target="_blank"
                >
                  {{ $t("Score") }}&nbsp;SCR</a
                >
              </h6>
            </div>
            <!--end counter box-->
          </div>
          <div class="col-md-3 col-6 mt-4 pt-2">
            <div class="counter-box text-center">
              <img
                src="images/Diamond.svg"
                class="avatar avatar-small"
                alt=""
              />
              <h2 class="mb-0 mt-4">
                <countTo :startVal="1" :endVal="520" :duration="10000"></countTo
                >+
              </h2>
              <h6 class="counter-head text-muted mt-2">
                <a
                  href="https://seedao.notion.site/SGN-7b526f3f41e447d19c6011591d419df9"
                  target="_blank"
                  >{{ $t("SGN-Holder") }}</a
                >
              </h6>
            </div>
            <!--end counter box-->
          </div>
          <div class="col-md-3 col-6 mt-4 pt-2">
            <div class="counter-box text-center">
              <img src="images/Global.svg" class="avatar avatar-small" alt="" />
              <h2 class="mb-0 mt-4">
                <countTo :startVal="1" :endVal="57" :duration="10000"></countTo
                >+
              </h2>
              <h6 class="counter-head text-muted mt-2">
                <a
                  href="https://docs.qq.com/sheet/DVFhrUm1PT0xkS1JG?tab=BB08J4&u=3dde11036e394628be3066738e3f0da8"
                  target="_blank"
                  >{{ $t("Governance-Node") }}</a
                >
              </h6>
            </div>
            <!--end counter box-->
          </div>
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Partners End -->

    <!-- Partners start -->
    <section class="section mt-0 mt-md-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">{{ $t("Partners-And-Investors") }}</h4>
              <p class="text-muted para-desc mx-auto mb-0">
                {{ $t("Partners-And-Investors-Details") }}
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row justify-content-center">
          <div class="col-lg-2 col-md-2 col-4 text-center">
            <img
              src="images/client/yandz.png"
              style="-webkit-filter: grayscale(1); opacity: 0.7"
              width="80%"
            />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center">
            <img
              src="images/client/hashkey_new.png"
              style="
                margin-top: 10px;
                -webkit-filter: grayscale(1);
                opacity: 0.6;
              "
              width="80%"
            />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center">
            <img
              src="images/client/hashglobal.png"
              style="
                margin-top: 25px;
                -webkit-filter: grayscale(1);
                opacity: 0.7;
              "
              width="80%"
            />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center">
            <img
              src="images/client/masknetwork.svg"
              style="
                margin-top: 12px;
                -webkit-filter: grayscale(1);
                opacity: 0.8;
              "
              width="80%"
            />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center">
            <img
              src="images/client/nervos.png"
              style="
                margin-top: 15px;
                -webkit-filter: grayscale(1);
                opacity: 0.7;
              "
              width="80%"
            />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center">
            <img
              src="images/client/conflux.png"
              style="
                margin-top: 10px;
                -webkit-filter: grayscale(1);
                opacity: 0.7;
              "
              width="80%"
            />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center mt-3">
            <img
              src="images/client/TessVenture.png"
              style="
                margin-top: 10px;
                -webkit-filter: grayscale(1);
                opacity: 0.7;
              "
              width="80%"
            />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center mt-3">
            <img
              src="images/client/rebase.png"
              style="-webkit-filter: grayscale(1); opacity: 0.7"
              width="60%"
            />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center mt-3">
            <img
              src="images/client/chainide.png"
              style="
                -webkit-filter: grayscale(1);
                filter: invert(1);
                opacity: 0.6;
              "
              width="90%"
            />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center mt-3">
            <img
              src="images/client/initiatecapital.png"
              style="-webkit-filter: grayscale(1); -webkit-filter: contrast(1%)"
              width="90%"
            />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center mt-3">
            <img
              src="images/client/ethsign.png"
              style="-webkit-filter: grayscale(1); opacity: 0.8"
              width="90%"
            />
          </div>
          <div class="col-lg-2 col-md-2 col-4 text-center mt-3">
            <img
              src="images/client/nftscan.png"
              style="
                -webkit-filter: grayscale(1);
                -webkit-filter: contrast(10%);
              "
              width="90%"
            />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center mt-3">
            <img
              src="images/client/sendingme.svg"
              style="
                -webkit-filter: grayscale(1);
                filter: invert(1);
                opacity: 0.6;
              "
              width="100%"
            />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center mt-3">
            <img
              src="images/client/unipass.svg"
              style="
                -webkit-filter: grayscale(1);
                filter: invert(1);
                opacity: 0.6;
              "
              width="90%"
            />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center mt-3">
            <img
              src="images/client/dotbit.png"
              style="-webkit-filter: grayscale(1); opacity: 0.6"
              width="60%"
            />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center mt-3">
            <img
              src="images/client/wormhole3.png"
              style="
                margin-top: 5px;
                -webkit-filter: grayscale(1);
                opacity: 0.7;
              "
              width="100%"
            />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center mt-3">
            <img
              src="images/client/plunckerdao.png"
              style="-webkit-filter: grayscale(1); opacity: 0.6"
              width="100%"
            />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center mt-3">
            <img
              src="images/client/buildcities.png"
              style="
                margin-top: 5px;
                -webkit-filter: grayscale(1);
                filter: invert(1);
                -webkit-filter: contrast(1%);
                opacity: 0.6;
              "
              width="80%"
            />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center mt-3">
            <img
              src="images/client/sellix.png"
              style="
                margin-top: 5px;
                -webkit-filter: grayscale(1);
                opacity: 0.7;
              "
              width="60%"
            />
          </div>
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->


    <!-- Feature Start -->
    <section class="section">

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">{{ $t("Our-Portfolio") }}</h4>
              <p class="mb-0 mx-auto text-black" style="font-weight: 300">
                {{ $t("Our-Portfolio-Details") }} :
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
        <Portfolios />
      </div>
      <!--end container-->



      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">{{ $t("Current-Events") }}</h4>
              <p class="mb-0 mx-auto text-black" style="font-weight: 300">
                {{ $t("Current-Events-Details-1") }}&nbsp;{{
                  $t("Current-Events-Details-2")
                }}
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
        <Events />
        <div class="row justify-content-center mt-3">
          <a
            href="https://seedao.notion.site/46c3294dc6ae440b993a63f05c1753bd?v=5e32c6f3181d462f88e77014b5b44b6b"
            target="_blank"
            class="btn mt-3"
            style="background-color: #03ffa4; color: #ffffff"
            >{{ $t("More-Events") }}
          </a>
        </div>
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">{{ $t("Current-Bounties") }}</h4>
              <p class="mb-0 mx-auto text-black" style="font-weight: 300">
                {{ $t("Current-Bounties-Details-1") }}<br />
                {{ $t("Current-Bounties-Details-2") }}
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div class="col-12 mt-4 pt-2">
            <carousel
              id="customer-testi"
              ref="carousel"
              dir="ltr"
              :per-page="2"
              class="owl-carousel owl-theme"
              :autoplay="true"
              :loop="true"
            >
              <slide>
                <div
                  class="card customer-testi text-center border rounded mx-2 h-100"
                  style="border: 1px solid rgba(166, 166, 166, 1) !important"
                >
                  <div
                    class="card-body d-flex flex-column justify-content-between"
                  >
                    <div class="border-bottom">
                      <h5 class="mb-0 position">
                        <router-link to="/page-job-detail" class="text-dark"
                          >一起构建程序员的未来，打造ProgrammerX平台</router-link
                        >
                      </h5>
                      <ul class="list-unstyled head mt-3 mb-3">
                        <li class="badge badge-success badge-pill">招募中</li>
                        &nbsp;
                        <li class="badge badge-primary badge-pill">外部招募</li>
                      </ul>
                    </div>
                    <div
                      class="card-body content position-relative d-flex flex-column justify-content-between"
                    >
                      <div class="company-detail text-center">
                        <h5 class="mb-0">
                          <router-link
                            to="/page-job-company"
                            class="text-dark company-name"
                            >{{
                              $t("Rewards")
                            }}
                            &nbsp;:&nbsp;嗯，可以想象到的美好未来。</router-link
                          >
                        </h5>
                        <br />
                        <p class="text-muted">
                          <a
                            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                            class="video-play-icon text-muted"
                          >
                            {{
                              $t("Required-Skills")
                            }}&nbsp;:&nbsp;所有愿意为共同目标服务的人。
                          </a>
                        </p>
                      </div>
                      <div class="">
                        <ul class="job-facts list-unstyled text-left ml-5">
                          <li class="text-muted">
                            <font color="black"
                              ><b>{{ $t("Deadline") }} :</b></font
                            >
                            长期
                          </li>
                          <li class="text-muted">
                            <font color="black"
                              ><b>{{ $t("Recruiter") }} :</b></font
                            >
                            Lamsanren
                          </li>
                          <li class="text-muted">
                            <font color="black"
                              ><b>{{ $t("Contact-Information") }} :</b></font
                            >
                            微信 oltwor_Franklin
                          </li>
                        </ul>
                        <a
                          href="https://seedao.notion.site/ProgrammerX-ace6d0af90c9472d9b29c7d23c01f17b"
                          target="_blank"
                          class="btn btn-outline-primary btn-block"
                          >{{ $t("Apply-Now") }}</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </slide>
              <slide>
                <div
                  class="card customer-testi text-center border rounded mx-2 h-100"
                  style="border: 1px solid rgba(166, 166, 166, 1) !important"
                >
                  <div class="card-body">
                    <div class="border-bottom">
                      <h5 class="mb-0 position">
                        <router-link to="/page-job-detail" class="text-dark"
                          >树洞计划：听SeeDAO小伙伴讲故事</router-link
                        >
                      </h5>
                      <ul class="list-unstyled head mt-3 mb-3">
                        <li class="badge badge-success badge-pill">招募中</li>
                        &nbsp;
                        <li class="badge badge-warning badge-pill">项目招募</li>
                      </ul>
                    </div>
                    <div class="card-body content position-relative">
                      <div class="company-detail text-center">
                        <h5 class="mb-0">
                          <router-link
                            to="/page-job-company"
                            class="text-dark company-name"
                            >{{
                              $t("Rewards")
                            }}
                            &nbsp;:&nbsp;如有需求，可以为你的故事整理文字稿</router-link
                          >
                        </h5>
                        <br />
                        <p class="text-muted">
                          <a
                            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                            class="video-play-icon text-muted"
                          >
                            {{ $t("Required-Skills") }}&nbsp;:&nbsp; 无
                          </a>
                        </p>
                      </div>
                      <ul class="job-facts list-unstyled text-left ml-5">
                        <li class="text-muted">
                          <font color="black"
                            ><b>{{ $t("Deadline") }} :</b></font
                          >
                          2023.8.31
                        </li>
                        <li class="text-muted">
                          <font color="black"
                            ><b>{{ $t("Recruiter") }} :</b></font
                          >
                          DNAF
                        </li>
                        <li class="text-muted">
                          <font color="black"
                            ><b>{{ $t("Contact-Information") }} :</b></font
                          >
                          Discord: DANF#2371
                        </li>
                      </ul>
                      <a
                        href="https://seedao.notion.site/SeeDAO-7cb7894312d948eab0be28ac2cc8758c"
                        target="_blank"
                        class="btn btn-outline-primary btn-block"
                        >{{ $t("Apply-Now") }}</a
                      >
                    </div>
                  </div>
                </div>
              </slide>
              <slide>
                <div
                  class="card customer-testi text-center border rounded mx-2 h-100"
                  style="border: 1px solid rgba(166, 166, 166, 1) !important"
                >
                  <div
                    class="card-body d-flex flex-column justify-content-between"
                  >
                    <div class="border-bottom">
                      <h5 class="mb-0 position">
                        <router-link to="/page-job-detail" class="text-dark"
                          >SeeDAO口述史项目招募采访者！</router-link
                        >
                      </h5>
                      <ul class="list-unstyled head mt-3 mb-3">
                        <li class="badge badge-danger badge-pill">新手任务</li>
                      </ul>
                    </div>
                    <div
                      class="card-body content position-relative d-flex flex-column justify-content-between"
                    >
                      <div class="company-detail text-center">
                        <h5 class="mb-0">
                          <router-link
                            to="/page-job-company"
                            class="text-dark company-name"
                            >{{ $t("Rewards") }}&nbsp;:&nbsp;1000 积分 +
                            SBT</router-link
                          >
                        </h5>
                        <br />
                        <p class="text-muted">
                          <a
                            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                            class="video-play-icon text-muted"
                          >
                            {{ $t("Required-Skills") }}&nbsp;:&nbsp;
                            乐于沟通，喜欢和人聊天，善于挖掘故事。
                          </a>
                        </p>
                      </div>
                      <ul class="job-facts list-unstyled text-left ml-5">
                        <li class="text-muted">
                          <font color="black"
                            ><b>{{ $t("Deadline") }} :</b></font
                          >
                          无
                        </li>
                        <li class="text-muted">
                          <font color="black"
                            ><b>{{ $t("Recruiter") }} :</b></font
                          >
                          栗子
                        </li>
                        <li class="text-muted">
                          <font color="black"
                            ><b>{{ $t("Contact-Information") }} :</b></font
                          >
                          Discord: 栗子#8207
                        </li>
                      </ul>
                      <a
                        href="https://seedao.notion.site/SeeDAO-ad4a180f9d9e4c6aac4ca4bdee51919a"
                        target="_blank"
                        class="btn btn-outline-primary btn-block"
                        >{{ $t("Apply-Now") }}</a
                      >
                    </div>
                  </div>
                </div>
              </slide>
              <slide>
                <div
                  class="card customer-testi text-center border rounded mx-2 h-100"
                  style="border: 1px solid rgba(166, 166, 166, 1) !important"
                >
                  <div class="card-body">
                    <div class="border-bottom">
                      <h5 class="mb-0 position">
                        <router-link to="/page-job-detail" class="text-dark"
                          >招募 “SeeDAO考古家” 考古SeeDAO频道历史！</router-link
                        >
                      </h5>
                      <ul class="list-unstyled head mt-3 mb-3">
                        <li class="badge badge-danger badge-pill">新手任务</li>
                      </ul>
                    </div>
                    <div class="card-body content position-relative">
                      <div class="company-detail text-center">
                        <h5 class="mb-0">
                          <router-link
                            to="/page-job-company"
                            class="text-dark company-name"
                            >{{ $t("Rewards") }}&nbsp;:&nbsp;1000 积分 +
                            SBT</router-link
                          >
                        </h5>
                        <br />
                        <p class="text-muted">
                          <a
                            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                            class="video-play-icon text-muted"
                          >
                            {{ $t("Required-Skills") }}&nbsp;:&nbsp;
                            对SeeDAO有兴趣，有一定耐心和闲暇，对考古报告的形式有一定的想法。
                          </a>
                        </p>
                      </div>
                      <ul class="job-facts list-unstyled text-left ml-5">
                        <li class="text-muted">
                          <font color="black"
                            ><b>{{ $t("Deadline") }} :</b></font
                          >
                          无
                        </li>
                        <li class="text-muted">
                          <font color="black"
                            ><b>{{ $t("Recruiter") }} :</b></font
                          >
                          栗子
                        </li>
                        <li class="text-muted">
                          <font color="black"
                            ><b>{{ $t("Contact-Information") }} :</b></font
                          >
                          Discord: 栗子#8207
                        </li>
                      </ul>
                      <a
                        href="https://seedao.notion.site/SeeDAO-ad4a180f9d9e4c6aac4ca4bdee51919a"
                        target="_blank"
                        class="btn btn-outline-primary btn-block"
                        >{{ $t("Apply-Now") }}</a
                      >
                    </div>
                  </div>
                </div>
              </slide>
            </carousel>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row justify-content-center mt-3">
          <a
            href="https://seedao.notion.site/73d83a0a258d4ac5afa57a997114755a?v=6c4c36dbcdc74e97af55d02664ef2fb2"
            target="_blank"
            class="btn mt-3"
            style="background-color: #03ffa4; color: #ffffff"
            >{{ $t("More-Bounties") }}
          </a>
        </div>
      </div>
      <!--end container-->

      <div class="container mt-60 mt-100">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">{{ $t("Three-Levels-Proposals") }}</h4>
              <p class="mb-0 mx-auto text-black" style="font-weight: 300">
                {{ $t("Three-Levels-Proposals-Details-1") }}
                <a
                  href="https://forum.seedao.xyz/thread/search-42436"
                  target="_blank"
                  class="text-primary font-weight-bold"
                  >SIP-54</a
                >，
                {{ $t("Three-Levels-Proposals-Details-2") }}
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
        <Proposals />
        <!--end row-->
      </div>
      <!--end container-->

      <!-- <div class="container mt-100 mt-60"> -->
      <!-- <div class="row justify-content-center"> -->
      <!-- <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">{{ $t("Current-Proposals") }}</h4>
              <p class="text-muted para-desc mx-auto mb-0">
                {{ $t("Current-Proposals-Details-1") }}<br />
                {{ $t("Current-Proposals-Details-2") }}
              </p>
            </div>
          </div> -->
      <!--end col-->
      <!-- </div> -->
      <!--end row-->

      <!-- <div class="row">
          <div class="col-12 mt-2">
            <div class="media align-items-center shadow rounded p-4 features">
              <div class="icons m-0 rounded h2 text-primary text-center px-3">
                <i class="uil uil-clipboard-alt"></i>
              </div>
              <div class="content ml-4">
                <h5 class="mb-1">
                  <a href="javascript:void(0)" class="text-dark">提案 1</a>
                </h5>
                <p class="text-muted mb-0">
                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </p>
              </div>
            </div>
          </div>
          

          <div class="col-12 mt-4">
            <div class="media align-items-center shadow rounded p-4 features">
              <div class="icons m-0 rounded h2 text-primary text-center px-3">
                <i class="uil uil-usd-circle"></i>
              </div>
              <div class="content ml-4">
                <h5 class="mb-1">
                  <a href="javascript:void(0)" class="text-dark">提案 2</a>
                </h5>
                <p class="text-muted mb-0">
                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </p>
              </div>
            </div>
          </div>
         

          <div class="col-12 mt-4">
            <div class="media align-items-center shadow rounded p-4 features">
              <div class="icons m-0 rounded h2 text-primary text-center px-3">
                <i class="uil uil-award"></i>
              </div>
              <div class="content ml-4">
                <h5 class="mb-1">
                  <a href="javascript:void(0)" class="text-dark">提案 3</a>
                </h5>
                <p class="text-muted mb-0">
                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </p>
              </div>
            </div>
          </div>
        </div>-->
      <!-- </div>  -->
      <!--end container-->

      <div class="container mt-60 mt-100">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">{{ $t("Contributor-Identity") }}</h4>
              <p class="mb-0 mx-auto text-black" style="font-weight: 300">
                {{ $t("Contributor-Identity-Details-1") }}
                <a
                  href="https://forum.seedao.xyz/thread/search-42436"
                  target="_blank"
                  class="text-primary font-weight-bold"
                  >SIP-54</a
                >，
                {{ $t("Contributor-Identity-Details-2") }}
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
        <Contributors class="mt-4" />
      </div>
      <div class="container mt-60 mt-100">
        <div
          class="row mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center"
        >
          <div class="col-12 text-center">
            <div class="section-title">
              <h4 class="title mb-4">{{ $t("SBT-Introduction") }}</h4>
              <p class="text-muted para-desc mx-auto">
                {{ $t("According") }}
                <a
                  href="https://forum.seedao.xyz/thread/sip-55-seedao-sbt-42467"
                  target="_blank"
                  class="text-primary font-weight-bold"
                  >SIP-55</a
                >
                {{ $t("SBT-Introduction-Details") }}
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
        <div class="row mt-4">
          <div class="col-md-6 col-12">
            <div class="media">
              <div class="media-body">
                <h5 class="mt-0 text-center">
                  {{ $t("Role-SBT") }}
                </h5>
                <p class="answer text-muted mb-0">
                  {{ $t("Role-SBT-Details") }}
                </p>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="media">
              <div class="media-body">
                <h5 class="mt-0 text-center">
                  {{ $t("Education-SBT") }}
                </h5>
                <p class="answer text-muted mb-0">
                  {{ $t("Education-SBT-Details") }}
                </p>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-6 col-12 mt-4 pt-2">
            <div class="media">
              <div class="media-body">
                <h5 class="mt-0 text-center">
                  {{ $t("Event-SBT") }}
                </h5>
                <p class="answer text-muted mb-0">
                  {{ $t("Event-SBT-Details") }}
                </p>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-6 col-12 mt-4 pt-2">
            <div class="media">
              <div class="media-body">
                <h5 class="mt-0 text-center">
                  {{ $t("Project-SBT") }}
                </h5>
                <p class="answer text-muted mb-0">
                  {{ $t("Project-SBT-Details") }}
                </p>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
        <div class="mt-4 pt-2 text-center">
          <a
            href="https://www.ensoul.io"
            target="_blank"
            class="btn"
            style="
              border-radius: 5px;
              background: #000000;
              font-style: normal;
              font-weight: 600;
              font-size: 20px;
              line-height: 24px;
              color: #03ffa4;
            "
            >{{ $t("Read-More") }} <i class="mdi mdi-arrow-right"></i
          ></a>
        </div>
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">{{ $t("FAQ") }}</h4>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row justify-content-center">
          <div class="col-12">
            <div class="card shadow border-0 rounded">
              <div class="card-body">
                <div class="faq-content mt-4">
                  <div class="accordion" id="accordionExampleone">
                    <b-card no-body class="mb-2 border-0 rounded">
                      <b-card-header class="border-0 bg-light p-3 pr-5">
                        <a
                          class="faq position-relative text-dark"
                          v-b-toggle.accordion-1
                          href="javascript: void(0);"
                        >
                          <h6 class="title mb-0">
                            {{ $t("Home-FAQ-1-Title") }}
                          </h6>
                        </a>
                      </b-card-header>
                      <b-collapse
                        id="accordion-1"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body class="px-2 py-4">
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-1-Details-1") }}
                          </p>
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-1-Details-2") }}
                          </p>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-2 border-0 rounded">
                      <b-card-header class="border-0 bg-light p-3 pr-5">
                        <a
                          class="faq position-relative text-dark"
                          v-b-toggle.accordion-2
                          href="javascript: void(0);"
                        >
                          <h6 class="title mb-0">
                            {{ $t("Home-FAQ-2-Title") }}
                          </h6>
                        </a>
                      </b-card-header>
                      <b-collapse
                        id="accordion-2"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body class="px-2 py-4">
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-2-Details-1") }}
                          </p>
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-2-Details-2") }}
                          </p>
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-2-Details-3") }}
                          </p>
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-2-Details-4") }}
                          </p>
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-2-Details-5") }}
                          </p>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-2 border-0 rounded">
                      <b-card-header class="border-0 bg-light p-3 pr-5">
                        <a
                          class="faq position-relative text-dark"
                          v-b-toggle.accordion-3
                          href="javascript: void(0);"
                        >
                          <h6 class="title mb-0">
                            {{ $t("Home-FAQ-3-Title") }}
                          </h6>
                        </a>
                      </b-card-header>
                      <b-collapse
                        id="accordion-3"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body class="px-2 py-4">
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-3-Details-1") }}
                          </p>
                          <p>
                            →
                            <a
                              href="https://deschool.app/zh/series/62f0adc68b90ee1aa913a965/learning"
                              target="_blank"
                              >SeeDAO {{ $t("Onboarding-Video") }}</a
                            >
                          </p>
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-3-Details-2") }}
                          </p>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-2 border-0 rounded">
                      <b-card-header class="border-0 bg-light p-3 pr-5">
                        <a
                          class="faq position-relative text-dark"
                          v-b-toggle.accordion-4
                          href="javascript: void(0);"
                        >
                          <h6 class="title mb-0">
                            {{ $t("Home-FAQ-4-Title") }}
                          </h6>
                        </a>
                      </b-card-header>
                      <b-collapse
                        id="accordion-4"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body class="px-2 py-4">
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-4-Details-1") }}
                          </p>
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-4-Details-2") }}
                          </p>
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-4-Details-3") }}
                          </p>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-2 border-0 rounded">
                      <b-card-header class="border-0 bg-light p-3 pr-5">
                        <a
                          class="faq position-relative text-dark"
                          v-b-toggle.accordion-5
                          href="javascript: void(0);"
                        >
                          <h6 class="title mb-0">
                            {{ $t("Home-FAQ-5-Title") }}
                          </h6>
                        </a>
                      </b-card-header>
                      <b-collapse
                        id="accordion-5"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body class="px-2 py-4">
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-5-Details-1") }}
                          </p>
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-5-Details-2") }}
                          </p>
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-5-Details-3") }}
                          </p>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-2 border-0 rounded">
                      <b-card-header class="border-0 bg-light p-3 pr-5">
                        <a
                          class="faq position-relative text-dark"
                          v-b-toggle.accordion-6
                          href="javascript: void(0);"
                        >
                          <h6 class="title mb-0">
                            {{ $t("Home-FAQ-6-Title") }}
                          </h6>
                        </a>
                      </b-card-header>
                      <b-collapse
                        id="accordion-6"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body class="px-2 py-4">
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-6-Details-1") }}
                          </p>
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-6-Details-2") }}
                          </p>
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-6-Details-3") }}
                          </p>
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-6-Details-4") }}
                          </p>
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-6-Details-5") }}
                          </p>
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-6-Details-6") }}
                          </p>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>
                </div>

                <div class="row justify-content-center mt-3">
                  <a
                    href="https://deschool.app/zh/series/62f0adc68b90ee1aa913a965/learning"
                    target="_blank"
                    class="btn mt-2 mr-2"
                    style="
                      border-radius: 5px;
                      background: #000000;
                      font-style: normal;
                      font-weight: 600;
                      font-size: 15px;
                      line-height: 24px;
                      color: #03ffa4;
                    "
                    >{{ $t("Join-Us-for-More-Information") }}</a
                  >
                </div>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

    </section>
    <!--end section-->
    <!-- About End -->

    <Footers />

    <!-- Back to top -->
    <a
      href="#"
      class="btn btn-icon btn-primary back-to-top"
      id="back-to-top"
      v-scroll-to="'#topnav'"
    >
      <arrow-up-icon class="icons"></arrow-up-icon>
    </a>
    <!-- Back to top -->
  </div>
</template>

<style>
.modal-content {
  background-color: transparent;
}
</style>
