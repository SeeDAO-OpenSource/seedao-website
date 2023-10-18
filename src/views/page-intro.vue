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
            <h2>Intro</h2>
            <div class="content">
                <p>SeeDAO是一个数字城邦，一个以追求”好的生活“为目的的去中心化自主世界。</p>
                <p>从具体形态来看，城邦由统一的网络空间和分散在不同地域的物理节点共同构成。而在追求“好的生活”这一目的上，城邦的善体现在三点：促进人与人之间的连接；促进个人的内在发现与涌现；提供对大家有益的公共生活。</p>
                <p>城邦的总纲是SeeDAO白皮书，治理的最高原则是SeeDAO元规则。如果你想进入这个世界，这是你需要首先阅读的文件，因为它代表了游戏的根本规则。</p>
                <p>你可以通过SeeDAO App进入SeeDAO的网络空间，也可以通过SeeDAO全球网络进入SeeDAO的现实物理节点。如果需要调用城邦资源和参与城邦治理，SeeDAO市政厅和孵化器将是你需要了解的部分。
                </p>
                <p>SeeDAO是builder们的家园。这个世界由builder们共建、共治、共享，向一切认同此愿景的人们敞开。让我们在世界的午夜，在赛博世界建一座朝霞之城。Enjoy～</p>
            </div>
            <div class="links">
                <div class="link-row mt-4">
                    <a href="" target="_blank" rel="noopener noreferrer" class="col-md-4 col-12 box">
                        SeeDAO 白皮书
                    </a>
                    <a href="https://seedao.notion.site/SeeDAO-SIP-2-a4720f18c068455785a7a9ee5fd626ee" target="_blank"
                        rel="noopener noreferrer" class="col-md-4 col-12 box">

                        SeeDAO 元规则
                    </a>
                </div>
                <div class="link-row mt-4">
                    <a href="https://app.seedao.xyz/" target="_blank" rel="noopener noreferrer" class="col-md-4 col-12 box">
                        SeeDAO App
                    </a>
                    <a href="https://seedao.notion.site/8452dbcbeb60412baca99198e65cd85a" target="_blank" rel="noopener noreferrer" class="col-md-4 col-12 box">
                        SeeDAO 全球网络
                    </a>
                </div>
                <div class="link-row mt-4">
                    <a href="https://seedao.notion.site/07c258913c5d4847b59271e2ae6f7c66" target="_blank" rel="noopener noreferrer" class="col-md-4 col-12 box">
                        SeeDAO 市政厅
                    </a>
                    <a href="https://seedao.notion.site/SeeDAO-9d43e99fd34940f39f66187d11309e45" target="_blank" rel="noopener noreferrer" class="col-md-4 col-12 box">
                        SeeDAO 孵化器
                    </a>
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
    padding-top: 40px;
    margin-top: 60px;
    padding-bottom: 60px;
}

.box {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 16px;
    cursor: pointer;
}

.link-row {
    display: flex;
    gap: 100px;
}

@media (max-width: 767px) {
    .link-row {
        flex-direction: column;
        gap: 1.5rem;
    }
}
</style>
