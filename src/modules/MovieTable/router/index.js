export const MovieTableRouter = {
  path: "movie",
  component: () => import("./../views/MovieTable.vue"),
  meta: {
    requiresAuth: true, // change it true wanna chekc authoraization
    breadcrumn: [
      {
        id: 1,
        text: "Daskboard",
        active: true,
        path: "/",
      },
      {
        id: 2,
        text: "Movie",
        active: false,
        path: null,
      },
    ],
  },
};
