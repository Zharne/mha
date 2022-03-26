<template>
  <div class="container">
        <div class="section section1">
            <h2>Get <span style="color: #000;">insights</span> that help your business grow.</h2>
            <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
            <div>
                <div>
                    <h4>10K+</h4>
                    <p>COMPANIES</p>
                </div>
                <div>
                    <h4>314</h4>
                    <p>TEMPLATES</p>
                </div>
                <div>
                    <h4>12M+</h4>
                    <p>QUERIES</p>
                </div>
            </div>
        </div>
        <div class="section section2"></div>
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
/* .img{
  background-image: url('https://i.postimg.cc/MpyB8dyc/total-shape-Ianw4-Rd-Vuoo-unsplash.jpg');
  background-repeat: no-repeat;
  height: 90vh;
} */
body {
            
            font-size: 15px;
            font-family: 'Inter', sans-serif;
        }
        .container {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 50%;
            border-radius: 5px;
            transform: translate(-50%, -50%);
            display: flex;
            flex-direction: row;
            height: 320px;
            background: rgba(66, 185, 10, 0.867);;
            overflow: hidden;
        }
        .section {
            width: 50%;
            height: 100%;
        }
        .section1 {
            color: white;
            padding: 35px 60px 35px 50px;
            box-sizing: border-box;
            margin: 0px;
        }
        .section1 > h2 {
            margin: 10px 0px 20px;
            color: hsl(0, 0%, 100%);
        }
        .section1 > p {
            margin: 10px 5px 30px 0px;
            font-size: 11px;
            color: hsla(0, 0%, 100%, 0.75);
            line-height: 1.8;
        }
        .section1 > div {
            display: flex;
            flex-direction: row;
        }
        .section1 > div div {
            width: 33.3%;
        }
        .section1 > div div h4 {
            margin-bottom: 0px;
            font-size: 18px;
            color: hsl(0, 0%, 100%);
        }
        .section1 > div div p {
            font-size: 9.5px;
            letter-spacing: .4px;
            color: hsla(0, 0%, 100%, 0.6);
        }
        .section2 {
            background: url(https://i.postimg.cc/MpyB8dyc/total-shape-Ianw4-Rd-Vuoo-unsplash.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            overflow: hidden;
        }
        .section2::after {
            position: absolute;
            background-color: hsl(277, 64%, 61%);
            width: 100%;
            height: 100%;
            content: "";
            opacity: .5;
        }
        @media only screen and (min-width: 768px) and (max-width: 1024px) {
            .container {
                width: 80%;
            }
        }
        @media only screen and (max-width: 768px) {
            .container {
                flex-direction: column-reverse;
                height: auto;
                width: 315px;
                margin: 70px auto;
                top: unset;
                position: unset;
                left: unset;
                transform: unset;
            }
            .section1 {
                height: auto;
                width: 315px;
                padding: 40px;
                text-align: center;
            }
            .section2 {
                height: 234px;
                width: 315px;
            }
            .section2::after {
                width: 315px;
                height: 234px;
            }
            .section1 > div {
                display: unset;
            }
            .section1 > div div {
                width: 100%;
                text-align: center;
            }
        }

</style>