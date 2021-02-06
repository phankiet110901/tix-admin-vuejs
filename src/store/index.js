import Vuex from "vuex"
import { LoginPageStore } from "./../page/AdminLogin/module"
import Vue from "vue"

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        LoginPageStore,
    }
});