<template>
    <a v-bind:href="blog.url" target="_blank" rel="noopener noreferrer">
        <div class="card">
                <img class="card-img-top" alt="Card image cap" :src="blog.photourl">
                <div class="card-body">
                    <h3 class="card-title">{{blog.name}}</h3>
                    <p class="card-text">{{blog.description}}</p>
                </div>
        </div>
    </a>
</template>

<script>
export default {
    props: {
        blog: Object
    }
}
</script>

<style scoped>
.card{
    background-color: rgba(0,0,0,0);
    border: none;
    padding: 5px;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.card-img-top{
    height: 250px;
    width: 250px;
    object-fit: cover;
    flex-shrink: 0;
}
.card-body{
    margin-left: 20px;
}
p{
    font-size: 23px;
    color: #8B949E;
}
a{
    text-decoration: none;
}

@media only screen and (max-width: 700px) {
    .card{
        display: block;
    }
    .card-img-top{
        width: 100%;
        padding: 0 35px 10px;
    }
}

</style>