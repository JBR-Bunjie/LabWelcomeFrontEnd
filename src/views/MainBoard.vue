<template>
  <div>
    <top_navigator></top_navigator>

    <div class="page" id="page1">
      <!--        <div>this is first page</div>-->
      <!--      <div class="container">-->
      <!--        <div> <pre>-->

      <!--          -->
      <!--        </pre> </div>-->
      <!--        -->
      <!--        <h1>Welcome~</h1>-->
      <!--        <h2>WE WANT YOU</h2>-->

      <!--      </div>-->
      <div>
        <canvas id="canvas_1"></canvas>
      </div>
    </div>

    <div class="page" id="page2">
      <div>
        <canvas id="canvas_2"></canvas>
      </div>
    </div>

    <div class="page" id="page3">
      <div>
        <canvas id="canvas_3"></canvas>
      </div>
      <!--        <div>this is third page</div>-->
    </div>

  </div>
</template>

<script>
// import 'pure-full-page/lib/pureFullPage.min.css'
// import PureFullPage from 'pure-full-page/lib/pureFullPage.min'
// new PureFullPage();
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic'
import "@/assets/css/global.css"
import "@/assets/css/single_page.css"
// import 'scrollmagic/scrollmagic/minified/ScrollMagic.min'

import top_navigator from "@/components/top_navigator";

let page_num = 0


export default {
  name: "MainBoard",
  components: {top_navigator},
  setup: () => {

  },
  methods: {
    handle_scroll() {
      // const st = window.pageYOffset || document.documentElement.scrollTop
      const st = window.scrollY || document.documentElement.scrollTop

      // alert(st + "\n" + document.documentElement.scrollTop)

      if (st > document.documentElement.scrollTop) {
        // up
        alert("up")

        const target_position = document.documentElement.scrollTop - innerHeight

        const global_scroll = setInterval(function () {
          if (document.documentElement.scrollTop < target_position)
            document.documentElement.scrollTop = document.documentElement.scrollTop - 10
          else {
            clearInterval(global_scroll)
          }
        }, 20)

      } else {
        // down
        const target_position = document.documentElement.scrollTop + innerHeight

        const global_scroll = setInterval(function () {
          if (document.documentElement.scrollTop < target_position)
            document.documentElement.scrollTop = document.documentElement.scrollTop + 10
          else {
            clearInterval(global_scroll)
          }
        }, 20)

        clearInterval(global_scroll)

      }
    },
    canvas_2() {
      const param = {speed: 50, color: "0,255,0", fontsize: 8, characters: "2800"};

      window.wallpaperPropertyListener = {
        applyUserProperties: function (properties) {
          if (properties.speed) {
            param.speed = properties.speed.value;
          }
          if (properties.color) {
            param.color = properties.color.value.split(' ').map(function (c) {
              return Math.ceil(c * 255)
            });
          }
          if (properties.fontsize) {
            param.fontsize = properties.fontsize.value;
          }
          if (properties.characters) {
            param.characters = properties.characters.value;
          }
        }
      };

      var canvas_2 = document.getElementById('canvas_2'),
          // s = window.screen,
          w = canvas_2.width = innerWidth - 17, //document.body.clientWidth, //s.width,
          h = canvas_2.height = innerHeight,//s.height,
          p = Array(Math.ceil(w / (param.fontsize / 3))).join(1).split(''),
          coding_char = canvas_2.getContext("2d");

      canvas_2.style.overflowX = 'hidden'

      function show_title() {
        title_bar_height = 40
        // coding_char.clearRect(w * 0.1 + 10, h * 0.2 - title_bar_height, 100, title_bar_height * 2)
        let title_char = canvas_2.getContext("2d")
        // title_char.fillStyle = "rgb(102, 204, 255)"
        // title_char.fillStyle = "rgb(0,0,0)"
        // title_char.fillRect(w * 0.1 + 10, h * 0.2 - title_bar_height, 200, title_bar_height * 2)
        title_char.fillStyle = "rgb(0, 255, 0)"
        title_char.font = '100px Impact';
        title_char.fillText("coding, until the life ends", w * 0.06 + 20, h * 0.15 + title_bar_height - 5)
        // title_char.fillText("")
      }

      let title_bar_height = 0
      let initial_sleep_time = 250
      const scrolling_words = setInterval(() => {
        if (initial_sleep_time === 0) {
          coding_char.clearRect(w * 0.06, h * 0.15, 10, -title_bar_height)
          coding_char.clearRect(w * 0.06, h * 0.15, 10, title_bar_height)

          coding_char.fillRect(w * 0.06, h * 0.15, 10, -title_bar_height)
          coding_char.fillRect(w * 0.06, h * 0.15, 10, title_bar_height)

          let target_bar_height = 40
          let min_increase_rate = 0.001 * target_bar_height
          let current_increase_rate = Math.log(target_bar_height - title_bar_height) / Math.log(100)

          title_bar_height < 40
              ? title_bar_height = title_bar_height + (
                  current_increase_rate < min_increase_rate
                      ? min_increase_rate
                      : current_increase_rate
              )
              : show_title()

        } else initial_sleep_time--
      }, 10)

      function matrix() {
        coding_char.fillStyle = "rgba(0,0,0,0.05)";
        coding_char.fillRect(0, 0, w, h);
        coding_char.fillStyle = "rgba(" + param.color + ",1)";

        p = p.map(function (v, i) {
          const r = Math.random();
          coding_char.font = param.fontsize + "px Impact";

          // coding_char.fillText(String.fromCharCode(Math.floor(30 + param.characters + r * 33)), i * param.fontsize, v);
          coding_char.fillText(String.fromCharCode(Math.floor(41 + r * (126 - 41))), i * param.fontsize, v);

          v += param.fontsize;

          // return v > 768 + r * 1e4 ? 0 : v
          return v > h / 2 + r * 1e4 ? 0 : v
        });

        setTimeout(matrix, 110 - param.speed);
      }

      matrix()
    }
  },
  created() {
    window.addEventListener("scroll", this.handle_scroll)
    // window.addEventListener("")
  },

  mounted() {
    const catch_result = document.getElementsByClassName("page")
    for (let i = 0; i < catch_result.length; i++) {
      catch_result[i].style.height = `${innerHeight}px`
      catch_result[i].style.top = `${innerHeight * i}px`
    }


    this.canvas_2();

  },
  beforeUpdated() {
  },
  unmounted() {
    window.removeEventListener("scroll", this.handle_scroll)

  }
}

window.onunload = ev => {
  // back to top
  if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) !== -1) {
    alert('Opera');
  } else if (navigator.userAgent.indexOf("Edg") !== -1) {
    // alert('Edge');
    // alert(document.documentElement.scrollTop)
    document.documentElement.scrollTop = 0;
  } else if (navigator.userAgent.indexOf("Chrome") !== -1) {
    // alert('Chrome');
    document.documentElement.scrollTop = 0;
  } else if (navigator.userAgent.indexOf("Safari") !== -1) {
    alert('Safari');
  } else if (navigator.userAgent.indexOf("Firefox") !== -1) {
    alert('Firefox');
  } else if ((navigator.userAgent.indexOf("MSIE") !== -1) || (!!document.documentMode === true)) {
    alert('IE'); //IF IE > 10
  } else {
    alert('unknown');
  }

  ev.preventDefault()
  return ""
}


</script>

<style scoped>
#scrolling_set {
  width: 100%;
  height: 100%;
}
</style>