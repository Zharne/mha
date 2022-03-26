<template>
  <div class="home">
    <div class="parallax">
    <div class="slide"></div>
    </div><br><br>
    <div class="heading">
      <h1>THE MENTAL HEALTH ASSOCIATION</h1>
    </div>  
    <div class="container">
      <div class="content">  
        <h3>What is mental health?</h3>
        <p>Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.
          Over the course of your life, if you experience mental health problems, your thinking, mood, and behavior could be affected.</p><br>
       
        <div class="row">
          <div class="col-sm-6"><h5>CAUSES</h5>
            <p>•Inherited traits. Mental illness is more common in people whose blood        relatives also have a mental illness.
            Certain genes may increase your risk of developing a mental illness, and your life situation may trigger it.</p>
            <p>•Environmental exposures before birth. Exposure to environmental stressors, inflammatory conditions, toxins, alcohol or drugs while in the womb can sometimes be linked to mental illness.</p>
            <p>•Brain chemistry. Neurotransmitters are naturally occurring brain chemicals that carry signals to other parts of your brain and body. When the neural networks involving these chemicals are impaired, the function of nerve receptors and nerve systems change, leading to depression and other emotional disorders.</p>
          </div>
          <div class="col-sm-6"><h5>PREVENTION</h5>
           <p>•Pay attention to warning signs.</p>
           <p>•Get routine medical care.</p>
           <p>•Get help when you need it. </p>
           <p>•Take good care of yourself. Sufficient sleep, healthy eating and regular physical activity are important. Try to maintain a regular schedule. </p>
          </div>  
      </div>  
    </div><br><br> 
    <div class="row">
      <div class="col-sm-3 col-xs-6">
        <img class="image" src= "https://i.postimg.cc/0NfDytRD/nick-fewings-zng-Ppv-ABB4-E-unsplash.jpg">
      </div>
      <div class="col-sm-3 col-xs-6">
        <img class="image" src= "https://imgkub.com/images/2022/03/22/sadness-ge594f7b32_1920.jpg">
      </div>
      <div class="col-sm-3 col-xs-6">
        <img class="image" src= "https://imgkub.com/images/2022/03/22/tablets-g243c0ff75_1920.jpg">
      </div>
      <div class="col-sm-3 col-xs-6">
        <img class="image" src= "https://imgkub.com/images/2022/03/22/falling-ge0396a95f_1920.jpg">
      </div>
    </div><br><br> 
    <div class="row">
      <div class="col-sm-3 col-xs-6">
        <img class="image" src= "https://i.postimg.cc/TY5x63BX/kat-j-NPm-R0-Rblyh-Q-unsplash.jpg">
      </div>
      <div class="col-sm-3 col-xs-6">
        <img class="image" src= "https://i.postimg.cc/cHVvsb1x/pawel-czerwinski-Pr-SEv-Ubkox-A-unsplash.jpg">
      </div>
      <div class="col-sm-3 col-xs-6">
        <img class="image" src="https://i.postimg.cc/bv8qnFxC/pawel-czerwinski-1-RCFUWd4-HJU-unsplash.jpg">
      </div>
      <div class="col-sm-3 col-xs-6">
        <img class="image" src="https://i.postimg.cc/15HkT5wH/nick-fewings-I3-Y1-N-d-k-HU-unsplash.jpg">
      </div>
    </div>
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h5>Mental Health Association's Aim</h5>
            <p class="text-justify">We aim to bring more awareness to the importance of mental health and to offer more education on the topic through our blog.
            </p>
          </div><br><br>
          <!-- <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
          </div>  -->
          <div class="col-xs-6 col-md-3">
            <h5>Quick Links</h5>
            <li><a href="/about" target="_blank">About Us</a></li>
            <li><a href="/contact" target="_blank">Contact</a></li>
            <li><a href="https://www.opencounseling.com/hotlines-za" target="_blank">Helplines</a></li>
          </div>  
        </div>
      </div>
    </footer> 
  </div> 
  </div>      
</template>

<script>
export default {

}
</script>
<style scoped>
.home{
  height: 90vh;
}
.img{
  background-repeat: no-repeat;
  background-size: cover;
  
}
.parallax {
  background-image: url('https://i.postimg.cc/MpyB8dyc/total-shape-Ianw4-Rd-Vuoo-unsplash.jpg');
  min-height: 600px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.heading{
  margin-left: 20%;
}
h1{
  color:rgba(66, 185, 10, 0.867);
}
h5{
  color:rgba(66, 185, 10, 0.867);
}
h3:after {
    content: " ";
    display: block;
    width: 15%;
    height: 2px;
    margin: 10px 20px;
    border: 0;
    background: #BDA26B;
    transition: all 0.2s;
}
.container {
  margin-top: 100px;
  height: 40vh;
}
.content{
  margin-top: 10%;
}
.image{
  height: 30vh;
  width: 20vw;
}

.site-footer{
  /* background-color: rgb(12, 226, 41); */
  margin-top: 50vh;
}
/* @media (min-width: 768px)
.col-sm-3 {
    width: 25%;
}
@media (min-width: 768px)
.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {
    float: left;
}  */
</style>