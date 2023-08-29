<template>
  <div id="app">
    <HeaderView />
    <main class="container">
      <router-view />
    </main>
    <FooterView />
  </div>
</template>

<style lang="scss">
$font-path: "./../public/bootstrap-italia/fonts";

/* Titillium+Web:300,400,600,700 */

/* titillium-web-300 - latin-ext_latin */
@font-face {
  font-family: "Titillium Web";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url("#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.eot");
  /* IE9 Compat Modes */
  src: local(""),
    url("#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */
      url("#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.woff")
      format("woff"),
    /* Modern Browsers */
      url("#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.svg#TitilliumWeb")
      format("svg");
  /* Legacy iOS */
}

#app h1 {
  text-align: center;
}

#app {
  margin: 5px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import HeaderView from "@/components/Header.vue";
import FooterView from "@/components/Footer.vue";

export default {
  name: "App",
  components: { HeaderView, FooterView },
};
</script>