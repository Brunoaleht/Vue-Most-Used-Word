<template>
  <v-container class="homeContainer" fluid>
    <v-form>
      <v-file-input
        label="Select SubTitles"
        prepend-icon="mdi-message-text"
        append-icon="mdi-send"
        outlined
        multiple
        chips
        v-model="files"
        @click:append="processSubTitle"
      />
    </v-form>
    <div class="Cards">
      <CardWord
        v-for="word in groupedWord"
        :key="word.name"
        :name="word.name"
        :amount="word.amount"
      />
    </div>
  </v-container>
</template>

<script>
import { ipcRenderer } from "electron";
import CardWord from "./CardWord.vue";
export default {
  name: "HomeH",
  components: {
    CardWord,
  },
  data: () => {
    return {
      files: [],
      groupedWord: [],
    };
  },
  methods: {
    processSubTitle() {
      //o //processSubTitles// é um channel referenciado em backend-index
      //o send é para enviar ao backend, e o on é para escutar no frontend
      const paths = this.files.map(f => f.path)
      ipcRenderer.send("processSubTitles", paths);
      ipcRenderer.on("processSubTitles", (event, resp) => {
        this.groupedWord = resp;
      });
    },
  },
};
</script>

<style>
.homeContainer {
  background-color: #faf4b1;
}
.Cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
