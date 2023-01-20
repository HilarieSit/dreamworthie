<template>
  <div id="app-contents" class="light-mode">
    <nav>
      <div id="nav-items">
        <p>dreamworthie</p>
        <button id="menu" @click="toggleMenu">
          <div id="bar1" class="bar"></div>
          <div id="bar2" class="bar"></div>
          <div id="bar3" class="bar"></div>
        </button>
        <ul id="menu-items" class="closed">
          <li><router-link to="/" @click="closeMenu">Tools</router-link></li>
          <li><router-link to="/blog" @click="closeMenu">Blog</router-link></li>
          <li><router-link to="/about" @click="closeMenu">About</router-link></li>
          <li v-if="$store.state.user"><router-link to="/dashboard" @click="closeMenu">Dashboard</router-link></li>
          <li><button id="mode" @click="changeMode"><img id="mode-icon" src="./assets/mode.png" alt="toggle light mode"></button></li>
          <li v-if="!$store.state.user"><router-link to="/login" @click="closeMenu" id="login-btn" class="btn btn-success">Sign in</router-link></li>
          <li v-if="$store.state.user" @click="$store.dispatch('logout')" id="logout-btn" class="btn btn-success">Log out</li>
        </ul>
      </div>
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
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

require('./assets/mode.png')
window.addEventListener('resize', function() {
   if (window.innerWidth >= 700) {
    document.body.style.overflowY = 'scroll'
  }
}, true);
export default {
  name: 'app',
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  },
  methods: {
    changeMode(){
      const appClasses = document.getElementById("app-contents").classList
      if (appClasses.contains('light-mode')){
        appClasses.remove('light-mode')
      }
      else {
        appClasses.add('light-mode')
      }
      this.closeMenu()
    },
    closeMenu(){
      const menu = document.getElementById("menu-items")
      document.body.style.overflowY = "scroll"
      this.uncross()
      menu.classList.add('closed')
    },
    toggleMenu(){
      const menu = document.getElementById("menu-items")
      if (menu.classList.contains('closed')){
        document.body.style.overflowY = "hidden"
        this.cross()
        menu.classList.remove('closed')
      } else {
        document.body.style.overflowY = "scroll"
        this.uncross()
        menu.classList.add('closed')
      }
    },
    cross(){
      document.getElementById("bar1").style.transform = "rotate(-45deg) translate(-6px, 6px)"
      document.getElementById("bar2").style.opacity = "0"
      document.getElementById("bar3").style.transform = "rotate(45deg) translate(-5px, -6px)"
    },
    uncross(){
      document.getElementById("bar1").style.transform = "none"
      document.getElementById("bar2").style.opacity = "1"
      document.getElementById("bar3").style.transform = "none"
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
.btn-success{
  color: white !important;
}
#mode-icon{
  width: 22px;
  padding-bottom: 5px;
  filter: invert(70%);
}
#mode{
  border: none;
  background-color: rgba(0,0,0,0);
}
.light-mode #mode-icon{
  filter: none;
}
.light-mode nav{
  background-color: rgb(210, 223, 231) !important;
  color: #555;
  box-shadow: 0 3px 3px -3px grey;
}
.light-mode nav p{
  color: #555;
}
.light-mode{
  background-color: #eee !important;
}
.light-mode footer{
  background-color: rgb(210, 223, 231);
  color: #555;
  box-shadow: 0 3px 3px 3px grey;
}
a {
  color: inherit;
  text-decoration: none;
}
#app-contents{
  min-height: 100vh;
  background-color: #1a1a1a;
  overflow: hidden;
}
nav{
  padding: 10px 5px;
  background-color: black;
  font-weight: bold;
  color: #8B949E;
}
#nav-items{
  margin: 0 auto;
  max-width: 1200px;
}
nav ul{
  display: block;
  margin: 0;
  padding: 0;
  text-align: right !important;
}
nav p{
  font-family: 'Dancing Script', cursive;
  float: left;
  margin-top: 5px;
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
  background-color: black;
  color: #8B949E;
}
footer p {
  text-align: center;
  font-size: 20px;
}
#routerview{
  min-height: calc(100vh - 111px);
}
.closed{
  display: block;
}
#menu{
  display: none;
}
#logout-btn{
  padding: 0.375rem 0.75rem;
}
@media only screen and (max-width: 700px) {
  #menu{
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    margin: 5px 15px 0 0;
    border: none;
    background-color: inherit;
  }
  .bar {
    width: 25px;
    height: 3px;
    background-color: #8B949E;
    margin: 5px 0;
    transition: 0.4s;
    border-radius: 5px;
  }
  .light-mode .bar{
    background-color: #555;
  }
  nav p{
    float: none;
    text-align: center;
    margin: 0;
  }
  .closed{
    display: none;
  }
  nav ul{
    position: absolute;
    right: 20px;
    margin-top: 10px;
    padding: 30px 0 30px 0;
    background-color: black;
    z-index: 6;
    border-radius: 20px;
    width: 200px;
    box-shadow: #000 0px 8px 24px;
  }
  .light-mode nav ul{
    background-color: #eee;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  nav li{
    display: block;
    text-align: center;
    margin: 10px 40px;
    font-size: 25px;
  }
  #login-btn{
    font-size: 25px;
  }
}
</style>
