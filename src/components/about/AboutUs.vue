<template>
    <div id="about">
        <div id="banner">
            <h1>About Us</h1>
            <h2>Our mission is to provide tools and information about web accessibility. </h2>
        </div>
        <div class="scallop-up"></div>
        <div id="content">
            <div id="person-container">
                <div class="personcard" data-aos="fade-up" v-for="person in people" :key="person.id">
                    <PersonCard v-bind:person="person" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PersonCard from './PersonCard.vue'

export default {
  components: {
    PersonCard,
  },
  data() {
    return {
      people: [
        {'id': 0, 'name': 'Hilarie Sit', 'description': '', 'photourl': 'https://dreamworthie.s3.us-east-2.amazonaws.com/hilarie.jpg'},
        {'id': 1, 'name': 'Ashley Crelin', 'description': '', 'photourl': 'https://picsum.photos/id/1051/200/300'}
      ]
    }
  }
}
</script>

<style scoped>
#about{
    text-align: center;
}
.personcard{
  text-align: left;
  margin: 15px 7px 0;
}
@media only screen and (max-width: 1000px) {
  h3{
    text-align: left;
  }
}

</style>