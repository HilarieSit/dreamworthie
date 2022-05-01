<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light"><b><span id="nav2Home" @click="redirecthome()">Template Editors</span><span id="navCurrent"> / {{currentRouteName}}</span></b></nav>
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
  color: #008000;
}
#navCurrent{
  color: #888;
}
</style>
