<template>
  <v-app>
    <v-app-bar app :clipped-left="true">
      <v-btn value="justify" plain @click="toggleDrawer = !toggleDrawer">
        <v-icon> mdi-format-align-justify </v-icon>
      </v-btn>
      <h3>Admin Dashboard</h3>
      <v-spacer></v-spacer>
      <v-menu offset-y :close-on-content-click="false">
        <template v-slot:activator="{ on, attrs }">
          <v-avatar color="primary" size="39" v-on="on" v-bind="attrs">{{
            username
          }}</v-avatar>
        </template>
        <v-list>
          <v-list-item href="#" @click="handleLogout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-switch color="red" :label="themeName" v-model="theme"></v-switch>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer
      app
      :permanent="toggleDrawer"
      :clipped="true"
      v-model="toggleDrawer"
    >
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to">
          <v-list-item-icon>
            <v-icon medium>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <v-row class="fill-height">
          <v-col>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
        { title: "Movie", icon: "mdi-image", to: "/movie" },
        { title: "User", icon: "mdi-account", to: "/user" },
        { title: "Ticket", icon: "mdi-ticket", to: "/ticket" },
        { title: "Cinema", icon: "mdi-movie", to: "/cinema" },
      ],
      username: JSON.parse(sessionStorage.getItem("user"))
        .hoTen.split("")[0]
        .toUpperCase(),
      toggleDrawer: true,
      themeName: "Light",
      theme: false,
    };
  },
  watch: {
    theme: function () {
      this.$vuetify.theme.dark = this.theme;
      this.themeName = this.theme ? "Dark" : "Light";
    },
  },
  methods: {
    handleLogout(e) {
      e.preventDefault();
      sessionStorage.clear();
      this.$router.push("/login");
    },
  },
  destroyed() {
    this.$vuetify.theme.dark = false;
  },
};
</script>
<style lang="scss">
</style>





