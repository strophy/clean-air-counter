<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/Greenpeace.svg">
    <h1>Clean Air Counters!</h1>
    <Jumbotron />
  </div>
</template>

<script>
import Jumbotron from './components/Jumbotron.vue'

export default {
  name: 'app',
  components: {
    Jumbotron,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
