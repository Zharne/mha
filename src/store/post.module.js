import PostService from "../services/post.service";
const initialState = post ? { post } : { post: null };
export const post = {
  namespaced: true,
  state: initialState,
  actions: {
    create({ commit }, post) {
      return PostService.create(post).then(
        (post) => {
          commit("CreatedPost", post);
          return Promise.resolve(post);
        },
        (error) => {
          commit("NotCreated");
          return Promise.reject(error);
        }
      );
    },
    delete({ commit }, post) {
      return PostService.delete(post).then(
        (post) => {
          commit("CreatedPost", post);
          return Promise.resolve(post);
        },
        (error) => {
          commit("NotCreated");
          return Promise.reject(error);
        }
      );
    },
    // logout({ commit }) {
    //   AuthService.logout();
    //   commit("logout");
    // },
    // register({ commit }, user) {
    //   return AuthService.register(user).then(
    //     (response) => {
    //       commit("registerSuccess");
    //       return Promise.resolve(response.data);
    //     },
    //     (error) => {
    //       commit("registerFailure");
    //       return Promise.reject(error);
    //     }
    //   );
    // },
  },
  mutations: {
    CreatedPost(state, post) {
      state.post = post;
    },
    NotCreated(state) {
      state.post = null;
    },
    // logout(state) {
    //   state.status.loggedIn = false;
    //   state.user = null;
    // },
    // registerSuccess(state) {
    //   state.status.loggedIn = false;
    // },
    // registerFailure(state) {
    //   state.status.loggedIn = false;
    // },
  },
};