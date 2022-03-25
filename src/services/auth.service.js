import axios from "axios";
const API_URL = "https://mental-health-association.herokuapp.com/users/";
class AuthService {
  async login(user) {
    return axios
      .post(API_URL + "login", {
        name: user.name,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(user) {
    return axios.post(API_URL + "register", {
      name: user.name,
      email: user.email,
      password: user.password,
    });
  }
}
export default new AuthService();
