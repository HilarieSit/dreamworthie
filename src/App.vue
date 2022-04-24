<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light"><b><span id="nav2Home" @click="redirecthome()">Component Editors</span><span id="navCurrent"> / {{currentRouteName}}</span></b></nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  },
  methods:{
    redirecthome(){
      this.$router.push('/') 
    }

  }
}
</script>

<style>
#app{
  background-color: #eee;
}

#nav2Home{
  cursor: pointer;
}
#nav2Home:hover{
  color: #B31B1B;
}
#navCurrent{
  color: #888;
}
</style>
