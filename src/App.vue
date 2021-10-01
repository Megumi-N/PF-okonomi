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
  mounted: {
    function() {
      // 2.初期化
      // setHeight();
      const resize = function () {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      };
      // 3.ブラウザのサイズが変更された時・画面の向きを変えた時に再計算する
      window.addEventListener("resize", resize);
    },
    // setHeight() {
    // 1.関数の定義
    // },
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
  min-height: 100vh; /* カスタムプロパティ未対応ブラウザ用のフォールバック */
  min-height: calc(var(--vh, 1vh) * 100);
}
</style>
