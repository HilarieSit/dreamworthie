<template>
  <div id="home">
    <h1>Templates</h1>
    <p id="homep">Edit template and copy and paste to add beautiful components on your Canvas pages!</p>
    <div id="homecard-container">
      <div class="homecard" v-for="project in projects" :key="project.id">
        <HomeCard v-bind:project="project" />
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
        {'id': 0, 'name': 'Accordions', 'description': '', 'url': 'https://dreamworthie.s3.us-east-2.amazonaws.com/accordion-example.png'}, 
        {'id': 1, 'name': 'Tables', 'description': '', 'url': 'https://dreamworthie.s3.us-east-2.amazonaws.com/table-example-bootstrap.png'}
      ],
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