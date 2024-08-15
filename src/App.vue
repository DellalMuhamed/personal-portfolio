<template>
  <div class="global_container">
    <side-bare />
    <div>
      <nav class="nav">
        <router-link to="/">about</router-link> |
        <router-link to="/resume">resume</router-link> |
        <router-link to="/portfolio">portfolio</router-link> |
        <router-link to="/blog">blog</router-link> |
        <router-link to="/contact">Contact</router-link>
      </nav>
      <router-view />
    </div>
  </div>
</template>
<script>
import sideBare from "./components/sideBare.vue";
export default {
  components: { sideBare },
};
</script>
<style lang="scss">
//global style
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style: none;
}
.global_container {
  display: flex;
  justify-content: center;
  gap: 25px;
  max-width: 1200px;
  margin: auto;
  background-color: #313131;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 21px 48px 21px 46px;
  margin: 0 0 0 335px;
  background-color: #2c3e50;
  width: 535px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-radius: 0 0 0 20px;
  a {
    font-weight: bold;
    color: #c9d5e0;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
