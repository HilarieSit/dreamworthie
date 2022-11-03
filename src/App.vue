<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light"><b><span id="nav2Home" @click="redirecthome()">Dreamworthie</span><span id="navCurrent"> / {{currentRouteName}}</span></b></nav>
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    currentRouteName() {
        document.title = this.$route.name;
        return this.$route.name;
    }
  },
  methods: {
    redirecthome(){
      this.$router.push('/') 
    }
  }
}
</script>

<style scoped>
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
#nav2Home{
  cursor: pointer;
  color: #8B949E;
}
#nav2Home:hover{
  color: #008000;
}
#navCurrent{
  color: white;
}
.navbar{
  padding-left: 15px;
  background-color: rgba(0,0,0,0.3) !important;
}
</style>
