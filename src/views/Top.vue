<template>
  <v-row>
    <v-col>
      <div id="splash">
        <div id="splash_text">
          <p>上方向にスワイプして</p>
          <p>お好み焼きをひっくり返そう!</p>
          <p>スワイプした距離でお好み焼きのひっくり返り方が変わるよ!</p>
          <p>画面をタッチしたら始まるよ!</p>
          <img src="../assets/images/swipe.png" alt="" srcset="" />
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Top",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 最初の説明画面 */
#splash {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #333;
  text-align: center;
  color: #fff;
}
#splash img {
  z-index: -1;
}

#splash_text {
  margin: 50% auto;
  text-align: center;
}
</style>
