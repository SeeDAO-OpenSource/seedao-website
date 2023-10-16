<script>
/**
 * Page-build component
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
        <Footer />
    </div>
</template>
<style scoped></style>
