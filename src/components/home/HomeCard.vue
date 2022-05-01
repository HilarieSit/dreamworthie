<template>
    <div class="card">
        <img class="card-img-top" alt="Card image cap" :src="project.url">
        <div class="card-body">
            <h5 class="card-title">{{project.title}}</h5>
            <p class="card-text">{{project.description}}</p>
            <button @click="redirectPage(project.name)" class="btn btn-success">Try it out!</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        project: Object
    },
    methods:{
        redirectPage(name){
            this.$router.push('/'+name.toLowerCase()) 
        }
  }
}
</script>

<style>
.card{
    border: 2px #888 solid;
    padding: 5px;
    width: 19rem;
}
.card-img-top{
    height: 200px;
    object-fit: cover;
    border-bottom: 1px #eee solid;
}
</style>