<template>
    <div class="card">
        <img class="card-img-top" alt="Card image cap" :src="person.photourl">
        <div class="card-body">
            <h3 class="card-title">{{person.name}}</h3>
            <p class="card-text">{{person.description}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        person: Object
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
    border-radius: 15px;
}
.card-body{
    margin-left: 20px;
}
p{
    font-size: 23px;
    color: #8B949E;
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