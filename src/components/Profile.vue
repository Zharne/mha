<template>
  <div class="img">
     	
  </div>
</template>

<script>
// export default {
//    data() {
//        return {
//            username:"",
//            email: "",
//            password:"",
//        };
//    },
// methods: {
//     register() {
//         fetch("https://mental-health-association.herokuapp.com/users/register", {
//             method: "POST",
//             body: JSON.stringify({
//                 username: this.username,
//                 email: this.email,
//                 password: this.password,
//             }),
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8",
//             },
//         })
//         .then((response) => response.json())
//         .then((json) => {
//             this.msg = `${this.name} registered Successfully`;
//             alert("redirecting to login...");
//             localStorage.setItem("jwt", json.jwt);
//             this.$router.push({name: "Login"});
//         })
//         .catch((err) => {
//             alert(err);
//         });
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


</style>