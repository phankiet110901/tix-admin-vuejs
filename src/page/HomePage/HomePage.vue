<template>
  <v-app>
    <v-app-bar app clipped-left="true">
      <v-row class="d-flex" justify="space-between" align="center">
        <v-row align="center">
          <v-btn value="justify" plain @click="toggleDrawer = !toggleDrawer">
            <v-icon> mdi-format-align-justify </v-icon>
          </v-btn>
          <h3>Admin Dashboard</h3>
        </v-row>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-avatar color="primary" size="39" v-on="on" v-bind="attrs">{{
              username
            }}</v-avatar>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>
    </v-app-bar>
    <v-col class="d-flex">
      <v-navigation-drawer
        app
        :permanent="toggleDrawer"
        :absolute="true"
        :clipped="true"
        v-model="toggleDrawer"
      >
        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon medium>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-content>
        <v-container fluid>
          <v-row class="fill-height">
            <v-col>
              <transition name="fade">
                <router-view></router-view>
              </transition>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-col>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Movie", icon: "mdi-image" },
        { title: "User", icon: "mdi-account " },
        { title: "Ticket", icon: "mdi-ticket" },
        { title: "Cinema", icon: "mdi-movie" },
      ],
      username: JSON.parse(sessionStorage.getItem("user"))
        .hoTen.split("")[0]
        .toUpperCase(),
      toggleDrawer: true,
    };
  },
};
</script>
<style lang="scss">
</style>