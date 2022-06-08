<template>
  <div id="app">
    <HeaderSite></HeaderSite>
    <router-view class="middle-content"/>
    <FooterSite></FooterSite>
  </div>
</template>

<script>
import HeaderSite from "./components/HeaderSite.vue";
import FooterSite from "./components/FooterSite.vue";
export default {
  components: {
    HeaderSite,
    FooterSite
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  font-family: 'Ubuntu', sans-serif;
  box-sizing: border-box;
}

body {
  margin: 0;
}

.middle-content {
  min-height: 999px;
}
</style>
