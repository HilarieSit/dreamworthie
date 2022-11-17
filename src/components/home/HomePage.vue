<template>
  <div id="webgl"></div>
  <div id="home">
    <h1>Instructional Design Tools</h1>
    <p id="homep">Tools for creating and editing components for your Canvas pages</p>
    <div id="homecard-container">
      <div class="homecard" v-for="project in projects" :key="project.id">
        <HomeCard v-bind:project="project" v-bind:ribbon="project.new" />
      </div>
    </div>
  </div>
</template>

<script>
import HomeCard from './HomeCard.vue'

export default {
  components: {
    HomeCard,
  },
  data() {
    return {
      projects: [
        {'id': 0, 'new': false, 'name': 'accordions', 'title': 'Accordion Editor', 'description': '', 'url': 'https://picsum.photos/id/1057/200/300'}, 
        {'id': 2, 'new': false, 'name': 'custom', 'title': 'Fill in Custom Templates', 'description': '', 'url': 'https://picsum.photos/id/1037/200/300'},
        {'id': 1, 'new': true, 'name': 'tables', 'title': 'Table Editor', 'description': '', 'url': 'https://picsum.photos/id/1049/200/300'},
        {'id': 3, 'new': true, 'name': 'canvas', 'title': 'Populate Canvas Course', 'description': '', 'url': 'https://picsum.photos/id/1037/200/300'}
      ],
      renderer: null,
      texture: null
    }
  }
}
</script>

<style scoped>
#webgl{
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events:none; 
}
#home{
  text-align: center;
  z-index: 2;
  width: 100%;
}

#homep{
  color: #8B949E;
  width: 80%;
  align-items: center;
  margin: 0 auto;
  font-size: 20px;
}

h1{
  color: white;
  margin-top: 40px;
  font-size: 35px;
  font-weight: 900;
  z-index: 2 !important;
}

#homecard-container{
  margin: 20px auto 0px;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
}

.homecard{
  text-align: left;
  margin: 15px 7px 0;
}

@media only screen and (max-width: 900px) {
  h1{
    font-size: 25px;
  }
}


</style>