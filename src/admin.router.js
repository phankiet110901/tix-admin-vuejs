import VueRouter from "vue-router";
import HomePage from "./container/HomePage.vue";

import { adminLoginRouter } from "./modules/AdminLogin/router";
import { MovieTableRouter } from "./modules/MovieTable/router";

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: HomePage,
      children: [MovieTableRouter],
      meta: {
        requiresAuth: true,
      },
    },
    adminLoginRouter,
  ],
});

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem("accessToken");
  // check have any route need authorization
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!token) {
      next({ path: "login" });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.hasLogined)) {
    // if access to route of login service
    // check logined
    if (token) {
      next({ path: "" }); // if logined, redirect to admin page
    } else {
      next();
    }
  } else {
    next();
  }
});
