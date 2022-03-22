<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/blogs">Blogs</router-link> |
    <router-link to="/profile">Profile</router-link>
  </div>  -->
  <Navbar/>
  <!-- <About/> -->
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
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: rgb(12, 226, 41);
} */

</style>
