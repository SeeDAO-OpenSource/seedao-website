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
            <h2>{{ $t("Intro") }}</h2>
            <div class="content">
                <p>{{ $t("Intro-Content-1") }}</p>
                <p>{{ $t("Intro-Content-2") }}</p>
                <p>{{ $t("Intro-Content-3") }}</p>
                <p>{{ $t("Intro-Content-4") }}</p>
                <p>{{ $t("Intro-Content-5") }}</p>
            </div>
            <div class="links">
                <div class="link-row mt-4">
                    <a href="" target="_blank" rel="noopener noreferrer" class="col-md-4 col-12 box">
                        {{ $t("Link-Whitepaper") }}
                    </a>
                    <a href="https://seedao.notion.site/SeeDAO-SIP-2-a4720f18c068455785a7a9ee5fd626ee" target="_blank"
                        rel="noopener noreferrer" class="col-md-4 col-12 box">
                        {{ $t("Link-Meta") }}
                    </a>
                </div>
                <div class="link-row mt-4">
                    <a href="https://app.seedao.xyz/" target="_blank" rel="noopener noreferrer" class="col-md-4 col-12 box">
                        {{ $t("Link-App") }}
                    </a>
                    <a href="https://seedao.notion.site/8452dbcbeb60412baca99198e65cd85a" target="_blank"
                        rel="noopener noreferrer" class="col-md-4 col-12 box">
                        {{ $t("Link-Net") }}
                    </a>
                </div>
                <div class="link-row mt-4">
                    <a href="https://seedao.notion.site/07c258913c5d4847b59271e2ae6f7c66" target="_blank"
                        rel="noopener noreferrer" class="col-md-4 col-12 box">
                        {{ $t("Link-City-Hall") }}

                    </a>
                    <a href="https://seedao.notion.site/SeeDAO-9d43e99fd34940f39f66187d11309e45" target="_blank"
                        rel="noopener noreferrer" class="col-md-4 col-12 box">
                        {{ $t("Link-Combinator") }}
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
