<template>
  <div id='About'>
    <div class="content-container">
      <div class="row-content">
            <div class="col-md-6 offset-md-3"> 
              <h1>Our Aim</h1>
              <p>We aim to bring awareness to mental health as a crisis in our society as statistics are showing. Awareness can also create new improvements for the mentally ill. As there is more demand from the public, it can produce a flow of attention.  This attention can eventually result in great changes for the mentally ill.  It can lead to improvements on policy, research, and service development. Let's make this issue a priority because we have a high demand.  If we raise more awareness, the demands may increase and can result in more funding for our needs.</p><br>
              <p>We aim to empower others with knowledge and information to be able to access mental health services. Mental illness cannot be treated by simple desire, treatment is necessary.  We found that in many cases people may not access these services because it is difficult due to cultural or language barriers. If we are aware of our limitations and strengths, stigma may disappear and we might be brave enough to seek help. The more you know, the more power you have.</p><br>
              <p>Taking care of one's mental health is of utmost importance.  We must be informed about it because it can easily happen to someone close to us. Community awareness for mental health reduces stigma. Mental health awareness increases the chances for early intervention, which can result in a fast recovery. Awareness reduces negative adjectives that have been set to describe our people with a metal illness.</p><br>
            </div> 
      </div>
    </div>  
       
      <div class="container2">
        <div class="wrapper">
<div class="card">
  <img src="https://i.postimg.cc/c1VfLTpw/round-image5.jpg" width="100" class="rounded-circle"> <br>
	<h3 class="card-title">Jody March (Chief Editor)</h3>
		<p class="card-content">Jody has many year's experience as an editor and is an intergral part of our team at the Mental Health Association</p>
		
	</div>
	<div class="card">
    <img src="https://the-cyber-squad.com/wp-content/uploads/2021/12/website_photo.png" width="100" class="rounded-circle"> <br>
		<h3 class="card-title">Cameron Phillips (Mindfulness Teacher)</h3>
		<p class="card-content">Cameron is a qualified instructor and is an intergral part of our team at the Mental Health Association</p>
		
	</div>
	<div class="card">
    <img src="https://i.postimg.cc/3JMLWCLN/round-images.jpg" width="100" class="rounded-circle"> <br>
		<h3 class="card-title">Nadine Witbooi (Psychiatrist Advisor)</h3>
		<p class="card-content">Nadine is a licensed psychiatrist and is an intergral part of our team at the Mental Health Association.</p>
		
	</div>
</div>
          
      	
      </div>
    </div>  
</template>

<script>
export default {
  name:"About",
  components: {
  }
}
</script>

<style scoped>
#About{
	 width: 100%;	
}
.content-container{
  background-color: rgb(233, 248, 233);
}
.content{
  border-radius: 30px;
  /* background-color: #1fd1f9; */
  margin: 20px;
  
}
.container1{
  margin-top: 5%;
  margin-left: 10%;
  border-block: 5px;
  height: 30vh;
 
}
.col-3{
  border: solid;
  border-radius: 20px;
  background-color: chartreuse;
}
.container2{
  background-color: rgb(233, 248, 233);
 
}
.wrapper{
     display: flex;
     justify-content: center;
     flex-wrap: wrap;
}
 .card{
    max-width: 300px;
     min-height: 250px;
     background: #4181ee;
     padding: 30px;
     box-sizing: border-box;
     color: #FFF;
     margin:20px;
     box-shadow: 0px 2px 18px -4px rgba(0,0,0,0.75);
}
.rounded-circle{
  margin-left:50px
}
 .card:nth-child(2){
    background: #4181ee;
}
 .card:last-child{
    background: #4181ee;
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