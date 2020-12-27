<template>
  <div>
    <section>Year <strong>{{currentYear}}</strong> is <strong>{{elapsedYear.toFixed(12)}}%</strong> accomplished...</section>
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
      this.currentYear = getCurrentYear()
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

  div {
    text-align: center;

    section {
      padding: 20px;
    }
    .md-progress-bar {
      margin: 0 24px;
      height: 50px;
    }
  }

</style>
