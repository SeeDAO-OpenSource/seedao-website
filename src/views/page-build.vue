<script>
/**
 * Page-intro component
 */
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default {
    data() {
        return {}
    },
    components: {
        Navbar,
        Footer,
    }
}
</script>

<template>
    <div>
        <Navbar :nav-light="true" />
        <div class="container mt-100">
            <h2>Build</h2>
            <div class="content">
                <p>你会想，这个连接着上万人和上千名Builder的城邦究竟是怎样建成的？</p>

                <p>没有公司在背后支撑，我们究竟如何形成了一个文化和技术的共同体，让如此多的应用和事件在这里诞生，并将我们的影响力拓展到了全球？</p>

                <p>没错，这全靠Builder们的努力。</p>

                <p>SeeDAO是一个由社区成员共建的数字城邦，其中重要的建设项目与决议会形成SIP。除SIP之外，P1、P2和P3提案也在社区建设中起到了重要作用。回溯这些建设提案，你可以清晰地看到SeeDAO的发展史。</p>

                <p>期待你在城邦中留下自己的提案，让你的名字也成为这个世界的一部分！</p>
            </div>
            <div class="links">
                <div class="row mt-4">
                    <div class="col-md-6 col-12">
                        SeeDAO 提案
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<style scoped>
h2 {
    margin-bottom: 30px;
}

.links {
    border-top: 1px solid #ddd;
    padding-top: 60px;
    margin-top: 60px;
    padding-bottom: 60px;
}
</style>
