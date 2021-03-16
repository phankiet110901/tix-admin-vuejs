import { MovieService } from "./../../../services/movie.service";

const movieService = new MovieService();
export const MovieTableStore = {
  state: {
    isLoading: false,
    allMovies: [],
    errMess: "",
    currentPage: 1,
    totalPage: 1,
  },
  actions: {
    getMovie({ commit }, currentPage = 1) {
      commit("GET_MOVIE_REQUEST");
      movieService
        .getMoviePagination(currentPage)
        .then((res) => {
          commit("GET_MOVIE_SUCCESS", res.data);
        })
        .catch((err) => console.log(err.response));
    },
  },
  getters: {
    isMovieLoading: (state) => state.isLoading,
    allMovies: (state) =>
      state.allMovies.map((movie) => ({
        name: movie.tenPhim,
        alias: movie.biDanh,
        trailer: movie.trailer,
        img: movie.hinhAnh,
        desc: movie.moTa,
        created: movie.ngayKhoiChieu,
        rating: movie.danhGia,
      })),
  },
  mutations: {
    GET_MOVIE_REQUEST(state) {
      state.isLoading = true;
    },
    GET_MOVIE_SUCCESS(state, dataMovie) {
      state.isLoading = false;
      state.allMovies = dataMovie.items;
      state.totalPage = dataMovie.totalPages;
      state.currentPage = dataMovie.currentPage;
    },
  },
};
