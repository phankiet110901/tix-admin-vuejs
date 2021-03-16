<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="pink lighten-2" dark v-bind="attrs" v-on="on">
          Play trailer
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Trailer
        </v-card-title>

        <v-card-text v-if="dialog">
          <iframe :src="linkTrailer" frameborder="0" width="100%"></iframe>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false
    }
  },
  props: {
    linkTrailer: String
  }
};
</script>
<style lang=""></style>
