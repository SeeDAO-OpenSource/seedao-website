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
            <h2>{{ $t("Build") }}</h2>
            <div class="content">
                <p>{{ $t("Build-Content-1") }}</p>
                <p>{{ $t("Build-Content-2") }}</p>
                <p>{{ $t("Build-Content-3") }}</p>
                <p>{{ $t("Build-Content-4") }}</p>
                <p>{{ $t("Build-Content-5") }}</p>
            </div>
            <div class="links">
                <div class="row mt-4">
                    <a href="https://forum.seedao.xyz/" target="_blank" rel="noopener noreferrer"
                        class="col-md-4 col-12 box">
                        {{ $t("Link-Proposal") }}
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
</style>
