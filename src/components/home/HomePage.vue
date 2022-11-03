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
import  * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

export default {
  components: {
    HomeCard,
  },
  data() {
    return {
      projects: [
        {'id': 0, 'new': false, 'name': 'accordions', 'title': 'Accordion Editor', 'description': '', 'url': 'https://picsum.photos/id/1057/200/300'}, 
        {'id': 1, 'new': true, 'name': 'tables', 'title': 'Table Editor', 'description': '', 'url': 'https://picsum.photos/id/1049/200/300'},
        {'id': 2, 'new': false, 'name': 'custom', 'title': 'Fill in Custom Templates', 'description': '', 'url': 'https://picsum.photos/id/1037/200/300'}
      ]
    }
  },
  methods:{
    init: function() {
        let container = document.getElementById('webgl');

        let camera = new THREE.PerspectiveCamera(100, container.clientWidth/container.clientHeight, 0.01, 10);

        let scene = new THREE.Scene();

        const controls = new OrbitControls(camera, container)
        controls.enableDamping = true

        const textureLoader = new THREE.TextureLoader()
        textureLoader.load(
          'https://dreamworthie.s3.us-east-2.amazonaws.com/particles/8.png',

          function (texture) {
            const particlesGeometry = new THREE.BufferGeometry()
            const count = 1000

            const positions = new Float32Array(count*3)

            for(let i = 0; i < count + 3; i++){
              positions[i] = (Math.random() - 0.5) * 5
            }

            particlesGeometry.setAttribute(
              'position',
              new THREE.BufferAttribute(positions, 3)
            )

            const particlesMaterial = new THREE.PointsMaterial()
            particlesMaterial.size = 0.05
            particlesMaterial.sizeAttenuation = true
            particlesMaterial.color = new THREE.Color('#ffffbf')
            particlesMaterial.alphaMap = texture
            particlesMaterial.transparent = true
            particlesMaterial.depthWrite = false
            particlesMaterial.blending = THREE.AdditiveBlending

            const particles = new THREE.Points(particlesGeometry, particlesMaterial)
            scene.add(particles)

            let renderer = new THREE.WebGLRenderer({antialias: true, alpha: 1});
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setClearColor(0x000000, 0);
            container.appendChild(renderer.domElement);
            const tick = () =>
            {
              particles.rotation.y += 0.0005
              particles.rotation.x += 0.0005
              particles.rotation.z += 0.0005
          
              controls.update()
              renderer.render(scene, camera);

              window.requestAnimationFrame(tick)
            }
            tick()
            const sizes = {
                width: window.innerWidth,
                height: window.innerHeight
            }
            window.addEventListener('resize', () =>
            {
                // Update sizes
                sizes.width = window.innerWidth
                sizes.height = window.innerHeight

                // Update camera
                camera.aspect = sizes.width / sizes.height
                camera.updateProjectionMatrix()

                // Update renderer
                renderer.setSize(sizes.width, sizes.height)
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            })
          })
      } 
  },
  mounted() {
    this.init();
  },
  beforeRouteUpdate() {
    this.init()
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