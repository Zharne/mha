import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://mental-health-association.herokuapp.com/posts";
class PostService {
  async create(post) {
    return axios.post(
      API_URL,
      {
        title: post.title,
        description: post.description,
        catergory: post.catergory,
        img: post.img,
      },
      { headers: authHeader() }
    );
  }
  delete(post) {
    return axios.delete(API_URL + post, { headers: authHeader() });
  }
  update(post) {
    return axios.patch(
      API_URL + post._id,
      {
        title: post.title,
        description: post.description,
        img: post.img,
      },
      { headers: authHeader() }
    );
  }
}

export default new PostService();