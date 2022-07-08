<template>
  <div id="header_itself">
    <div class="header_tabs" onclick="window.open('/')">Main Board</div>
    <div class="header_tabs" onclick="window.open('/')">QA</div>
    <div class="header_tabs" onclick="window.open('/')">Resources</div>
    <div class="header_tabs" onclick="window.open('/')">About</div>
    <div class="header_tabs"><router-link to="/signup" target="_blank">Join US</router-link></div>
    <div class="header_tabs" onclick="window.open('/')">Login</div>
  </div>
</template>

<script>

import router from "@/router";

export default {
  name: "top_navigator",
  setup: () => {},
  methods: {

  },
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #67a5ac;
}
router-link {
  text-decoration: none;
  color: #67a5ac;
}

#header_itself {
  margin: 50px 10% 5px 0;
  /*text-align: right;*/
  color: #67a5ac;
  position: absolute;
  right: 0;
  z-index: 1;
}

.header_tabs {
  display: inline-block;
  position: relative;
  margin: 2px 15px 2px 15px;

  opacity: 0.6;
  font-size: 16px;
  transition: opacity, font-size;
}

.header_tabs:hover {
  cursor: pointer;

  opacity: 1;
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