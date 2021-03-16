<template lang="">
  <v-app>
    <overlay-loading v-if="isMovieLoading"></overlay-loading>
    <!-- table movie -->
    <div>
      <v-btn depressed color="primary" style="margin-bottom: 6px;">
        Add Movie
      </v-btn>
      <v-simple-table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Alias</th>
            <th>Trailer</th>
            <th>Image</th>
            <th>Desciption</th>
            <th>Created</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(movie, index) in allMovies" :key="index">
            <td>{{ movie.name }}</td>
            <td>{{ movie.alias }}</td>
            <td>
              <trailer-modal :linkTrailer="movie.trailer"></trailer-modal>
            </td>
            <td>
              <v-img max-height="150" max-width="250" :src="movie.img"></v-img>
            </td>
            <td>{{ movie.desc }}</td>
            <td>{{ movie.created | formatDate }}</td>
            <td>{{ movie.rating }}</td>
            <td>
              <v-btn depressed>
                Edit
              </v-btn>
              <v-btn depressed color="error">
                Delete
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
      <div class="text-center movie-pagination">
        <v-pagination
          :length="MovieTableStore.totalPage"
          :value="MovieTableStore.currentPage"
          @input="next"
        ></v-pagination>
      </div>
    </div>
  </v-app>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
import OverlayLoading from "./../../../components/Loading/OverlayLoading";
import TrailerModal from "./TrailerModal";

export default {
  components: {
    "overlay-loading": OverlayLoading,
    "trailer-modal": TrailerModal,
  },
  methods: {
    ...mapActions(["getMovie"]),
    next(page) {
      this.$router.push({ path: `/movie/${page}` });
      this.getMovie(this.$route.params.page);
    },
  },
  computed: {
    ...mapGetters(["isMovieLoading", "allMovies"]),
    ...mapState(["MovieTableStore"]),
  },
  created() {
    this.getMovie(this.$route.params.page);
  },
  filters: {
    formatDate: (date) => {
      const newDate = new Date(date);
      return `${newDate.getDate()}/${newDate.getMonth() +
        1}/${newDate.getFullYear()}`;
    },
  },
};
</script>
<style lang="scss">
.movie-pagination {
  justify-content: flex-end;
  display: flex;
  padding-top: 16px;
}
</style>
