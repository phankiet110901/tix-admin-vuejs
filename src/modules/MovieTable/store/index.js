import { config } from "@/common/config";

export const MovieTableStore = {
  state: {
    isLoading: false,
    allMovie: [],
    errMess: "",
    currentPage: 1,
    totalPage: 1,
  },
  actions: {
    getMovie({ commit }) {
      commit("GET_MOVIE_REQUEST");
    },
  },
  mutations: {
    GET_MOVIE_REQUEST(state) {
      state.isLoading = true;
    },
    GET_MOVIE_SUCCESS(state, allMovie) {},
    GET_MOVIE_FAILED(state, errMess) {},
  },
};
