<template>
  <v-app>
    <div @click="startGame">
      <Top v-if="isVisibleTopPage" />
      <Main v-if="isVisibleMainPage" />
    </div>
  </v-app>
</template>

<script>
import Top from "@/views/Top";
import Main from "@/views/Main";

export default {
  name: "App",
  components: {
    Top,
    Main,
  },
  data() {
    return {
      isVisibleTopPage: true,
      isVisibleMainPage: false,
    };
  },
  methods: {
    startGame() {
      this.isVisibleTopPage = false;
      this.isVisibleMainPage = true;
    },
  },
};
</script>
