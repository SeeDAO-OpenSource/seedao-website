<script>
import {
  ArrowUpIcon,
  MailIcon,
  ArrowRightIcon,
  MapPinIcon,
  ArrowDownIcon
} from "vue-feather-icons"
import { Carousel, Slide } from "vue-carousel"
import flatPickr from "vue-flatpickr-component"
import "flatpickr/dist/flatpickr.css"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Testimonial from "@/components/testimonial"
import Events from "@/components/events"

export default {
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize)
    })
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize)
  },
  methods: {
    onResize() {
      this.windowHeight = window.innerHeight
    },
    updateFilter(filterName) {
      this.filterCategory = filterName
    },
    showImg(index) {
      this.index = index
      this.visible = true
    }
  },
  computed: {
    filteredData: function () {
      if (this.filterCategory === "all") {
        return this.caseList
      } else {
        return this.caseList.filter((x) => x.region === this.filterCategory)
      }
    }
  },
  data() {
    return {
      caseList: [
        {
          image: "images/cities/Bangkok.jpg",
          email: "davidduan0916@gmail.com",
          cn: {
            city: "曼谷, 泰国",
            name: "Wei",
            description:
              "Mask 开源社区经理，Next.ID 社区经理，开源人 & DAO Believer。开源社区长期实践者，曾负责过包括 Google DevRel 大陆地区的GDE 等项目、AI 框架 TensorFlow 用户组，Alibaba Cloud 云原生技术线 KubeVela 等众多开源项目和社区的孵化、运营和入驻 CNCF 基金会的一系列操作。认为开源社区是公司往 DAO 的中间过渡形态，希望一起推动这个划时代变化的落地。"
          },
          en: {
            city: "Bangkok, Thailand",
            name: "Wei",
            description:
              "Mask is an open source community manager and the community manager of Next.ID. He is an open source enthusiast and believer in DAOs. He has long been involved in open source community development, and has been responsible for incubating, operating, and participating in a number of open source projects and communities, including the Google Developer Expert (GDE) program in Mainland China, the TensorFlow user group, the KubeVela project in Alibaba Cloud's cloud native technology division, and a series of operations to join the CNCF Foundation. He believes that open source communities are an intermediary step for companies to transition to DAOs, and hopes to work together to promote this epoch-making change."
          },
          variant: "primary",
          region: "Asia"
        },
        {
          image: "images/cities/Beijing.jpg",
          cn: {
            city: "北京, 中国",
            name: "Laura",
            description:
              "法国top商校毕业，传统金融背景+Web3 builder，目前在NH Tech负责托管等业务。重点关注custody，钱包安全，DeFi等Web3领域。"
          },
          en: {
            city: "Beijing, China",
            name: "Laura",
            description:
              "Graduated from a top business school in France, with a traditional financial background and experience as a Web3 builder. Currently working at NH Tech, responsible for custody and other related businesses. Focused on Web3 areas such as custody, wallet security, and DeFi."
          },
          email: "lqj.laura@gmail.com",
          variant: "primary",
          region: "Asia"
        },
        {
          image: "images/cities/Dubai.jpg",
          cn: {
            city: "迪拜, 阿联酋",
            name: "Zachrias",
            description:
              "荷兰约翰克鲁伊夫体育管理 MBA 毕业，曾就读于美国莱斯大学工程学，现深耕迪拜。有丰富的大型活动及赛事经验，如阿姆斯特丹 CrossFit；英超亚洲杯，斯巴达勇士赛；曾任职体感游戏公司Fitplay的产品经理。爱体育，爱科技。"
          },
          en: {
            city: "Dubai, UAE",
            name: "Zachrias",
            description:
              "Graduated with an MBA in Sports Management from Johan Cruyff Institute in the Netherlands, and previously studied engineering at Rice University in the United States. Currently based in Dubai with extensive experience in organizing large-scale events and competitions, such as the Amsterdam CrossFit, English Premier League Asia Trophy, and Spartan Race. Formerly worked as a Product Manager at Fitplay, a sensory gaming company. Passionate about sports and technology."
          },
          email: "Zachrias@163.com",
          variant: "primary",
          region: "Asia"
        },
        {
          image: "images/cities/HongKong.jpg",
          cn: {
            city: "香港, 中国",
            name: "Sophie Wu",
            description:
              "数字营销咨询公司 Eudaimonia Art Tech 创始人，媒体心理学博士。曾主导并执行多个公司项目和社群的运营工作，切实帮助客户实现业务增长，对 Web2、Web3 营销策略工具及衡量指标方面有一定的经验。期待在 SeeDao 遇见更多志同道合的小伙伴，共同为社区建设添砖加瓦！"
          },
          en: {
            city: "Hong Kong, China",
            name: "Sophie Wu",
            description:
              "The founder of Eudaimonia Art Tech, a digital marketing consulting company, is a media psychology PhD and has led and executed operations for multiple company projects and communities, helping clients achieve business growth. They have experience in Web2 and Web3 marketing strategy tools and measurement metrics. They look forward to meeting like-minded partners at SeeDao and working together to contribute to community development."
          },
          email: "sophiewy831@gmail.com",
          variant: "primary",
          region: "Asia"
        },
        {
          image: "images/cities/London.jpg",
          cn: {
            city: "伦敦, 英国",
            name: "Jason Hsiu",
            description:
              "互联网连续创业者，低龄留学 BonduDao 发起人，大湾区离职社群联盟发起人。爱户外爱跑步，九型人格爱好者。"
          },
          en: {
            city: "London, UK",
            name: "Jason Hsiu",
            description:
              "They are also an internet serial entrepreneur, the founder of BonduDao for young students studying abroad, and the founder of the Greater Bay Area Resigned Employees Community Alliance. They enjoy outdoor activities such as running and have an interest in the Enneagram."
          },
          email: "jasonxu20@icloud.com",
          variant: "warning",
          region: "Europe"
        },
        {
          image: "images/cities/Melbourne.jpg",
          cn: {
            city: "墨尔本, 澳大利亚",
            name: "Vincent Zhou",
            description:
              "从 Web2 走向 Web3 的产品经理。人在墨尔本，热爱喝酒聊天，有什么问题可以随时联系我啦！"
          },
          en: {
            city: "Melbourne, Australia",
            name: "Vincent Zhou",
            description:
              "Product Manager transitioning from Web2 to Web3. Based in Melbourne and enjoys socializing over drinks. Feel free to contact me anytime if you have any questions!"
          },
          email: "zhaohuizhou172@gmail.com",
          variant: "info",
          region: "Oceania"
        },
        {
          image: "images/cities/NewYork.jpg",
          cn: {
            city: "纽约, 美国",
            name: "Saku Zou",
            description:
              "SeeDAO 翻译公会的成员，现在在纽约上学，也正在开发一些好玩的东西～对 Web3 音乐和生成艺术都很感兴趣，最喜欢的生成艺术家是 Matt Kane，最近读了很多实体书，希望能和对阅读感兴趣的小伙伴们交换喜欢的书，有兴趣的朋友请 dm 我～"
          },
          en: {
            city: "New York, US",
            name: "Saku Zou",
            description:
              "A member of the Translation Guild at SeeDAO, currently studying in New York and developing some fun projects. Interested in Web3 music and generative art, with Matt Kane being their favorite generative artist. Recently been reading a lot of physical books and would love to exchange favorite books with fellow book enthusiasts. If interested, please DM me."
          },
          email: "siahigasa@gmail.com",
          variant: "danger",
          region: "America"
        },
        {
          image: "images/cities/SanFrancisco.jpg",
          cn: {
            city: "旧金山, 美国",
            name: "Jeremy Zhou",
            description:
              "INC DAO 发起人，Redblock 创始人。专注于数字资产投资银行服务和数字基金管理，获得上市公司投资。此前，担任UCF集团房地产并购领域投资总监。前APlus实验室(北美)投资人，专注于金融科技和企业服务。"
          },
          en: {
            city: "San Francisco, US",
            name: "Jeremy Zhou",
            description:
              "Founder of INC DAO and Redblock. Specializes in digital asset investment banking services and digital fund management, with investment from listed companies. Previously served as the Investment Director for real estate mergers and acquisitions at UCF Group. Former investor at APlus Lab (North America), with a focus on fintech and enterprise services."
          },
          email: "jeremy.v.zhou@gmail.com",
          variant: "danger",
          region: "America"
        },
        {
          image: "images/cities/Shanghai.jpg",
          cn: {
            city: "上海, 中国",
            name: "Ashley",
            description:
              "毕业于 UCL 物联网专业，做过设计，产品和开发。2018 年进入区块链行业，从事区块链社区运营，工业区块链应用。希望能和大家共同成长，探索区块链的更多应用场景。"
          },
          en: {
            city: "Shanghai, China",
            name: "Ashley",
            description:
              "Graduated from UCL with a major in Internet of Things and has experience in design, product, and development. Entered the blockchain industry in 2018 and has since been engaged in blockchain community operations and industrial blockchain applications. Hopes to grow together with others and explore more application scenarios for blockchain technology."
          },
          email: "Jin.xi1@icloud.com",
          variant: "primary",
          region: "Asia"
        },
        {
          image: "images/cities/Singapore.jpg",
          cn: {
            city: "新加坡, 新加坡",
            name: "Tony",
            description:
              "19 年 11 月来新加坡 Shopee 做搜索产品岗位，22 年加入一家 crypto mining service 公司做数据产品岗位；为了更好的了解行业，定期有和小伙伴一起邀请行业嘉宾进行 Web3 主题分享、圆桌讨论和项目介绍，也很乐于协助来到新加坡的小伙伴了解本地生态，融入本地生活。"
          },
          en: {
            city: "Singapore, Singapore",
            name: "Tony",
            description:
              "They joined Shopee in Singapore as a search product manager in November 2019, and in 2022, they joined a crypto mining service company as a data product manager. In order to better understand the industry, they regularly invite industry experts to share Web3 themes, hold roundtable discussions, and introduce projects with their colleagues. They are also happy to assist newcomers to Singapore in learning about the local ecosystem and integrating into local life."
          },
          email: "tongwang.zh@outlook.com",
          variant: "primary",
          region: "Asia"
        }
      ],
      filterCategory: "all",
      visible: false,

      date: new Date(),
      checkoutdate: new Date(Date.now() + 3600 * 1000 * 24),
      testimonialData: [
        {
          id: 1,
          profile: "images/client/01.jpg",
          message:
            "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
          name: "Thomas Israel",
          designation: "C.E.O"
        },
        {
          id: 2,
          profile: "images/client/02.jpg",
          message:
            "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
          name: "Barbara McIntosh",
          designation: "M.D"
        },
        {
          id: 3,
          profile: "images/client/03.jpg",
          message:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          name: "Carl Oliver",
          designation: "P.A"
        },
        {
          id: 4,
          profile: "images/client/04.jpg",
          message:
            "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
          name: "Christa Smith",
          designation: "Manager"
        },
        {
          id: 5,
          profile: "images/client/05.jpg",
          message:
            "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
          name: "Dean Tolle",
          designation: "Developer"
        },
        {
          id: 6,
          profile: "images/client/05.jpg",
          message:
            "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
          name: "Jill Webb",
          designation: "Designer"
        }
      ]
    }
  },
  components: {
    Navbar,
    Footer,
    Carousel,
    Slide,
    ArrowUpIcon,
    MailIcon,
    ArrowRightIcon,
    MapPinIcon,
    ArrowDownIcon,
    flatPickr,
    Events,
    Testimonial
  }
}
</script>

<template>
  <div>
    <Navbar :nav-light="true" />

    <!-- Hero Start -->
    <section
      id="citiesBg"
      class="d-table w-100"
      style="
        margin-top: 100px;
        height: 800px;
        background: url('images/cities/cities_bg.svg') center center;
        background-size: 100% 100%;
      "
    >
      <!-- <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=154c-fb6cieRyik_X4EPoP1lrY45Dquc&ll=20,-100&z=3&hl=en"
        style="
          frameborder: 0;
          border: 0;
          position: absolute;
          left: 0px;
          top: -60px;
        "
        allowfullscreen
        width="1920"
        height="920"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> -->
      <!-- <div
        class="bg-overlay"
        style="background-color: rgba(0, 0, 0, 0.15)"
      ></div> -->
      <div class="container">
        <div class="row align-items-center" style="margin-top: 110px; margin-left: -160px">
          <div class="col-lg-7 col-md-6">
            <div class="title-heading mt-5">
              <h1 class="display-4 font-weight-bold text-black title-dark mb-3">
                <br />{{ $t("Cities-Cover-Title-1") }}<br />
                {{ $t("Cities-Cover-Title-2") }}
              </h1>
              <h4 class="para-desc text-black">
                {{ $t("Cities-Cover-Subtitle") }}
              </h4>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <section
      id="citiesBgMobile"
      class="d-table w-100"
      style="
        height: 710px;
        background: url('images/cities/cities_m_bg.svg') center center;
      "
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12 col-md-12">
            <div class="title-heading mt-5">
              <h1 class="display-4 font-weight-bold text-black title-dark mb-3">
                <br />{{ $t("Cities-Cover-Title-1") }}
                {{ $t("Cities-Cover-Title-2") }}
              </h1>
              <h4 class="para-desc text-black">
                {{ $t("Cities-Cover-Subtitle") }}
              </h4>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->

    <!-- <div class="position-relative">
      <div
        class="bg-overlay"
        style="height: 80px; background-color: rgba(255, 255, 255, 1)"
      ></div>
      <div class="shape overflow-hidden text-white">
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
    </div> -->
    <!-- Hero End -->

    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">{{ $t("Cities-Program-Intro-Title") }}</h4>
              <p class="mb-0 mx-auto text-black" style="font-weight: 300">
                {{ $t("Cities-Program-Intro-Details-1") }}
                (<span class="text-primary font-weight-bold"
                  ><a
                    href="https://forum.seedao.xyz/thread/42419"
                    target="_blank"
                    >SIP-41</a
                  ></span
                >)
                {{ $t("Cities-Program-Intro-Details-2") }}
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div class="col-lg-4 col-md-4 mt-4 pt-2">
            <div
              class="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0 h-100"
              style="border: 1px solid rgba(166, 166, 166, 1) !important"
            >
              <span class="h1 icon2 text-primary">
                <img src="images/cities/c1.svg" class="avatar avatar-small" />
              </span>
              <div class="card-body p-0 content">
                <h5>{{ $t("City-Program-1-Title") }}</h5>
                <p class="para text-muted mb-0">
                  {{ $t("City-Program-1-Details-1") }}
                </p>
                <br />
                <p class="para text-muted mb-0">
                  {{ $t("City-Program-1-Details-2") }}
                </p>
                <br />
                <p class="para text-muted mb-0">
                  {{ $t("City-Program-1-Details-3") }}
                </p>
              </div>
              <span class="big-icon text-center">
                <img src="images/cities/c1.svg" />
              </span>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-4 mt-4 pt-2">
            <div
              class="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0 h-100"
              style="border: 1px solid rgba(166, 166, 166, 1) !important"
            >
              <span class="h1 icon2 text-primary">
                <img src="images/cities/c2.svg" class="avatar avatar-small" />
              </span>
              <div class="card-body p-0 content">
                <h5>{{ $t("City-Program-2-Title") }}</h5>
                <p class="para text-muted mb-0">
                  {{ $t("City-Program-2-Details-1") }}
                </p>
                <br />
                <p class="para text-muted mb-0">
                  {{ $t("City-Program-2-Details-2") }}
                </p>
                <br />
                <p class="para text-muted mb-0">
                  {{ $t("City-Program-2-Details-3") }}
                </p>
              </div>
              <span class="big-icon text-center">
                <img src="images/cities/c2.svg" />
              </span>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-4 mt-4 pt-2">
            <div
              class="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0 h-100"
              style="border: 1px solid rgba(166, 166, 166, 1) !important"
            >
              <span class="h1 icon2 text-primary">
                <img src="images/cities/c3.svg" class="avatar avatar-small" />
              </span>
              <div class="card-body p-0 content">
                <h5>{{ $t("City-Program-3-Title") }}</h5>
                <p class="para text-muted mb-0">
                  {{ $t("City-Program-3-Details-1") }}
                </p>
                <br />
                <p class="para text-muted mb-0">
                  {{ $t("City-Program-3-Details-2") }}
                </p>
                <br />
                <p class="para text-muted mb-0">
                  {{ $t("City-Program-3-Details-3") }}
                </p>
              </div>
              <span class="big-icon text-center">
                <img src="images/cities/c3.svg" class="avatar avatar-small" />
              </span>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-12 text-center col-md-4 mt-4 pt-2">
            <a
              href="https://forum.seedao.xyz/thread/42419"
              target="_blank"
              class="btn mt-3"
              style="background-color: #03ffa4; color: #ffffff"
              >{{ $t("Read-More") }}</a
            >
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-8 text-center">
            <br /><br /><br /><br />
            <div class="section-title">
              <h4 class="title font-weight-bold mb-4">
                {{ $t("Popular-Local-Events") }}
              </h4>
              <p class="mb-0 mx-auto text-black" style="font-weight: 300">
                {{ $t("Popular-Local-Events-Details") }}
              </p>
            </div>
          </div>
          <!--end col-->
        </div>

        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-md-12 mt-4 mt-sm-0">
            <div class="text-center text-md-right">
              <a
                href="https://seedao.notion.site/46c3294dc6ae440b993a63f05c1753bd?v=5e32c6f3181d462f88e77014b5b44b6b"
                class="text-primary h6"
                >{{ $t("More-Events") }}
                <arrow-right-icon class="fea icon-sm"></arrow-right-icon
              ></a>
            </div>
            <br />
          </div>
          <!--end col-->
        </div>
        <Events />
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row align-items-end mb-4 pb-2">
          <div class="col-md-12">
            <div class="section-title text-center text-md-center">
              <h6 class="text-primary">
                {{ $t("Cities-Program-Intro-Title") }}
              </h6>
              <h4 class="title mb-4">{{ $t("City-Member-List") }}</h4>
              <p class="mb-0 mx-auto text-black" style="font-weight: 300">
                {{ $t("City-Member-List-Details") }}
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container">
        <div class="row">
          <ul
            class="col container-filter list-unstyled categories-filter text-center mb-0"
            id="filter"
          >
            <li class="list-inline-item">
              <a
                class="categories border d-block text-dark rounded"
                @click="updateFilter('all')"
                :class="{ active: filterCategory == 'all' }"
                >{{ $t("All") }}</a
              >
            </li>
            <li class="list-inline-item">
              <a
                class="categories border d-block text-dark rounded"
                @click="updateFilter('Asia')"
                :class="{ active: filterCategory == 'Asia' }"
                >{{ $t("Asia") }}</a
              >
            </li>
            <li class="list-inline-item">
              <a
                class="categories border d-block text-dark rounded"
                @click="updateFilter('Europe')"
                :class="{ active: filterCategory == 'Europe' }"
                >{{ $t("Europe") }}</a
              >
            </li>
            <li class="list-inline-item">
              <a
                class="categories border d-block text-dark rounded"
                @click="updateFilter('Africa')"
                :class="{ active: filterCategory == 'Africa' }"
                >{{ $t("Africa") }}</a
              >
            </li>
            <li class="list-inline-item">
              <a
                class="categories border d-block text-dark rounded"
                @click="updateFilter('America')"
                :class="{ active: filterCategory == 'America' }"
                >{{ $t("America") }}</a
              >
            </li>
            <li class="list-inline-item">
              <a
                class="categories border d-block text-dark rounded"
                @click="updateFilter('Oceania')"
                :class="{ active: filterCategory == 'Oceania' }"
                >{{ $t("Oceania") }}</a
              >
            </li>
          </ul>
        </div>
        <!--end row-->

        <div class="row projects-wrapper">
          <div
            class="col-lg-4 col-md-6 col-12 mt-4 pt-2 business"
            v-for="(item, index) in filteredData"
            :key="index"
          >
            <div
              class="card blog border-0 work-container work-classic shadow rounded-md overflow-hidden d-flex flex-column h-100"
              style="border: 1px solid rgba(166, 166, 166, 1) !important"
            >
              <img :src="item.image" class="img-fluid work-image" alt="" />
              <div class="card-body d-flex flex-column">
                <a
                  href="javascript:void(0)"
                  :class="`badge badge-${item.variant} w-25`"
                  >{{ item.region }}</a
                >

                <h5 class="mt-3">
                  <router-link
                    v-if="$i18n.locale.toUpperCase() === 'CN'"
                    to="#"
                    class="text-dark title"
                    >{{ item.cn.name }} ({{ item.cn.city }})</router-link
                  ><router-link v-else to="#" class="text-dark title"
                    >{{ item.en.name }} ({{ item.en.city }})</router-link
                  >
                </h5>
                <p
                  class="text-muted"
                  v-if="$i18n.locale.toUpperCase() === 'CN'"
                >
                  {{ item.cn.description }}
                </p>
                <p class="text-muted" v-else>
                  {{ item.en.description }}
                </p>
                <a
                  :href="'mailto:' + item.email"
                  class="btn btn-sm mt-auto"
                  style="
                    width: 30%;
                    background: #000000;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 24px;
                    color: #03ffa4;
                  "
                  >Email</a
                >
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

    <section class="section" style="background-color: #FBF5EF; !important">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6">
            <img
              src="images/travel/london.jpg"
              class="img-fluid rounded shadow-md"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="section-title ml-lg-4">
              <h4 class="mb-4">
                {{ $t("City-More-Info-1-Title-1") }}<br />
                {{ $t("City-More-Info-1-Title-2") }}
              </h4>
              <p class="text-muted">
                {{ $t("City-More-Info-1-Details-1") }}
              </p>
              <ul class="list-unstyled text-muted">
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >{{ $t("City-More-Info-1-Details-2") }}
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >{{ $t("City-More-Info-1-Details-3") }}
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >{{ $t("City-More-Info-1-Details-4") }}
                </li>
              </ul>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6 order-1 order-md-2">
            <img
              src="images/travel/dubai.jpg"
              class="img-fluid rounded shadow-md"
              alt=""
            />
          </div>
          <!--end col-->

          <div
            class="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0"
          >
            <div class="section-title mr-lg-5">
              <h4 class="mb-4">
                {{ $t("City-More-Info-2-Title-1") }}<br />
                {{ $t("City-More-Info-2-Title-2") }}
              </h4>
              <p class="text-muted">
                {{ $t("City-More-Info-2-Details-1") }}
              </p>
            </div>
            <ul class="list-unstyled text-muted">
              <li class="mb-0">
                <span class="text-primary h5 mr-2"
                  ><i class="uil uil-check-circle align-middle"></i></span
                >{{ $t("City-More-Info-2-Details-2") }}
              </li>
              <li class="mb-0">
                <span class="text-primary h5 mr-2"
                  ><i class="uil uil-check-circle align-middle"></i></span
                >{{ $t("City-More-Info-2-Details-3") }}
              </li>
              <li class="mb-0">
                <span class="text-primary h5 mr-2"
                  ><i class="uil uil-check-circle align-middle"></i></span
                >{{ $t("City-More-Info-2-Details-4") }}
              </li>
            </ul>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <Footer />
    <!-- Footer End -->
    <!-- Back to top -->
    <a
      href="javascript: void(0);"
      class="btn btn-icon btn-primary back-to-top"
      id="back-to-top"
      v-scroll-to="'#topnav'"
    >
      <arrow-up-icon class="icons"></arrow-up-icon>
    </a>
    <!-- Back to top -->
  </div>
</template>
<style scoped>
#citiesBg {
}
@media (max-width: 780px) {
  #citiesBg {
    display: none !important;
  }
}
@media (min-width: 781px) {
  #citiesBgMobile {
    display: none !important;
  }
}
</style>
