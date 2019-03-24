<template>
  <div>
    <header>Year <strong>{{currentYear}}</strong> is <strong>{{elapsedYear.toFixed(12)}}%</strong> accomplished...</header>
    <md-progress-bar md-mode="determinate" :md-value="elapsedYear"></md-progress-bar>
  </div>
</template>

<script>
import {getYearElaspedPercent, getCurrentYear} from "./YearElapsedService";

export default {
  name: 'YearElapsed',
  data: function() {
    return {
      elapsedYear: getYearElaspedPercent(),
      currentYear: getCurrentYear(),
      timer: null,
    }
  },
  mounted: function() {
    this.timer = setInterval(() => {
      this.elapsedYear = getYearElaspedPercent()
    }, 100);
  },
  destroyed: function() {
    if (this.timer !== null) {
      clearTimeout(this.timer);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  header {
    padding: 20px;
  }
  .md-progress-bar {
    margin: 0 24px;
    height: 50px;
  }
</style>
