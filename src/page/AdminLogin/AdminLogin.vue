<template>
  <v-app>
    <v-card :loading="isLoading" class="mx-auto my-auto" min-width="374">
      <v-alert type="error" v-show="errMess"> {{ errMess }}</v-alert>
      <template slot="process">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
      <v-card-title>Welcome Admin</v-card-title>
      <v-card-text>
        <v-form ref="form" lazy-validation @submit="handleLoginRequest">
          <v-text-field
            label="username"
            v-model="loginInput.username"
            name="username"
            :rules="nameRules"
          ></v-text-field>
          <v-text-field
            label="password"
            v-model="loginInput.password" 
            type="password"
            :rules="passwordRules"
          ></v-text-field>
          <v-btn color="info" type="submit"> Login </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      loginInput: {
        username: "",
        password: "",
      },
      nameRules: [
        (v) => {
          return !!v || "Username cannot empty !!";
        },
      ],
      passwordRules: [
        (v) => {
          return !!v || "Password cannot empty !!";
        },
      ],
    };
  },

  methods: {
    ...mapActions(["sendLoginRequest"]),
    handleLoginRequest(e) {
      e.preventDefault();
      if (this.$refs.form.validate()) {
        this.sendLoginRequest(this.loginInput);
      }
    },
  },
  computed: {
    ...mapGetters(["isLoginSuccess", "isLoading", "errMess"]),
  },
  updated() {
    if (this.isLoginSuccess) {
      this.$router.push("/");
    }
  },
};
</script>
<style lang="scss">
</style>