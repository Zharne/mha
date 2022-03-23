<template>
  <div class="signup">
    
  </div>
</template>

<script>
export default {
   data() {
       return {
           username:"",
           password:"",
       };
   },
methods: {
    register() {
        fetch("https://d0g-blog.herokuapp.com/users/register", {
            method: "POST",
            body: JSON.stringify({
                username: this.username,
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

<style>

</style>