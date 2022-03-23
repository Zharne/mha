<template>
  <div class="home">
    <div class="parallax">
    <!-- <h3>THE MENTAL HEALTH ASSOCIATION</h3> -->
    <div class="slide">

    </div>
    </div>
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto id ipsa incidunt laboriosam nisi neque corporis itaque accusantium iste alias perferendis, molestiae tenetur ducimus atque nostrum similique corrupti natus aliquam.
            </p>
          </div>
          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
          </div> 
          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
          </div>  
      </div>
   
      </div>
    </footer>  
    </div>     

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
 
}
</script>
<style scoped>
.home{
  height: 90vh;
}
.img{
  background-repeat: no-repeat;
  
}
.parallax {
  /* The image used */
  background-image: url('https://i.postimg.cc/MpyB8dyc/total-shape-Ianw4-Rd-Vuoo-unsplash.jpg');

  /* Set a specific height */
  min-height: 600px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.site-footer{
  /* background-color: rgb(12, 226, 41); */
  margin-top: 90vh;
}
</style>