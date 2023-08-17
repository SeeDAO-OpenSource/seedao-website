<script>
import { MapPinIcon } from "vue-feather-icons";
/**
 * News component
 */
export default {
  components: {
    MapPinIcon,
  },
  data() {
    return {
      newsData: [
        // {
        //   image: "images/event/1h858mZP6mjoJuVaBlM1E-bcDvWqd3IBO.png",
        //   title: "See U in Singapore",
        //   location: "Alibaba Cloud, Lazada One 4F, 51 Bras Basah, 189554",
        //   datetime: "2023/3/9 Thu 18:30 - 21:00 (UTC+8)",
        //   link: "https://seedao.notion.site/See-U-in-Singapore-DAO-be562bf2e0a341bcb740df747f3a164f"
        // },
        // {
        //   image: "images/event/SeeUinShanghai.jpeg",
        //   title: "See U in Shanghai",
        //   location: "上海前滩休闲公园月季园",
        //   datetime: "2023/3/11 Sat 15:00 - 18:00 (UTC+8)",
        //   link: "https://seedao.notion.site/See-U-in-Shanghai-Web3-e4fd546f87584029938332654eee52dc"
        // },
        {
          image: "images/event/香港.jpg",
          title: "See U in HongKong",
          location: "Cyber Arena, The Atrium of Arcade @ Cyberport",
          datetime: "2023/4/15 Sat 15:00 - 18:00 (UTC+8)",
          link: "https://seedao.notion.site/See-U-in-HongKong-SeeDao-Annual-Gathering-Night-in-Hong-Kong-Web3-Festival-2023-46616041b8e04eb2a2312940bbd02a47",
        },
        {
          image: "images/event/dao_montenegro.png",
          title: "DAO 黑山｜华语 DAO 走向世界",
          location: "Hilton Podgorica Crna Gora",
          datetime: "2023/5/21 - 22",
          link: "https://seedao.notion.site/DAO-DAO-aeae99f136d4401dbbf364849a13eee9",
        },
        {
          image: "images/event/londondemoday.jpg",
          title: "See U in Future: Demo Day",
          location: "Millbank, London, England, SW1P 4QP (阿里巴巴伦敦办公室)",
          datetime: "2023/5/27 Sat 14:00 - 21:00 (UTC)",
          link: "https://seedao.notion.site/See-U-in-London-DemoDay-Web3-AI-GenZ-800933a22ff94a1e95347cd1db6e3cb3",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="row">
    <div
      class="col-lg-4 col-md-6 mt-4 pt-2"
      v-for="(item, index) of newsData"
      :key="index"
    >
      <div
        class="card blog rounded shadow d-flex flex-column justify-content-between h-100"
      >
        <div class="position-relative">
          <img
            :src="`${item.image}`"
            class="card-img-top rounded-top"
            alt="..."
          />
          <div class="overlay rounded-top bg-dark"></div>
        </div>
        <div
          class="card-body content"
          style="
            border-right: 1px solid rgba(166, 166, 166, 1);
            border-left: 1px solid rgba(166, 166, 166, 1);
            border-bottom: 1px solid rgba(166, 166, 166, 1);
          "
        >
          <div>
            <h5>
              <a
                href="item.link"
                target="_blank"
                class="card-title title text-dark"
                >{{ item.title }}</a
              >
            </h5>
            <div class="post-meta d-flex justify-content-between mt-3">
              <ul class="list-unstyled mb-0">
                <li class="list-inline-item mr-2 mb-0">
                  <map-pin-icon class="fea icon-sm"></map-pin-icon
                  >&nbsp;<small>{{ item.location }}</small>
                </li>
                <br />
                <li class="list-inline-item">
                  <small>{{ item.datetime }}</small>
                </li>
              </ul>
            </div>
            <br />
            <a :href="item.link" target="_blank" class="text-muted readmore"
              >{{ $t("Read-More") }} <i class="mdi mdi-chevron-right"></i
            ></a>
          </div>
        </div>
        <div class="author">
          <small class="text-light user d-block"
            ><i class="mdi mdi-account"></i>{{ item.location }}</small
          >
          <small class="text-light date"
            ><i class="mdi mdi-calendar-check"></i> {{ item.datetime }}</small
          >
        </div>
      </div>
    </div>
    <!--end col-->
  </div>
  <!--end row-->
</template>
