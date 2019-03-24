<template>
  <div id="app">
    <YearElapsed />
  </div>
</template>

<script>
import YearElapsed from './components/year-elapsed/YearElapsed.vue'

export default {
  name: 'app',
  components: {
    YearElapsed
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
