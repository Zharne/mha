<template>
  <Navbar/>
  <router-view/>
</template>
<script>
import Navbar from "@/components/Navbar.vue"
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Blogs from "@/views/Blogs.vue"
import Contact from "@/components/Contact.vue"

  export default {
    components: {
   Navbar, Home, About, Blogs, Contact
    },
  };
</script>
<style scoped>


</style>
