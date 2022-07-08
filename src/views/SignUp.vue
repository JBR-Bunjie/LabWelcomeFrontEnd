<template>
  <top_navigator></top_navigator>
  <div class="container">
    <div id="instructions">
      <div>Welcome! Welcome to join Our Lab!</div>
      <div>I firmly believe that we all will have a bright future!</div>
    </div>
    <div id="email_box" class="input_box_area">
      <div>please enter your email</div>
      <span>-> </span><input v-model="this.send_data.Email" type="text" placeholder="example: 123@outlook.com" id="email_input" class="input_area"/>
    </div>
    <div id="username_box" class="input_box_area">
      <div>select a username, ah? </div>
      <span>-> </span><input v-model="this.send_data.Username" type="text" placeholder="example: abc ? (please no)" id="username_input" class="input_area"/>
    </div>
    <div id="passwd_box" class="input_box_area">
      <div>Let's set a passwd!</div>
      <span>-> </span><input v-model="this.send_data.Password" type="text" placeholder="example: 12345678 (if you like <.<)" id="passwd_input" class="input_area"/>
    </div>
    <div id="description_box" class="input_box_area">
      <div>Finally, we reach the last step</div>
      <div>Please, INTRODUCE YOUR SELF, MIC IS YOURS</div>
      <span>-> </span><textarea  v-model="this.send_data.Description" placeholder="Don't be shy" id="description_input" class="input_area"/>
    </div>
    <div class="submit_button" @click="this.send_register_info">submit</div>
  </div>

  <div class="page" id="page2">
    <div>
      <canvas id="canvas_2"></canvas>
    </div>
  </div>

</template>

<script>
import top_navigator from "@/components/top_navigator";
import axios from "axios";

export default {
  name: "SignUp",
  components: {top_navigator,},
  data() {
    return {
      send_data: {
        Username: "",
        Password: "",
        Email: "",
        Description: "",
      },

    }
  },
  methods: {
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
    },

    send_register_info() {
      // console.log(this.send_data)

      axios({
        url: "/api/api/ApplicationFormInfoes",
        method: "POST",
        data: this.send_data,
        // dataType: 'jsonp',
        header: {
          "Contain-Type": "application/json"

        },
        timeout: 3000
      }).then(res => {
        console.log(res.data)
      }).catch(function (error) {
        console.log(error);
      });
    }
  },
  mounted() {
    const catch_result = document.getElementsByClassName("page")
    for (let i = 0; i < catch_result.length; i++) {
      catch_result[i].style.height = `${innerHeight}px`
      catch_result[i].style.top = `${innerHeight * i}px`
    }


    this.canvas_2();
  }

}
</script>

<style scoped>
#canvas_2 {
  z-index: -1;
  /*overflow: hidden;*/
  /*overflow: clip;*/
  overflow: revert;
}
.container {
  z-index: 1;
  /*background: #dfdfdf;*/

  width: 60%;

  margin-left: 20%;
  position: absolute;
  top: 100px;

  color: #5e6f8f;

  font-family: "Cascadia Mono", serif;
}

#instructions {
  background: #0d162c;
  border: 2px #0d162c solid;
  border-radius: 5px;
  /*box-shadow: 0 0 100px 1px #66ccff;*/

  padding: 5px;
  margin-bottom: 20px;
}

.input_box_area{
  background: #0d162c;
  border: 2px #0d162c solid;
  border-radius: 5px;
  /*box-shadow: 0 0 100px 1px #66ccff;*/

  color: #3acdc7;

  padding: 5px;
  margin-bottom: 30px;
}

.input_area{
  text-decoration: none;
  background: #0d162c;
  outline: none;

  width: 400px;
  color: #fff;
}

#description_input {
  height: 200px;
}
.submit_button {
  width: 10%;
  text-align: center;
  margin-left: 40%;

  background: #0d162c;
  border: 1px #66ccff solid;
  border-radius: 5px;
  box-shadow: 0 0 1px 1px #66ccff;

  padding: 5px;
  font-size: 18px;

  display: inline-block;
}
.submit_button:hover {
  color: #fff;
  border: 1px #66ccff solid;
  outline: 2px #66ccff solid;
  cursor: pointer;
}
</style>