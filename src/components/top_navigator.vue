<template>
  <div id="header_itself">
    <div class="header_tabs" @click="change_page(1)">Main Board</div>
    <div class="header_tabs" @click="change_page(2)">Join US</div>
    <div class="header_tabs" @click="change_page(3)">QA</div>
    <div class="header_tabs" @click="change_page(4)">Resources</div>
    <div class="header_tabs" @click="change_page(5)">About</div><!-- Home/ -->
    <div class="header_tabs" @click="change_page(6)">Sign up/in</div>
  </div>
</template>

<script>

export default {
  name: "top_navigator",
  setup: () => {
    // document.getElementsByClassName("header_tabs")

  },
  methods: {
    change_page: (page_num) => {
      if (page_num === 1) {
        window.open('/')
      // } else if (page_num===2) {
      //
      // } else if (page_num===3) {
      //
      // } else if (page_num===4) {

      } else if (page_num===5) {
        window.open('/about')
      // } else if (page_num===6) {

      }
    },

  }
}
</script>

<style scoped>
#header_itself {
  margin: 50px 10% 5px 0;
  text-align: right;
  /*position: absolute;*/
  /*right: 0;*/
}

.header_tabs {
  display: inline-block;
  position: relative;
  margin: 2px 15px 2px 15px;
}

.header_tabs:hover {
  cursor: pointer;
}

.header_tabs:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #70a5ac; /*#0087ca;*/
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.header_tabs:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>