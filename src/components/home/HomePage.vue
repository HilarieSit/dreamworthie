<template>
  <div id="webgl"></div>
  <div id="home">
    <div id="banner">
      <h1>Dreamworthie</h1>
      <h2>Accessibility Tools for Educators and Content Creators</h2>
    </div>
    <div class="scallop-up"></div>
    <div id="content">
      <div id="wysiwyg">
        <h3 data-aos="fade-up"> WYSIWYG Editors </h3>
        <div id="homecard-container">
          <div class="homecard" data-aos="fade-up" v-for="project in projects" :key="project.id">
            <HomeCard v-bind:project="project" v-bind:ribbon="project.new" />
          </div>
        </div>
      </div>
      <div id="model">
        <h3 data-aos="fade-up"> Accessible 3D Model Package </h3>
        <div id="arduino-container">
          <img id="arduino" data-aos="fade-right" alt="Arduino metro mini 3d model" src="https://dreamworthie.s3.us-east-2.amazonaws.com/arduino.png">
        <div data-aos="fade-up">
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
  font-weight: 900;
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

#model p{
  color: white;
  font-size: 20px;
  text-align: left;
}

#banner{
  background-color: black;
  padding: 30px 10px;
}

#content{
  padding: 10px 20px 50px;
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

.scallop-up{
  height: 100px;
  width: calc(100% + 75px);
  margin-left: -75px;
  background: -webkit-gradient(radial, 50% 100%, 10, 50% 100%, 150, from(#101e27), color-stop(0.49, #101e27), color-stop(0.51, black), to(black));
  background-size: 150px 100%;
}

#arduino-container{
  display: flex;
  align-items: center;
}

#arduino{
  width: 500px;
}

@media only screen and (max-width: 1000px) {
  #wysiwyg h3, #model h3{
    text-align: center !important;
  }
}

@media only screen and (max-width: 700px) {
  #arduino-container{
    display: block;
  }
  #arduino{
    width: 100%;
  }
  #model p{
    text-align: center;
  }
}


</style>