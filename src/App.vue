<template>
  <div id="app">
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
