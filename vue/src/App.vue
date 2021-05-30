<template>
  <div class="container">
    <div id="logo-container">
      <img alt="Vue logo" src="./assets/logo.png" style="max-width: 180px" />
    </div>
    <Memory />
  </div>
</template>

<script>
import Memory from "./components/Memory.vue";
import "./style.css";

export default {
  name: "App",
  components: {
    Memory,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
