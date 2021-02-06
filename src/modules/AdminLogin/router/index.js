import AdminLogin from "./../views/AdminLogin.vue"


export const adminLoginRouter = {
  path: "/login",
  component: AdminLogin,
  meta: {
    hasLogined: true,
  },
};
