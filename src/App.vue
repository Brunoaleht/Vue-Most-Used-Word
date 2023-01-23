<template>
  <v-app>
    <v-app-bar :elevation="3" app color="primary" dark>
      <v-toolbar-title>Most Used Word</v-toolbar-title>
    </v-app-bar>
    <v-main> 
      <HomeH />
    </v-main>
  </v-app>
</template>

<script>
import HomeH from "./components/HomeH.vue"
export default {
  name: "App",

  components: {
    HomeH,
  },

  data: () => ({}),
};
</script>
