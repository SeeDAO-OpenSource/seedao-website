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
import { ethers } from "ethers";
import { Carousel, Slide } from "vue-carousel"

import Navbar from "@/components/navbar"
import Events from "@/components/events"
import Portfolios from "@/components/portfolios"
import Footers from "@/components/footer"
import Features from "@/components/features"
import Contributors from "@/components/contributors"
import Pricing from "@/components/pricing"
import Proposals from "@/components/proposals"

const SCR_CONTRACT = '0xc74dee15a4700d5df797bdd3982ee649a3bb8c6c';
const SEED_CONTRACT = '0x30093266E34a816a53e302bE3e59a93B52792FD4';
const GOV_NODE_CONTRACT = '0x9d34D407D8586478b3e4c39BE633ED3D7be1c80c';

const ABI_TOTAL_SUPPLY = [
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
]

const getNftsByContract = (contract_address, token_id) => {
  return fetch(`https://restapi.nftscan.com/api/v2/assets/${contract_address}/${token_id}?show_attribute=false`, {
    headers: {
      'X-API-KEY': process.env.VUE_APP_NFTSCAN_KEY,
    },
  })
};

const getDiscordMembers = () => {
  return fetch(`${process.env.VUE_APP_BASE_ENDPOINT}/v1/public_data/discord_member_count`)
}
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
      windowWidth: window.innerWidth,
      scrAmount: 0,
      seedAmount: 0,
      s4Amount: 0,
      discordAmount: 0,
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth
    })
    this.getAmounts();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize)
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
    },
    getAmounts() {
      const provider = new ethers.providers.StaticJsonRpcProvider(
        'https://eth-mainnet.g.alchemy.com/v2/YuNeXto27ejHnOIGOwxl2N_cHCfyLyLE',
      );
      this.getSCR(provider);
      this.getSeed(provider);
      this.getS4Nodes();
      this.getDiscordNumbers();
    },
    async getDiscordNumbers() {
      try {
        const res = await getDiscordMembers();
        const resp = await res.json();
        this.discordAmount = resp.data.approximate_member_count;
      } catch (error) {
        console.error('getDiscordNumbers error', error);
      }
    },
    async getS4Nodes() {
      try {
        const res = await getNftsByContract(GOV_NODE_CONTRACT, 4)
        const resp = await res.json();
        this.s4Amount = Number(resp.data.amount);
      } catch (error) {
        console.error('getNodes error', error);
      }
    },
    async getSeed(provider) {
      try {
        const contract = new ethers.Contract(SEED_CONTRACT, ABI_TOTAL_SUPPLY, provider);
        const supply = await contract.totalSupply();
        this.seedAmount = supply.toNumber();
      } catch (error) {
        console.error('getSeed error', error);
      }
    },
    async getSCR(provider) {
      try {
        const contract = new ethers.Contract(SCR_CONTRACT, ABI_TOTAL_SUPPLY, provider);
        const supply = await contract.totalSupply();
        this.scrAmount = Number(ethers.utils.formatEther(supply));
      } catch (error) {
        console.error('getSCR error', error);
      }
    }
  }
}
</script>

<template>
  <div>
    <Navbar :nav-light="true" />
  <!-- Hero Start -->
    <section class="d-table w-100" style="
            background: url('images/homebg.png') center center;
            background-size: 100% auto;
          " id="home" v-if="windowWidth > 1200">
      <div class="bg-half-170 container">
        <div class="row align-items-center mt-md-5">
          <div class="col-lg-6 col-md-6 order-1">
            <div class="title-heading mt-4 ml-lg-4">
              <p class="title-dark text-black mb-3" style="
                      font-weight: 700;
                      font-size: 3rem;
                      line-height: 58px;
                      color: #000000;
                  ">
                {{ $t("Home-Cover-Title-1") }}
              </p>
              <p class="para-desc para-dark text-black" style="font-size: 24px; font-weight: 300">
                <b>{{ $t("Home-Cover-Title-2") }}</b>
              </p>
              <div class="watch-video mt-4 pt-2">
                <a href="https://deschool.app/zh/series/62f0adc68b90ee1aa913a965/learning" class="btn mb-2 mr-2" style="
                        background: #000000;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 20px;
                        line-height: 24px;
                        color: #03ffa4;
                      " target="_blank">
                  {{ $t("Earn-Membership") }}
                </a>
              </div>
              <b-modal id="modal" hide-footer size="lg" header-close-variant="white" header-class="border-0"
                content-class="border-0" centered>
                <youtube video-id="soo7cAft0pc" ref="youtube" width="750" height="450"></youtube>
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
    <section class="d-table w-100" style="background: url('images/homebg.png') center center;
          background-size: auto 100%;" id="home" v-else>
      <div class="bg-half-170 container">
        <div class="row align-items-center mt-md-5">
          <div class="col-lg-6 col-md-6 order-1">
            <div class="title-heading mt-4 ml-lg-4">
              <p class="title-dark text-black mb-3" style="
                      font-weight: 700;
                      font-size: 3rem;
                      line-height: 58px;
                      color: #000000;
                    ">
                {{ $t("Home-Cover-Title-1") }}
              </p>
              <p class="para-desc para-dark text-black" style="font-size: 24px; font-weight: 300">
                <b>{{ $t("Home-Cover-Title-2") }}</b>
              </p>
              <div class="watch-video mt-4 pt-2">
                <a href="https://deschool.app/zh/series/62f0adc68b90ee1aa913a965/learning" class="btn mb-2 mr-2" style="
                        background: #000000;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 20px;
                        line-height: 24px;
                        color: #03ffa4;
                      " target="_blank">
                  {{ $t("Earn-Membership") }}
                </a>
              </div>
              <b-modal id="modal" hide-footer size="lg" header-close-variant="white" header-class="border-0"
                content-class="border-0" centered>
                <youtube video-id="soo7cAft0pc" ref="youtube" width="750" height="450"></youtube>
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
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="#FBF5EF"></path>
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
                <countTo :startVal="1" :endVal="discordAmount" :duration="2000"></countTo>+
              </h2>
              <h6 class="counter-head text-muted mt-2">
                <a href="https://discord.gg/seedao" target="_blank">{{
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
                <countTo :startVal="1" :endVal="scrAmount" :duration="2000"></countTo>
              </h2>
              <h6 class="counter-head text-muted mt-2">
                <a href="https://app.seedao.xyz/assets" target="_blank"> {{ $t("Score") }}&nbsp;SCR</a>
                <!-- <a href="https://docs.qq.com/sheet/DVFhrUm1PT0xkS1JG?tab=BB08J3" target="_blank">
                    {{ $t("Score") }}&nbsp;SCR</a> -->
              </h6>
            </div>
            <!--end counter box-->
          </div>
          <div class="col-md-3 col-6 mt-4 pt-2">
            <div class="counter-box text-center">
              <img src="images/Diamond.svg" class="avatar avatar-small" alt="" />
              <h2 class="mb-0 mt-4">
                <countTo :startVal="1" :endVal="seedAmount" :duration="2000"></countTo>
              </h2>
              <h6 class="counter-head text-muted mt-2">
                <a href="https://opensea.io/collection/seedaoseed" target="_blank"> {{ $t("SEED-Holder") }}</a>
                <!-- <a href="https://seedao.notion.site/SGN-7b526f3f41e447d19c6011591d419df9" target="_blank">{{
                    $t("SEED-Holder") }}</a> -->
              </h6>
            </div>
            <!--end counter box-->
          </div>
          <div class="col-md-3 col-6 mt-4 pt-2">
            <div class="counter-box text-center">
              <img src="images/Global.svg" class="avatar avatar-small" alt="" />
              <h2 class="mb-0 mt-4">
                <countTo :startVal="1" :endVal="s4Amount" :duration="2000"></countTo>
              </h2>
              <h6 class="counter-head text-muted mt-2">
                <a href="https://docs.qq.com/sheet/DVFhrUm1PT0xkS1JG?tab=BB08J4&u=3dde11036e394628be3066738e3f0da8"
                  target="_blank">{{ $t("Governance-Node") }}</a>
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
            <img src="images/client/yandz.png" style="-webkit-filter: grayscale(1); opacity: 0.7" width="80%" />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center">
            <img src="images/client/hashkey_new.png" style="
                    margin-top: 10px;
                    -webkit-filter: grayscale(1);
                    opacity: 0.6;
                  " width="80%" />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center">
            <img src="images/client/hashglobal.png" style="
                    margin-top: 25px;
                    -webkit-filter: grayscale(1);
                    opacity: 0.7;
                  " width="80%" />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center">
            <img src="images/client/masknetwork.svg" style="
                    margin-top: 12px;
                    -webkit-filter: grayscale(1);
                    opacity: 0.8;
                  " width="80%" />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center">
            <img src="images/client/nervos.png" style="
                    margin-top: 15px;
                    -webkit-filter: grayscale(1);
                    opacity: 0.7;
                  " width="80%" />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center">
            <img src="images/client/conflux.png" style="
                    margin-top: 10px;
                    -webkit-filter: grayscale(1);
                    opacity: 0.7;
                  " width="80%" />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center mt-3">
            <img src="images/client/TessVenture.png" style="
                    margin-top: 10px;
                    -webkit-filter: grayscale(1);
                    opacity: 0.7;
                  " width="80%" />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center mt-3">
            <img src="images/client/rebase.png" style="-webkit-filter: grayscale(1); opacity: 0.7" width="60%" />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center mt-3">
            <img src="images/client/chainide.png" style="
                    -webkit-filter: grayscale(1);
                    filter: invert(1);
                    opacity: 0.6;
                  " width="90%" />
          </div>

          <div class="col-lg-2 col-md-2 col-4 text-center mt-3">
            <img src="images/client/initiatecapital.png"
              style="-webkit-filter: grayscale(1); -webkit-filter: contrast(1%)" width="90%" />
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
                        <a class="faq position-relative text-dark" v-b-toggle.accordion-1 href="javascript: void(0);">
                          <h6 class="title mb-0">
                            {{ $t("Home-FAQ-1-Title") }}
                          </h6>
                        </a>
                      </b-card-header>
                      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
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
                        <a class="faq position-relative text-dark" v-b-toggle.accordion-2 href="javascript: void(0);">
                          <h6 class="title mb-0">
                            {{ $t("Home-FAQ-2-Title") }}
                          </h6>
                        </a>
                      </b-card-header>
                      <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
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
                        <a class="faq position-relative text-dark" v-b-toggle.accordion-3 href="javascript: void(0);">
                          <h6 class="title mb-0">
                            {{ $t("Home-FAQ-3-Title") }}
                          </h6>
                        </a>
                      </b-card-header>
                      <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body class="px-2 py-4">
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-3-Details-1") }}
                          </p>
                          <p>
                            →
                            <a href="https://deschool.app/zh/series/62f0adc68b90ee1aa913a965/learning"
                              target="_blank">SeeDAO {{ $t("Onboarding-Video") }}</a>
                          </p>
                          <p class="text-muted mb-2 faq-ans">
                            {{ $t("Home-FAQ-3-Details-2") }}
                          </p>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-2 border-0 rounded">
                      <b-card-header class="border-0 bg-light p-3 pr-5">
                        <a class="faq position-relative text-dark" v-b-toggle.accordion-4 href="javascript: void(0);">
                          <h6 class="title mb-0">
                            {{ $t("Home-FAQ-4-Title") }}
                          </h6>
                        </a>
                      </b-card-header>
                      <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
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
                        <a class="faq position-relative text-dark" v-b-toggle.accordion-5 href="javascript: void(0);">
                          <h6 class="title mb-0">
                            {{ $t("Home-FAQ-5-Title") }}
                          </h6>
                        </a>
                      </b-card-header>
                      <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
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
                        <a class="faq position-relative text-dark" v-b-toggle.accordion-6 href="javascript: void(0);">
                          <h6 class="title mb-0">
                            {{ $t("Home-FAQ-6-Title") }}
                          </h6>
                        </a>
                      </b-card-header>
                      <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
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
                  <a href="https://deschool.app/zh/series/62f0adc68b90ee1aa913a965/learning" target="_blank"
                    class="btn mt-2 mr-2" style="
                          border-radius: 5px;
                          background: #000000;
                          font-style: normal;
                          font-weight: 600;
                          font-size: 15px;
                          line-height: 24px;
                          color: #03ffa4;
                        ">{{ $t("Join-Us-for-More-Information") }}</a>
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
    <a href="#" class="btn btn-icon btn-primary back-to-top" id="back-to-top" v-scroll-to="'#topnav'">
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
