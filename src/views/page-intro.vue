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
                    <a href="assets/SeeDAO-Whitepaper.pdf" target="_blank" rel="noopener noreferrer" class="col-md-4 col-12 box">
                        {{ $t("Link-Whitepaper") }}
                    </a>
                    <a href="https://seedao.notion.site/8745195e74c34a90b1aa115504e20a97" target="_blank"
                        rel="noopener noreferrer" class="col-md-4 col-12 box">
                        {{ $t("Link-Meta") }}
                    </a>
                </div>
                <div class="link-row mt-4">
                    <a href="https://app.seedao.xyz/" target="_blank" rel="noopener noreferrer" class="col-md-4 col-12 box">
                        {{ $t("Link-App") }}
                    </a>
                    <a href="https://seeu.network/" target="_blank"
                        rel="noopener noreferrer" class="col-md-4 col-12 box">
                        {{ $t("Link-Net") }}
                    </a>
                </div>
                <div class="link-row mt-4">
                    <a href="https://seedao.notion.site/b99eb0b3bf97436490f9839aebe29b3e?pvs=4" target="_blank"
                        rel="noopener noreferrer" class="col-md-4 col-12 box">
                        {{ $t("Link-City-Hall") }}

                    </a>
                    <a href="https://beta.seedao.cc/" target="_blank"
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
