<template>
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
        {'id': 0, 'new': 'false', 'name': 'accordions', 'title': 'Accordion Editor', 'description': '', 'url': 'https://picsum.photos/id/1057/200/300'}, 
        {'id': 1, 'new': 'true', 'name': 'tables', 'title': 'Table Editor', 'description': '', 'url': 'https://picsum.photos/id/1049/200/300'},
        {'id': 2, 'new': 'false', 'name': 'custom', 'title': 'Fill in Custom Templates', 'description': '', 'url': 'https://picsum.photos/id/1037/200/300'}
      ]
    }
  }

}
</script>

<style>
#home{
  text-align: center;
}

#homep{
  width: 80%;
  align-items: center;
  margin: 0 auto;
}

h1{
  margin-top: 40px;
  font-size: 30px;
}

#homecard-container{
  margin: 20px auto;
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