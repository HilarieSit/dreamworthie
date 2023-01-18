<template>
  <div id="app-contents" class="light-mode">
    <nav>
      <ul>
        <router-link to="/"><p>dreamworthie</p></router-link>
        <router-link to="/"><li>Tools</li></router-link>
        <router-link to="/blog"><li>Blog</li></router-link>
        <router-link to="/about"><li>About</li></router-link>
        <li><label class="switch" id="switch">
          <input type="checkbox" @change="changeMode">
          <span class="slider round"></span>
        </label></li>
      </ul>
    </nav>
    <div id="routerview">
      <router-view/>
    </div>
    <footer>
        <p> &copy; 2023 Dreamworthie </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    changeMode(){
      const appClasses = document.getElementById("app-contents").classList
      if (appClasses.contains('light-mode')){
        appClasses.remove('light-mode')
      }
      else {
        appClasses.add('light-mode')
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #2196F3;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(16px);
  -ms-transform: translateX(16px);
  transform: translateX(16px);
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
.light-mode nav{
  background-color: rgb(210, 223, 231) !important;
  color: #555
}
.light-mode{
  background-color: #eee !important;
}
.light-mode footer{
  background-color: rgb(210, 223, 231);
  color: #555
}
.light-mode #moon{
  filter: brightness(90%)
}
a {
  color: inherit;
}
#app-contents{
  min-height: 100vh;
  background-color: black;
  overflow: hidden;
}
nav{
  padding: 10px 10px;
  background-color: #101e27 !important;
  font-weight: bold;
  color: #8B949E;
}
nav ul{
  display: block;
  margin: 0;
  padding: 0;
  text-align: right !important;
}
nav ul p{
  font-family: 'Dancing Script', cursive;
  float: left;
  margin-left: 20px;
  font-size: 25px;
  color: #8B949E;
}
nav li{
  display: inline-block;
  margin: 0 20px;
  padding: 5px 0;
  cursor: pointer;
}
nav .router-link-active,
nav .router-link-exact-active {
   color: #008000;
 }
footer {
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 15px 0 0;
  text-align: center;
  width: 100%;
  display: inline-block;
  background-color: #101e27;
  color: #8B949E;
}
footer p {
  text-align: center;
  font-size: 20px;
}
#routerview{
  min-height: calc(100vh - 111px);
}
</style>
