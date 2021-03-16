export const MovieTableRouter = {
  path: "movie/:page",
  component: () => import("./../views/MovieTable.vue"),
  meta: {
    requiresAuth: true, // change it true wanna check authoraization
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
