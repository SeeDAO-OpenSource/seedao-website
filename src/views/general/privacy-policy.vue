<script>
import {
    ArrowUpIcon,
    ArrowRightIcon
} from 'vue-feather-icons';

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Page-privacy component
 */
export default {
    data() {
        return {}
    },
    components: {
        Navbar,
        Switcher,
        Footer,
        ArrowUpIcon,
        ArrowRightIcon
    },
    methods: {
        print: function (){
            window.print();
        }
    }

}
</script>

<template>
<div>
    <Navbar />

    <!-- Hero Start -->
    <section class="bg-half bg-light d-table w-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <div class="page-next-level">
                        <h4 class="title">{{ $t("Privacy-Policy")}}</h4>
                        <ul class="list-unstyled mt-4">
                            <li class="list-inline-item h6 date text-muted"> <span class="text-dark">{{ $t("Last-Revised") }} :</span> 2023/2/27</li>
                        </ul>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->
    </section>
    <!--end section-->
    <!-- Hero End -->

    <!-- Shape Start -->
    <div class="position-relative">
        <div class="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <!--Shape End-->

    <!-- Start Privacy -->
    <section class="section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-9">
                    <div class="card shadow rounded border-0">
                        <div class="card-body">
                            <h5 class="card-title">信息保护政策 :</h5>
                            <p class="text-muted">我们深知个人信息对你的重要性，并会全力保护你的个人信息安全。</p>

                            <br/><h5 class="card-title">我们如何收集和使用你的个人信息 :</h5>
                            <p class="text-muted">为了实现特定业务功能，我们需要收集和使用你的部分个人信息。除法律另有规定，你有权拒绝我们收集和使用你的个人信息。但请理解，如你拒绝我们收集和使用业务功能所必需的个人信息，则可能无法使用对应的业务功能。</p>
                            <p class="text-muted">部分业务功能的实现需要开启你的设备权限。我们会通过弹窗向你申请获得授权，你可以随时通过 SeeDAO 的功能页面或设备系统设置关闭这些权限。</p>

                            <br/><h5 class="card-title">我们如何对外提供你的个人信息 :</h5>
                            <p class="text-muted">为向你提供产品或服务，我们可能会与第三方共同处理、共享或委托其处理你的部分个人信息。</p>
                            <p class="text-muted">我们只会在必要的目的和范围内向第三方提供你的个人信息，并审慎评估、监测第三方的安全保障能力，要求他们遵守法律法规、合作协议并采取相关的安全措施来保护你的个人信息。</p>

                            <br/><h5 class="card-title">我们如何存储你的个人信息 :</h5>
                            <p class="text-muted">存储地点：美国。保存期限：为实现目的所必需的期限和法律法规要求的期限内。保存期限届满的处理方式：删除或进行匿名化处理。</p>

                            <br/><h5 class="card-title">你的权利 :</h5>
                            <p class="text-muted">你可以通过 SeeDAO 联系我们：查阅、更正、复制、删除你的个人信息；</p>
                            <p class="text-muted">改变你授权同意的范围或撤回你的授权；注销/删除账号；行使其他法定的个人信息主体权利。</p>

                            <br/><button @click="print()" class="btn btn-primary">{{ $t("Print")}}</button>
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
    <!-- End Privacy -->
    <!--end section-->
    <Footer />
    <!-- Footer End -->
    
    <!-- Back to top -->
    <a href="javascript: void(0);" class="btn btn-icon btn-primary back-to-top" id="back-to-top" v-scroll-to="'#topnav'">
        <arrow-up-icon class="icons"></arrow-up-icon>
    </a>
    <!-- Back to top -->
</div>
</template>
