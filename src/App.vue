<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul>
        <router-link to="/"><li>Tools</li></router-link>
        <router-link to="/blog"><li>Blog</li></router-link>
        <router-link to="/about"><li>About</li></router-link>
      </ul>
    </nav>
    <router-view/>
    <footer>
        <p> &copy; Dreamworthie, 2022 </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
a {
  color: inherit;
}
html{
  height: 100%;
  margin: auto;
  background-color: #101e27;
}
body{
  background-color: #101e27;
  overflow-y: hidden;
}
#app{
  min-height: 100vh;
  background-color: #101e27;
}
.navbar{
  padding-left: 15px;
  background-color: black !important;
}
nav{
  font-weight: bold;
  color: #8B949E;
}
nav ul{
  display: block;
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: right;
}
nav li{
  display: inline-block;
  margin: 0 25px;
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
  padding: 0;
  text-align: center;
  width: 100%;
  display: inline-block;
  background-color: black;
}
footer p {
  text-align: center;
  color: #8B949E;
  font-size: 20px;
}
</style>
