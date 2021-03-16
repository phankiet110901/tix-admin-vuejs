<template lang="">
  <v-app>
    <overlay-loading v-if="isMovieLoading"></overlay-loading>
    <!-- table movie -->
    <div>
      <template>
        <div>
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Add movie
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="headline grey lighten-2">
                Add movie
              </v-card-title>

              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">
                  Add movie
                </v-btn>
                <v-btn color="primary" text @click="dialog = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </template>
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
    if (this.$route.params.page) {
      this.getMovie(this.$route.params.page);
    } else {
      this.getMovie(1);
    }
  },
  filters: {
    formatDate: (date) => {
      const newDate = new Date(date);
      return `${newDate.getDate()}/${newDate.getMonth() +
        1}/${newDate.getFullYear()}`;
    },
  },
  data() {
    return {
      dialog: false,
    }
  }
};
</script>
<style lang="scss">
.movie-pagination {
  justify-content: flex-end;
  display: flex;
  padding-top: 16px;
}
</style>
