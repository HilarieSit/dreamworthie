<template>
<div class="app">
  <h1> Please wait. Window will automatically close. </h1>
</div>
</template>

<script>
export default {
  data: () => ({
    mounted: false
  }),
  mounted() {
    this.mounted = true
  }
}
</script>

<style scoped>
.app{
    height: calc(100vh - 100px);
    width: 100%;
    overflow: hidden !important;
}
h1{
    text-align: center;
    margin-top: 40vh;
}

</style>