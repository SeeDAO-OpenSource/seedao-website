<script>
export default {
  mounted() {
    localStorage.setItem("currentLanguage", "en")
 
    if (this.$route.fullPath === "/en") {
      this.$router.push("/").then(()=>{
        this.$router.go(0)
      })
    } else {
      this.$router.push(`../${this.$route.params.path}`).then(() => {
        this.$router.go(0)
      })
    }
  }
}
</script>
<template>
  <div></div>
</template>
