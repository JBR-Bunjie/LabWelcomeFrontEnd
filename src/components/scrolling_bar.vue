<template>
  <div id="scrolling_bar_div">
    <canvas id="scrolling_bar"></canvas>
  </div>
</template>

<script>

export default {
  name: "scrolling_bar",
  setup: () => {},
  methods: {

  },
  mounted() {
    let can_scr_bar = document.getElementById("scrolling_bar")
    const scrolling_bar_param = {width: 20, color: "#000", center_x: 50, center_y: innerHeight / 2}

    can_scr_bar.width = scrolling_bar_param.center_x * 2
    can_scr_bar.height = scrolling_bar_param.center_y * 2

    const can_scr_bar_up_sign_up_moving = () => {
      let can_scr_bar_up_sign_gc = can_scr_bar.getContext("2d")
      can_scr_bar_up_sign_gc.fillStyle = scrolling_bar_param.color

      can_scr_bar_up_sign_gc.beginPath()
      can_scr_bar_up_sign_gc.moveTo(scrolling_bar_param.center_x, scrolling_bar_param.center_y - 100);
      can_scr_bar_up_sign_gc.lineTo(scrolling_bar_param.center_x + 11, scrolling_bar_param.center_y - 90);
      can_scr_bar_up_sign_gc.lineTo(scrolling_bar_param.center_x + 8, scrolling_bar_param.center_y - 92);
      can_scr_bar_up_sign_gc.lineTo(scrolling_bar_param.center_x, scrolling_bar_param.center_y - 99);
      can_scr_bar_up_sign_gc.lineTo(scrolling_bar_param.center_x - 8, scrolling_bar_param.center_y - 92);
      can_scr_bar_up_sign_gc.lineTo(scrolling_bar_param.center_x - 11, scrolling_bar_param.center_y - 90);
      can_scr_bar_up_sign_gc.fill();


      can_scr_bar_up_sign_gc.beginPath()
      can_scr_bar_up_sign_gc.moveTo(scrolling_bar_param.center_x, scrolling_bar_param.center_y - 90);
      can_scr_bar_up_sign_gc.lineTo(scrolling_bar_param.center_x + 11, scrolling_bar_param.center_y - 80);
      can_scr_bar_up_sign_gc.lineTo(scrolling_bar_param.center_x + 8, scrolling_bar_param.center_y - 82);
      can_scr_bar_up_sign_gc.lineTo(scrolling_bar_param.center_x, scrolling_bar_param.center_y - 89);
      can_scr_bar_up_sign_gc.lineTo(scrolling_bar_param.center_x - 8, scrolling_bar_param.center_y - 82);
      can_scr_bar_up_sign_gc.lineTo(scrolling_bar_param.center_x - 11, scrolling_bar_param.center_y - 80);
      can_scr_bar_up_sign_gc.fill();
    }

    const can_scr_bar_down_sign_down_moving = () => {
      let can_scr_bar_down_sign_gc = can_scr_bar.getContext("2d")
      can_scr_bar_down_sign_gc.fillStyle = scrolling_bar_param.color

      can_scr_bar_down_sign_gc.beginPath()
      can_scr_bar_down_sign_gc.moveTo(scrolling_bar_param.center_x, scrolling_bar_param.center_y + 100);
      can_scr_bar_down_sign_gc.lineTo(scrolling_bar_param.center_x + 11, scrolling_bar_param.center_y + 90);
      can_scr_bar_down_sign_gc.lineTo(scrolling_bar_param.center_x + 8, scrolling_bar_param.center_y + 92);
      can_scr_bar_down_sign_gc.lineTo(scrolling_bar_param.center_x, scrolling_bar_param.center_y + 99);
      can_scr_bar_down_sign_gc.lineTo(scrolling_bar_param.center_x - 8, scrolling_bar_param.center_y + 92);
      can_scr_bar_down_sign_gc.lineTo(scrolling_bar_param.center_x - 11, scrolling_bar_param.center_y + 90);
      can_scr_bar_down_sign_gc.fill();

      can_scr_bar_down_sign_gc.beginPath()
      can_scr_bar_down_sign_gc.moveTo(scrolling_bar_param.center_x, scrolling_bar_param.center_y + 90);
      can_scr_bar_down_sign_gc.lineTo(scrolling_bar_param.center_x + 11, scrolling_bar_param.center_y + 80);
      can_scr_bar_down_sign_gc.lineTo(scrolling_bar_param.center_x + 8, scrolling_bar_param.center_y + 82);
      can_scr_bar_down_sign_gc.lineTo(scrolling_bar_param.center_x, scrolling_bar_param.center_y + 89);
      can_scr_bar_down_sign_gc.lineTo(scrolling_bar_param.center_x - 8, scrolling_bar_param.center_y + 82);
      can_scr_bar_down_sign_gc.lineTo(scrolling_bar_param.center_x - 11, scrolling_bar_param.center_y + 80);
      can_scr_bar_down_sign_gc.fill();
    }

    const can_scr_bar_center_sign = () => {
      let can_scr_bar_center_sign_gc = can_scr_bar.getContext("2d")
      can_scr_bar_center_sign_gc.fillStyle = scrolling_bar_param.color

      can_scr_bar_center_sign_gc.beginPath();
      can_scr_bar_center_sign_gc.arc(scrolling_bar_param.center_x, scrolling_bar_param.center_y, scrolling_bar_param.width / 2, 0, Math.PI * 2, true);
      can_scr_bar_center_sign_gc.stroke();

      can_scr_bar_center_sign_gc.beginPath();
      can_scr_bar_center_sign_gc.arc(scrolling_bar_param.center_x, scrolling_bar_param.center_y, scrolling_bar_param.width / 4, 0, Math.PI * 2, true);
      can_scr_bar_center_sign_gc.stroke();

      can_scr_bar_center_sign_gc.beginPath()
      can_scr_bar_center_sign_gc.font = '16px Impact';
      can_scr_bar_center_sign_gc.translate(scrolling_bar_param.center_x,scrolling_bar_param.center_y);
      can_scr_bar_center_sign_gc.rotate(-90 * Math.PI / 180)
      can_scr_bar_center_sign_gc.fillText("scroll", -20, -15)

    }

    can_scr_bar_up_sign_up_moving()
    can_scr_bar_down_sign_down_moving()
    can_scr_bar_center_sign()
  }
}

</script>

<style scoped>
#scrolling_bar_div {
  position: fixed;
  height: 100%;
  width: 100px;
  right: 20px;
  top: 0;
  bottom: 0;
}
</style>