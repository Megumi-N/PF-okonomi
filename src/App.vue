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
      isVisibleMainPage: true,
    };
  },
  methods: {
    startGame() {
      this.isVisibleTopPage = false;
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "ほのか新丸ゴシック";
  max-width: 100%;
  height: auto;
}
#app {
  background-color: palegreen;
}
</style>
