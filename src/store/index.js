import Vuex from "vuex";
import Vue from "vue";
import { LoginPageStore } from "./../modules/AdminLogin/store";
import { MovieTableStore } from "./../modules/MovieTable/store";

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        LoginPageStore,
        MovieTableStore
    }
});