import VueRouter from "vue-router";
import HomePage from "./../page/HomePage/HomePage.vue";
import AdminLogin from "./../page/AdminLogin/AdminLogin.vue";
import MovieTable from "./../components/MovieTable/MovieTable.vue";

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: HomePage,
      children: [
        {
          path: "/movie",
          component: MovieTable,
        },
      ],
    },
    {
      path: "/login",
      component: AdminLogin,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path === "/" && !sessionStorage.getItem("accessToken")) {
    next({ path: "login" });
  } else {
    next();
  }
});
