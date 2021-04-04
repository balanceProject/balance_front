<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
  import Header from "./components/Header"
  import Footer from "./components/Footer"

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
  @import "assets/css/normalize.css";
  @import "assets/css/fonts.css";
  @import "assets/css/style.css";
</style>