<template>
  <div class="home">
    <div class="parallax">
    <div class="slide"></div>
    </div>
    <h3>THE MENTAL HEALTH ASSOCIATION</h3>
    <div class="content">
      <div class="container">
    <div class="prod-card">
      <div class="row">
        <div class="col-5">
          <div class="img">
            <img src="https://picsum.photos/id/318/320" alt="shirt" />
          </div>
        </div>
        
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card w-100">
            <div class="card-body">
              <h5 class="card-title">Comment's</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <div class="form-outline">
                <input
                  type="text"
                  id="form16"
                  class="form-control"
                  data-mdb-showcounter="true"
                  maxlength="50"
                />
                <label class="form-label" for="form16">Add comment</label>
                <div class="form-helper"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
.container {
  margin-top: 5.5em;
  height: 65vh;
}
.content{
  margin-top: 50%;
}
.prod-card {
  width: 900px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}

.img {
  width: 320px;
  float: left;
  overflow: hidden;
}
.img img {
  width: 100%;
}

.prod-title {
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: bold;
}

.prod-info {
  float: left;
  padding: 20px 40px;
}
.prod-info span {
  display: block;
  overflow: hidden;
  margin: 4px;
}
.prod-info span a {
  display: block;
  float: left;
  padding: 2px 4px;
  margin-right: 6px;
  border: 2px solid;
  color: #e67e22;
  font-size: 20px;
  border-radius: 8px;
}

.desc {
  font-size: 20px;
  color: #95a5a6;
}

.price {
  color: #2980b9;
  font-size: 40px;
  font-weight: 700;
}

.add {
  width: 260px;
  font-size: 24px;
  color: white;
  background: #2c3e50;
  display: block;
  float: left;
  padding: 8px;
  text-align: center;
  margin: 8px 0;
  transition: opacity 0.4s;
}
.add:hover {
  opacity: 0.7;
}

@media screen and (min-width: 100px) and (max-width: 799px) {
}
.site-footer{
  /* background-color: rgb(12, 226, 41); */
  margin-top: 90vh;
}
</style>