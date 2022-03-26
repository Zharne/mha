<template>

  <div class="signup">
      <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true">
			<div class="signup">
				<form @submit="handleRegister" :validation-schema="schema">
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" v-model="name" placeholder="User name" required="">
					<input type="email" v-model="email" placeholder="Email" required="">
					<input type="password" v-model="password" placeholder="Password" required="">
					<button>Sign up</button>
				</form>
			</div>
			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="">
					<input type="password" name="pswd" placeholder="Password" required="">
					<button>Login</button>
				</form>
			</div>
	  </div>
    </div> 
 
</template>

<script>
export default {
// 	computed: {
//     loggedIn() {
//       return this.$store.state.auth.status.loggedIn;
//     },
//   },
//   mounted() {
//     if (this.loggedIn) {
//       this.$router.push("/Login");
//     }
//   },
//   methods: {
//     handleRegister(user) {
		
//       this.errorMessage = "";
//       this.successful = false;
//       this.loading = true;
//       this.$store.dispatch("auth/register", user).then(
//         (data) => {
//           this.message = data.message;
//           this.successful = true;
//           this.loading = false;
//         }
//       ).catch((error) => {
//              error = this.errorMessage;
//       });
//     },
//   },

//    data() {
//        return {
//            username:"",
//            password:"",
//        };
//    },
 methods: {
     register() {
         fetch("https://d0g-blog.herokuapp.com/users/register", {
             method: "POST",
             body: JSON.stringify({
                name: this.name,
                password: this.password,
             }),
             headers: {
                 "Content-type": "application/json; charset=UTF-8",
             },
         })
         .then((response) => response.json())
         .then((json) => {
             this.msg = `${this.name} registered Successfully`;
             alert("redirecting to login...");
             localStorage.setItem("jwt", json.jwt);
             this.$router.push({name: "Login"});
         })
         .catch((err) => {
             alert(err);
         });
     },
 },
};
</script>

<style scoped>

body{
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	font-family: 'Jost', sans-serif;
	/* background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e); */
}
.main{
	width: 350px;
	height: 500px;
	background: rgb(123, 255, 0);
	overflow: hidden;
	background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38") no-repeat center/ cover;
	border-radius: 10px;
	box-shadow: 5px 20px 50px #000;
    margin-top: 50px; 
	margin-left: 35%;
}
#chk{
	display: none;
}
.signup{
	position: relative;
	width:100%;
	height: 100%;
}
label{
	color: rgb(0, 0, 0);
	font-size: 2.3em;
	justify-content: center;
	display: flex;
	margin: 60px;
	font-weight: bold;
	cursor: pointer;
	transition: .5s ease-in-out;
}
input{
	width: 60%;
	height: 30px;
	background: rgba(66, 185, 10, 0.867);;
	justify-content: center;
	display: flex;
	margin: 20px auto;
	padding: 10px;
	border: none;
	outline: none;
	border-radius: 5px;
}
button{
	width: 60%;
	height: 40px;
	margin: 10px auto;
	justify-content: center;
	display: block;
	color: rgb(0, 0, 0);
	background: rgba(66, 185, 10, 0.867);;
	font-size: 1em;
	font-weight: bold;
	margin-top: 20px;
	outline: none;
	border: none;
	border-radius: 5px;
	transition: .2s ease-in;
	cursor: pointer;
}
button:hover{
	background: rgba(26, 68, 6, 0.867);;
}
.login{
	height: 460px;
	background: rgba(66, 185, 10, 0.867);;
	border-radius: 60% / 10%;
	transform: translateY(-180px);
	transition: .8s ease-in-out;
}
.login label{
	color: rgba(0, 0, 0);;
	transform: scale(.6);
}

#chk:checked ~ .login{
	transform: translateY(-500px);
}
#chk:checked ~ .login label{
	transform: scale(1);	
}
#chk:checked ~ .signup label{
	transform: scale(.6);
}

</style>