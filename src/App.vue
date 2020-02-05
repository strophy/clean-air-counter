<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/Greenpeace.svg">-->
    <!--<h1>Clean Air Counters!</h1>-->
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
      text-align: center;
    }
</style>
