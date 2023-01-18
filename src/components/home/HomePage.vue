<template>
  <div id="webgl"></div>
  <div id="home">
    <div id="banner">
      <h1>Accessibility Tools</h1>
      <h2>for Educators and Content Creators</h2>
    </div>
    <div id="content">
      <div id="wysiwyg">
        <h3 data-aos="fade-up"> WYSIWYG Editors</h3>
        <p data-aos="fade-up"> Create stylish and accessible Canvas components with our WYSIWYG Editors. </p>
        <div id="homecard-container">
          <div class="homecard" data-aos="fade-up" v-for="project in projects" :key="project.id">
            <HomeCard v-bind:project="project" v-bind:ribbon="project.new" />
          </div>
        </div>
      </div>
      <div id="model">
        <h3 data-aos="fade-up"> Accessible 3D Models </h3>
        <p data-aos="fade-up"> a3model aims to improve the accessibility of Three.js models by offering keyboard navigation for hover and click events, focus indication on meshes/objects, mobile touch events, cursor updates, and roles/descriptions for screen readers. </p>
        <div id="arduino-container">
        <!-- <img id="arduino" data-aos="fade-right" alt="Arduino metro mini 3d model" src="https://dreamworthie.s3.us-east-2.amazonaws.com/arduino.png"> -->
        <div id="arduino-source" data-aos="fade-up">
          <p>Npm Package <a href="https://www.npmjs.com/package/a3model" target="_blank" rel="noopener noreferrer"><button class="btn btn-success">Try it out!</button></a></p>
          <p>Open Source Code <a href="https://github.com/HilarieSit/a3" target="_blank" rel="noopener noreferrer"><button class="btn btn-success">View on GitHub</button></a></p>
        </div>
        </div>
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
        {'id': 0, 'name': 'accordions', 'title': 'Accordion Editor', 'description': '', 'url': 'https://picsum.photos/id/1057/200/300'}, 
        {'id': 1, 'name': 'tables', 'title': 'Table Editor', 'description': '', 'url': 'https://picsum.photos/id/1049/200/300'},
        {'id': 2, 'name': 'custom', 'title': 'Fill in Templates', 'description': '', 'url': 'https://picsum.photos/id/1037/200/300'}
      ]
    }
  }
}
</script>

<style>
.light-mode h3, .light-mode h1, .light-mode h4{
  color: black !important;
}
.light-mode #banner{
  background-color: rgb(210, 223, 231) !important;
}
.light-mode p{
  color: #555 !important;
}
.light-mode #banner h2{
  color: #555;
}
.light-mode #arduino{
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
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

h1{
  color: white;
  font-size: 35px;
  font-weight: 800;
  z-index: 2 !important;
  margin: 0 0 10px;
}

#banner h2{
  color: #8B949E;
  width: 80%;
  align-items: center;
  margin: 0 auto;
  font-size: 25px;
}

#content p{
  color: #8B949E;
  font-size: 20px;
  text-align: left;
}

#arduino-source p{
  color: white;
  padding: 10px 30px;
}

#banner{
  background-color: #101e27;
  padding: 40px 10px 80px;
}

#content{
  padding: 50px 20px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

h3{
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-align: left;
}

#homecard-container{
  margin: 20px auto 0px;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-items: center;
  justify-content: center;
}

.homecard{
  text-align: left;
  margin: 15px 7px 0;
}

#arduino-container{
  display: flex;
  align-items: center;
}

#arduino{
  width: 500px;
  border-radius: 20px;
}

#model, #wysiwyg{
  margin: 0 20px;
}

#accordion-gif{
  width: 500px;
}
#accordion-container{
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}

#accordion-source{
  padding: 20px;
}

h4{
  color: white;
  text-align: left;
}

@media only screen and (max-width: 700px) {
  #arduino-container{
    display: block;
  }
  #arduino{
    width: 100%;
  }
  #arduino-source{
    padding-top: 30px;
  }
  #arduino-source p{
    text-align: center;
  }
}
</style>