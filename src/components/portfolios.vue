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
                {
                    image: "images/portfolio/ensoul.png",
                    name: "Ensoul",
                    link: "https://www.ensoul.io",
                },
                {
                    image: "images/portfolio/daolink.png",
                    name: "DAOLink",
                    link: "http://www.daolink.space",
                },
                {
                    image: "images/portfolio/deschool.png",
                    name: "DeSchool",
                    link: "https://deschool.app",
                },
                {
                    image: "images/portfolio/pfpdao.jpeg",
                    name: "PFP DAO",
                    link: "https://www.pfp-dao.io/",
                },
                {
                    image: "images/portfolio/wormhole3.png",
                    name: "Wormhole3",
                    link: "https://alpha.wormhole3.io",
                },
                {
                    image: "images/portfolio/sellix.png",
                    name: "Sellix",
                    link: "https://sellix.io/",
                },
                {
                    image: "images/portfolio/metaforo.png",
                    name: "Metaforo",
                    link: "https://www.metaforo.io",
                    style: "height: 100%; width: unset;",
                },
                {
                    image: "images/portfolio/cascad3.png",
                    name: "Cascad3",
                    link: "https://www.cascad3.com/"
                },
                {
                    image: "images/portfolio/AAAny.png",
                    name: "AAAny",
                    link: "https://apps.apple.com/ca/app/aaany-ask-anyone-anything/id6450619356"
                },
                {
                    image: "images/portfolio/joyid.png",
                    name: "JoyID",
                    link: "https://joyid.dev/"
                }

            ]
        };
    },
};
</script>

<template>
    <div class="row">
        <div class="col-lg-3 col-md-6 mt-4 pt-2" v-for="(item, index) of newsData" :key="index">
            <div class="card blog rounded shadow d-flex flex-column justify-content-between h-100 itemBox">
                <div class="position-relative imgBox">
                    <a :href="item.link" target="_blank">
                        <img :src="`${item.image}`" class="card-img-top rounded-top" alt="..."  /></a>
                </div>
                <div class="content">
                    <div>
                        <h5 style="text-align: center;">
                            <a :href="item.link" target="_blank" class="card-title title text-dark">{{ item.name }}</a>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
        <!--end col-->
    </div>
    <!--end row-->
</template>
<style lang="scss">
.itemBox{
  border: 1px solid rgba(166, 166, 166, 1);
  .content{
    padding: 10px;
  }
}
 .imgBox{
   display: flex;
   align-content: center;
   justify-content: center;
   height: 130px;
   a{
     display: flex;
     align-content: center;
     justify-content: center;

   }
   img{

     width: 100%;
      object-position: center;
     object-fit: cover;
   }
 }
</style>
