<script>
/**
 * Page-journey component
 */
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default {
    data() {
        return {}
    },
    components: {
        Navbar,
        Footer
    }
}
</script>

<template>
    <div>
        <Navbar :nav-light="true" />
        <div class="container mt-100">
            <h2>{{ $t("Journey") }}</h2>
            <div class="content">
                <p>{{ $t("Journey-Content-1") }}</p>
                <p>{{ $t("Journey-Content-2") }}</p>
                <p>{{ $t("Journey-Content-3") }}</p>
                <p>{{ $t("Journey-Content-4") }}</p>
                <p>{{ $t("Journey-Content-5") }}</p>
                <p>{{ $t("Journey-Content-6") }}</p>
                <p>{{ $t("Journey-Content-7") }}</p>
            </div>
            <div class="links">
                <div class="link-row mt-4">
                    <a href="" target="_blank" rel="noopener noreferrer" class="col-md-4 col-12 box">
                        {{ $t("Link-Onboarding") }}
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" class="col-md-4 col-md-offset-4 col-12  box">
                        {{ $t("Contributor-Identity") }}
                    </a>
                </div>
                <div class="link-row mt-4">
                    <a href="https://seedao.notion.site/73d83a0a258d4ac5afa57a997114755a?v=21509260ca7f4e32b285b73e9e1a6815"
                        target="_blank" rel="noopener noreferrer" class="col-md-4 col-12 box">
                        {{ $t("Bounties") }}

                    </a>
                    <a href="https://forum.seedao.xyz/category/19?filter=category" target="_blank" rel="noopener noreferrer"
                        class="col-md-4 col-md-offset-4 col-12 box">
                        {{ $t("Proposals") }}
                    </a>
                </div>
                <div class="link-row mt-4">
                    <a href="https://seed.seedao.xyz/" target="_blank" rel="noopener noreferrer"
                        class="col-md-4 col-12 box">
                        Seed NFT
                    </a>
                    <a href="https://node.seedao.xyz/" target="_blank" rel="noopener noreferrer"
                        class="col-md-4 col-md-offset-4 col-12 box">
                        {{ $t("Nodes-Consensus-Congress") }}
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
