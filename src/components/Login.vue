<template>
    <div id="login">
    <div class="img"> 
      <div class="wrapper">
    <div class="logo"><img
        class="headshot"
        src="https://imgkub.com/images/2022/03/22/avatar-dummy-png-transparent-png.png"/> 
    </div>
     <div class="text-center mt-4 name">Login</div>
    <!-- <form @submit="handleLogin" :validation-schema="schema" class="p-3 mt-3">  -->
        <form @submit.prevent="login">
        <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>
         <input type="text" v-model="name" id="name" placeholder="Username"> </div>
        <div class="form-field d-flex align-items-center"> <span class="fas fa-key"></span>
         <input type="password" v-model="password" id="pwd" placeholder="Password"> </div>
        <button class="btn mt-3" type="submit">Login</button>
        <!-- <button type="button" v-on:click="login()">Login</button>  -->
        </form>
    <div class="text-center fs-6"> <a href="#">Forget password?</a> or <a href="/signup">Sign up</a> </div>
    </div> 
    <!-- <div class="containers">
    <div class="column">
      <h1 style="color: white">WELCOME BACK PLEASE LOG IN</h1>
      <div id="login" class="mt-5">
        <img
          id="profile-img"
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          class="profile-img-card"
        />
        <Form @submit="handleLogin" :validation-schema="schema">
          <div class="form-group">
            <label for="fullname"></label>
            <Field
              name="fullname"
              type="text"
              class="form-control"
              placeholder="Fullname"
            />
            <ErrorMessage name="fullname" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="password"></label>
            <Field
              name="password"
              type="password"
              class="form-control"
              placeholder="Password"
            />
            <ErrorMessage name="password" class="error-feedback" />
          </div>
          <div class="form-group">
            <button class="btn btn-primary m-3" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Login</span>
            </button>
            <br />
            <p style="color: black" class="register">
              Not a member? <a href="/register">Create an account</a>
            </p>
          </div>
          <div class="form-group">
            <div v-if="message" class="alert alert-danger" role="alert">
              {{ message }}
            </div>
          </div>
        </Form>
      </div>
      </div> 
    </div>
  </div> -->
    </div> 
    </div> 
</template>

<script>
export default {
  data() {
    return {
        name: "",
        // accessToken: "",
        password: "",
      };
    },
    methods:{
    login() {

    fetch("https://mental-health-association.herokuapp.com/", {
    method:"POST",
    // mode: "no-cors",
    body: JSON.stringify ({
      name: this.name,
    //    accessToken: this.accessToken,
      password: this.password,
    }),
    headers: {
    "Content-type": "application/json; charset=UTF-8",
    },
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
        localStorage.getItem("jwt", json.jwt);
        alert("User logged in");
        //   this.$router.push({name: "Blogs"});
        })
        .catch((err) => {
        alert(err);
        });
      },
    }
}
    // import { Form, Field, ErrorMessage } from "vee-validate";
    // import * as yup from "yup";

    // export default {
    // name: "Login",
    // components: {
    //     Form,
    //     Field,
    //     ErrorMessage,
    // },
    // data() {
    //     const schema = yup.object().shape({
    //     fullname: yup.string().required("username is required"),
    //     password: yup.string().required("Password is required"),
    //     });
    //     return {
    //     loading: false,
    //     message: "",
    //     schema,
    //     };
    // },
    // computed: {
    //     loggedIn() {
    //     return this.$store.state.auth.status.loggedIn;
    //     },
    // },
    // created() {
    //     if (this.loggedIn) {
    //     this.$router.push("/profile");
    //     }
    // },
    // methods: {
    //     handleLogin(user) {
    //     this.loading = true;
    //     this.$store.dispatch("auth/login", user).then(
    //         () => {
    //         this.$router.push("/profile");
    //         },
    //         (error) => {
    //         this.loading = false;
    //         this.message =
    //             (error.response &&
    //             error.response.data &&
    //             error.response.data.message) ||
    //             error.message ||
    //             error.toString();
    //         }
    //     );
    //     },
    // },
    // };
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');


 body {
     background: #ecf0f3
 }

 .wrapper {
     max-width: 350px;
     min-height: 500px;
     /* margin: 80px auto; */
     padding: 40px 30px 30px 30px;
     background-color: #ecf0f3;
     border-radius: 15px;
     box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff
 }

 .logo {
     width: 80px;
     margin: auto
 }

 .logo img {
     width: 100%;
     height: 80px;
     object-fit: cover;
     border-radius: 50%;
     box-shadow: 0px 0px 3px #5f5f5f, 0px 0px 0px 5px #ecf0f3, 8px 8px 15px #a7aaa7, -8px -8px 15px #fff
 }
.headshot {
  width: 100%;
  margin-top: 50px;
  border-radius: 180%;
}
 .wrapper .name {
     font-weight: 600;
     font-size: 1.4rem;
     letter-spacing: 1.3px;
     padding-left: 10px;
     color: #555
 }

 .wrapper .form-field input {
     width: 100%;
     display: block;
     border: none;
     outline: none;
     background: none;
     font-size: 1.2rem;
     color: #666;
     padding: 10px 15px 10px 10px
 }

 .wrapper .form-field {
     padding-left: 10px;
     margin-bottom: 20px;
     border-radius: 20px;
     box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff
 }

 .wrapper .form-field .fas {
     color: #555
 }

 .wrapper .btn {
     box-shadow: none;
     width: 100%;
     height: 40px;
     background-color: rgba(66, 185, 10, 0.867);
     color: #fff;
     border-radius: 25px;
     box-shadow: 3px 3px 3px #b1b1b1, -3px -3px 3px #fff;
     letter-spacing: 1.3px
 }

 .wrapper .btn:hover {
     background-color: rgba(66, 185, 10, 0.867)
 }

 .wrapper a {
     text-decoration: none;
     font-size: 0.8rem;
     color: rgba(66, 185, 10, 0.867)
 }

 .wrapper a:hover {
     color: rgba(66, 185, 10, 0.867)
 }

 @media(max-width: 380px) {
     .wrapper {
         margin: 30px 20px;
         padding: 40px 15px 15px 15px
     }
 }

</style>