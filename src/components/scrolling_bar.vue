<template>
  <div id="scrolling_bar">
    <div id="scrolling_bar_up_button" @click="scrolling_up">
      <canvas id="scrolling_bar_up_sign"></canvas>
    </div>
    <div id="scrolling_bar_center">
      <canvas id="scrolling_bar_center_sign"></canvas>
    </div>
    <div id="scrolling_bar_down_button" @click="scrolling_down">
      <canvas id="scrolling_bar_down_sign"></canvas>
    </div>
  </div>

</template>

<script>
export default {
  name: "scrolling_bar",
  methods: {
    scrolling_up: () => {
      document.documentElement.scrollTop = document.documentElement.scrollTop - innerHeight
    },
    scrolling_down: () => {
      document.documentElement.scrollTop = document.documentElement.scrollTop + innerHeight
    }
  },
  mounted() {
    document.getElementById("scrolling_bar_up_sign")
  }
}
</script>

<style scoped>
#scrolling_bar {
  position: absolute;
  right: 20px;
  top: 0;
  bottom: 0;
}
</style>