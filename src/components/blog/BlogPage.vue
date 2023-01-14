<template>
  <div id="blog">
        <div id="banner">
            <h1>Blog</h1>
            <h2>Check out our articles!</h2>
        </div>
        <div class="scallop-up"></div>
        <div id="content">
            <div id="blog-container">
                <div class="blogcard" data-aos="fade-up" v-for="blog in blogs" :key="blog.id">
                    <BlogCard v-bind:blog="blog" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogCard from './BlogCard.vue'

export default {
  components: {
    BlogCard,
  },
  data() {
    return {
      blogs: [
        {'id': 0, 'name': '3 Tips for Improving Accessibility of 3D Models on the Web', 'description': 'How I improve accessibility of my Three.js models and how you can too with a3model', 'photourl': 'https://picsum.photos/id/1057/500/500', 'url': 'https://blog.bitsrc.io/3-tips-for-improving-accessibility-of-3d-models-on-the-web-ba7aed77ccb8'}
      ]
    }
  }
}
</script>

<style>
#blog{
  text-align: center;
  z-index: 2;
  width: 100%;
}
.blogcard{
  text-align: left;
  margin: 15px 7px 0;
}


</style>