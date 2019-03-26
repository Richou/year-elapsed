<template>
  <div id="app">
    <header>
      <a href="https://github.com/Richou/year-elapsed"><img src="./assets/img/github-32.png" alt="github logo"/></a>
    </header>
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
  div#app {
    header {
      display: flex;
      justify-content: flex-end;
      padding: 10px 24px 0 0;

      a {
        opacity: 0.5;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
</style>
