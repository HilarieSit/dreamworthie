<template>
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
          <div data-aos="fade-right" id="a3canvas"><canvas class="webgl"></canvas></div>
          <div id="arduino-source" data-aos="fade-up">
            <p>Npm Package <a href="https://www.npmjs.com/package/a3model" class="btn btn-success" target="_blank" rel="noopener noreferrer">Try it out!</a></p>
            <p>Open Source Code <a href="https://github.com/HilarieSit/a3" class="btn btn-success" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCard from './HomeCard.vue'
import * as THREE from 'three'
import A3 from 'a3model'
import 'a3model/src/index.css'

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
  },
  methods: {
    init: function() {
        const canvas = document.querySelector('canvas.webgl')

        // Sizes
        const sizes = {
            width: canvas.offsetWidth,
            height: canvas.offsetHeight
        }

        // Renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        })
        this.renderer.setSize(sizes.width, sizes.height);
        this.renderer.setClearColor( 0x000000, 0 );

        // A3 
        const a3canvas = document.querySelector('#a3canvas');
        this.mya3 = new A3(canvas, this.renderer, a3canvas, sizes);

        // Scene
        this.scene = new THREE.Scene()

        // Camera 
        this.camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
        this.camera.position.z = 30
        this.scene.add(this.camera)

        // Mesh
        const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
        const material = new THREE.MeshPhongMaterial( { 
            color: 0x9862070,
            shininess: 100
        } ) 
        this.mesh = new THREE.Mesh(geometry, material)
        this.mesh.name = "mesh"
        this.mesh = this.mya3.createBox(this.mesh, "button")
        this.scene.add(this.mesh)

        const light = new THREE.AmbientLight(0x404040); // soft white light
        this.scene.add( light );

        const spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(100, 100, 100);
        spotLight.castShadow = true;
        this.scene.add( spotLight );

        // A3 Click 
        let funct = this.mya3.functWrapper(changeColor, this.mesh)
        this.mya3.click(this.mesh.name, funct, 'mesh color changed on click', this.camera)

        function changeColor(child){
            child.material.color.setHex(Math.random() * 0xffffff);
        }

        this.mya3.renderEffects(this.camera)
    },
    animate: function() {
        requestAnimationFrame(this.animate);
        this.mesh.rotation.x += 0.002;
        this.mesh.rotation.y += 0.002;
        this.renderer.render(this.scene, this.camera);
        this.mya3.updateBoxes(this.camera)
        this.mya3.render(this.scene, this.camera)
    }
  },
  mounted() {
      this.init();
      this.animate();
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
  padding: 0 30px;
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

.webgl{
  width: 350px;
  height: 350px;
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
  .webgl{
    width: 100% !important;
  }
}
</style>