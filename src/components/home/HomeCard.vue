<template>
    <div class="card">
        <div v-if="ribbon==true" class="ribbon ribbon-top-right"><span>new</span></div>
        <!-- <img class="card-img-top" alt="Card image cap" :src="project.url"> -->
        <div class="card-body">
            <h4 class="card-title">{{project.title}}</h4>
            <p class="card-text">{{project.description}}</p>
            <button @click="redirectPage(project.name)" class="btn btn-success">Try it out!</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        project: Object,
        ribbon: Boolean
    },
    methods:{
        redirectPage(name){
            this.$router.push('/'+name.toLowerCase()) 
        }
  }
}
</script>

<style scoped>
.card{
    background-color: rgba(0,0,0,0.3);
    padding: 5px;
    width: 18rem;
    color: white;
}
.card-img-top{
    height: 200px;
    object-fit: cover;
    border-bottom: 1px #eee solid;
}
.ribbon {
  width: 125px;
  height: 125px;
  overflow: hidden;
  position: absolute;
}
.ribbon::before,
.ribbon::after {
  position: absolute;
  z-index: -1;
  content: '';
  display: block;
}
.ribbon span {
  position: absolute;
  display: block;
  width: 225px;
  padding: 5px 0;
  background-color:#B31B1B;
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
  color: #fff;
  font: 700 14px/1 'Lato', sans-serif;
  text-shadow: 0 1px 1px rgba(0,0,0,.2);
  text-transform: uppercase;
  text-align: center;
}
.ribbon-top-right {
  top: -5px;
  right: -5px;
}
.ribbon-top-right::before,
.ribbon-top-right::after {
  border-top-color: transparent;
  border-right-color: transparent;
}
.ribbon-top-right::before {
  top: 0;
  left: 0;
}
.ribbon-top-right::after {
  bottom: 0;
  right: 0;
}
.ribbon-top-right span {
  left: -20px;
  top: 20px;
  transform: rotate(45deg);
}

</style>