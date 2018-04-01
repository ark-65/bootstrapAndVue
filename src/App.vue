<template>
  <div id="app">
    <Head />
    <router-view></router-view>
  </div>
</template>

<script>
import Head from './layouts/Head'

export default {
  name: 'app',
  components: {Head}
}
</script>

<style>
html,body{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  height: 90%;
}
</style>
