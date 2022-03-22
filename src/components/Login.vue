<template>
  <div class="img">
    <div class="container">
    <div class="body d-md-flex align-items-center justify-content-between">
        <div class="box-1 mt-md-0 mt-5"></div>
        <div class=" box-2 d-flex flex-column h-100">
            <div class="mt-5">
              <!-- <div class="box-1 mt-md-0 mt-5"><img src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="" alt=""> -->
                <p class="mb-1 h-1">Create Account.</p>
                <p class="text-muted mb-2">Share your thoughts with the world form today.</p>
                <div class="d-flex flex-column ">
                    <p class="text-muted mb-2">Continue with...</p>
                    <div class="d-flex align-items-center"> <a href="#" class="box me-2 selectio"> <span class="fab fa-facebook-f mb-2"></span>
                            <p class="mb-0">Facebook</p>
                        </a> <a href="#" class="box me-2"> <span class="fab fa-google mb-2"></span>
                            <p class="mb-0">Google</p>
                        </a> <a href="#" class="box"> <span class="far fa-envelope mb-2"></span>
                            <p class="mb-0">Email</p>
                        </a> </div>
                    <div class="mt-3">
                        <p class="mb-0 text-muted">Already have an account?</p>
                        <div class="btn btn-primary">Log in<span class="fas fa-chevron-right ms-1"></span></div>
                    </div>
                </div>
            </div>
            <div class="mt-auto">
                <p class="footer text-muted mb-0 mt-md-0 mt-4">By register you agree with our <span class="p-color me-1">terms and conditions</span>and <span class="p-color ms-1">privacy policy</span> </p>
            </div>
            </div>
        </div> <span class="fas fa-times"></span>
    </div>
</div>
    <!-- <div class="wrapper">
    <div class="logo"> <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt=""> </div>
    <div class="text-center mt-4 name"> Twitter </div>
    <form class="p-3 mt-3">
        <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span> <input type="text" name="userName" id="userName" placeholder="Username"> </div>
        <div class="form-field d-flex align-items-center"> <span class="fas fa-key"></span> <input type="password" name="password" id="pwd" placeholder="Password"> </div> <button class="btn mt-3">Login</button>
    </form>
    <div class="text-center fs-6"> <a href="#">Forget password?</a> or <a href="#">Sign up</a> </div>
    </div> -->
  
</template>

<script>
export default {
name:"Login",
  components: {
    
  }
}
</script>

<style scoped>
.img{
  background-image: url('https://i.postimg.cc/MpyB8dyc/total-shape-Ianw4-Rd-Vuoo-unsplash.jpg');
  background-repeat: no-repeat;
  height: 90vh;
}
/* .container {
    margin: 50px auto 
} */

.body {
    position: relative;
    width: 720px;
    height: 90vh;
    /* margin: 20px auto; */
    border: 1px solid rgba(66, 185, 10, 0.867);
    border-radius: 18px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px
}

.box-1 img {
    width: 100%;
    height: 100%;
    object-fit: cover
}

.box-2 {
    padding: 10px
}

.box-1,
.box-2 {
    width: 50%
}

.h-1 {
    font-size: 24px;
    font-weight: 700
}

.text-muted {
    font-size: 14px;
    font-weight: 500;
}

.container .box {
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid rgba(66, 185, 10, 0.867);
    text-decoration: none;
    color: #615f5fdd
}

.box:active,
.box:visited {
    border: 2px solid rgba(66, 185, 10, 0.867)
}

.box:hover {
    border: 2px solid rgba(66, 185, 10, 0.867)
}

.btn.btn-primary {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.867);
    border: 0px;
    padding: 0;
    font-size: 14px
}

.btn.btn-primary .fas.fa-chevron-right {
    font-size: 12px
}

.footer .p-color {
    color: rgba(66, 185, 10, 0.867)
}

.footer.text-muted {
    font-size: 10px
}

.fas.fa-times {
    position: absolute;
    top: 20px;
    right: 20px;
    height: 20px;
    width: 20px;
    background-color: #f3cff379;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center
}

.fas.fa-times:hover {
    color: #ff0000
}

@media (max-width:767px) {
    body {
        padding: 10px
    }

    .body {
        width: 100%;
        height: 100%
    }

    .box-1 {
        width: 100%
    }

    .box-2 {
        width: 100%;
        height: 440px
    }
}
</style>