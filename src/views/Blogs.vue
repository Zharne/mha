<template>
  <div class="add">
          <button
          id="submit-btn"
          class="btn btn-mod btn-border btn-large"
          @click="toggleModal"
        >
          Create a Post
        </button>
  </div>
  <div v-if="posts.length">
    <div v-for="post in posts" :key="post">
        <!-- <h1>Responsive Card</h1> -->
      <div class="wrapper">
        <div class="card">
          <h3 class="card-title">{{post.title}}</h3>
            <p class="card-content">{{post.description}}</p>
            <button class="card-btn">READ MORE</button><br>
          <div class="utility-info">
            <ul class="utility-list">
              <li><span class="licon icon-like"></span><a href="#">2</a></li>
              <li><span class="licon icon-com"></span><a href="#">12</a></li>
              <li><span class="licon icon-dat"></span>{{post.date}}</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
  </div>
  <div v-else>
    <p>loading content...</p>
  </div>
</template>

<script>
export default { 
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    fetch('https://mental-health-association.herokuapp.com/posts') // ADD HEROKU LINK INSTEAD OF LOCALHOST
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.posts = data
      })
      .catch(err => console.log(err.message))
  }
}

</script>

<style>

.utility-info {
  position: absolute;
  bottom: 0px;
  left: 0;
  z-index: 20;
  width:100%;
  text-align:left
}
.utility-info:after{
  content:" ";
  /* background: url(https://rawcdn.githack.com/Nodws/NodPen/ffad95aa5244b4b09a3c7c1508a018959bbedb7e/postItem/licons.svg) center no-repeat; */
  background-size: 30px auto;
  display:block;
  opacity: 0.4;
  position:absolute;
  bottom:25px;
  right:15px;
  width:30px;
  height:15px
}
.utility-info a:hover{
  text-decoration:underline
}
.utility-list {
  list-style-type: none;
  margin: 0 0 10px 20px;
  padding: 0;
  width: 100%;

}
.utility-list li {
  margin: 0 5px 0 0;
  padding: 3px 0 15px 0px;
  display: inline-block;
  
  font-size:0.8em
}

.licon{
  position:relative;  
   width:23px;
   height:15px;
   display:inline-block;
   vertical-align:middle;
}
.licon:before{
  content:"";
   /* background:url(https://rawcdn.githack.com/Nodws/NodPen/ffad95aa5244b4b09a3c7c1508a018959bbedb7e/postItem/licons.svg?) -2px -6px no-repeat; */
   background-size:250px;
   width:26px;
   height:20px;
   display:inline-block;
   vertical-align:middle;
   position:absolute;
   top:-3px;
   left:0;
}
.icon-white{
   filter: brightness(10);
}
.icon-black{
   filter: brightness(0);
   opacity:0.6
}
.icon-like:before{
  background-position: -183px -6px;

}
.icon-com:before{
  background-position: -63px -4px;

}
.icon-dat:before{
  background-position: -94px -7px;
}
.icon-tag:before{
  background-position: -33px -6px;

}

@media (max-width:750px)
{
  .utility-info {
    text-align:center;
  }
  .utility-info ul{
    width:100%;
    margin:0;
    box-sizing:border-box
  }
  .utility-info li{
    width:49%;
    display:inline-block;
    box-sizing:border-box;
    margin:0
  }
}

@media (max-width:500px){
  .utility-info li:last-of-type{
    width:100%
  }
  .card-info{
    display:none
  }
  .blog-card:hover .title-content,.title-content{
  margin-top:40px
}
.blog-card{
  height:300px
}
.blog-card h3{
  font-size:1.3em
}
.intro{
  font-size:0.8em
}
}


@import url('https://fonts.googleapis.com/css?family=Roboto');
 body{
     font-family: 'Roboto', sans-serif;
}
 h1{
     text-align: center;
     color: #4181ee;
}
 .wrapper{
     display: flex;
     justify-content: center;
     flex-wrap: wrap;
}
 .card{
    max-width: 300px;
     min-height: 250px;
     background: #02b875;
     padding: 30px;
     box-sizing: border-box;
     color: #FFF;
     margin:20px;
     box-shadow: 0px 2px 18px -4px rgba(0,0,0,0.75);
}
 .card:nth-child(2){
    background: #4181ee;
}
 .card:last-child{
    background: #673ab7;
}
 .card-title{
     margin-top: 0;
     font-size: 16px;
     font-weight: 600;
     letter-spacing: 1.2px;
}
 .card-content{
     font-size: 14px;
     letter-spacing: 0.5px;
     line-height: 1.5;
}
 .card-btn{
     all: unset;
     display: block;
     margin-left: auto;
     border: 2px solid #FFF;
     padding: 10px 15px;
     border-radius: 25px;
     font-size: 10px;
     font-weight: 600;
     transition: all 0.5s;
     cursor: pointer;
     letter-spacing: 1.2px;
}
 .card-btn:hover{
    color:#02b875;
    background: #FFF;
}
 .card:nth-child(2) .card-btn:hover{
    color:#4181ee;
    background: #FFF;
}
 .card:last-child .card-btn:hover{
    color:#673ab7;
     background: #FFF;
}


</style>