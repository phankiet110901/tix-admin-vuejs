import Vuex from "vuex"
import { LoginPageStore } from "./../modules/AdminLogin/store"
import Vue from "vue"

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        LoginPageStore,
    }
});