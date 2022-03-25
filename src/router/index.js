import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../components/Contact.vue'
import Profile from '../components/Profile.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import Blogs from '../views/Blogs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// const router = new VueRouter({
//   routes: [
//     {
//       path:"/Blogs",
//       redirect: {
//         name: "login"
//       }
//     },
//     {
//       path: "/login",
//       name:"login",
//       component: Login
//     },
//     {
//       path:"/auth.module",
//       name:"auth",
//       store:auth,
//        beforeEnter: (to, from, next) => {
//             if(store.state.authenticated == false) {
//               next("/login");
//             } else {
//               next();
//             }
// }
//     }
//   ]
// });
// export default new vueRouter

export default router
