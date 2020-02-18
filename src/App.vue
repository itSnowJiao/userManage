<template>
  <div id="app">
    <user-header></user-header>
    <router-view></router-view>
  </div>
</template>

<script>
import userHeader from "./components/userHeader";
export default {
  name: 'App',
  components: {
    userHeader
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
