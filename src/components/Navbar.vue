<template>
<MDBNavbar expand="lg" light bg="light" container>
    <MDBNavbarToggler
      target="#navbarCenterAlignExample"
      @click="collapse6 = !collapse6"
    ></MDBNavbarToggler>
    <MDBCollapse id="navbarCenterAlignExample" v-model="collapse6">
      <MDBNavbarNav center class="mb-2 mb-lg-0">
        <MDBNavbarItem router-link to="/">Home</MDBNavbarItem>
        <MDBNavbarItem router-link v-if="currentUser" to="/Blogs">User</MDBNavbarItem>
        <MDBNavbarItem router-link to="/Blogs">Blogs</MDBNavbarItem>
        <MDBNavbarItem router-link to="/SignUp">SignUp</MDBNavbarItem> 
        <!-- <div v-if="!currentUser"> -->
        <MDBNavbarItem router-link to="/Login">Login</MDBNavbarItem>
        <MDBNavbarItem router-link to="/Profile">Profile</MDBNavbarItem>
        <!-- </div> -->
         <!-- <MDBNavbarItem router-link to="/Admin">Admin</MDBNavbarItem> -->
        <button class="btn" v-if="currentUser" @click="logOut">Logout</button> 
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script>
// export default {
//   computed: {
//     currentUser() {
//       return this.$store.state.auth.user;
//     },
//   },
//   methods: {
//     logOut() {
//       this.$store.dispatch("auth/logout");
//       this.$router.push("/login");
//     },
//   },
// };
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
export default {
  components: {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
  },
  setup() {
    const collapse6 = ref(false);
    const dropdown9 = ref(false);
    return {
      collapse6,
      dropdown9,
    };
  },
};

</script>

<style scoped>

</style>