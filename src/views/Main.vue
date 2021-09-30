<template>
  <v-main>
    <div
      id="swipe_area"
      v-my-touch:start="swipeStart"
      v-my-touch:end="swipeEnd"
    >
      <img src="../assets/images/kemuri1.png" class="kemuri1" alt="煙画像1" />
      <img src="../assets/images/kemuri2.png" class="kemuri2" alt="煙画像2" />
      <img src="../assets/images/kemuri3.png" class="kemuri2" alt="煙画像3" />
      <img
        src="../assets/images/uragaeshi.png"
        id="uragaeshi"
        alt="裏返しのお好み焼き画像"
      />
      <img
        src="../assets/images/oko.png"
        id="okonomiyaki"
        class="okonomiyaki"
        alt="お好み焼き画像"
      />
      <img src="../assets/images/teppan.png" class="teppan" alt="鉄板画像" />
    </div>

    <!-- <OpenModal v-if="isVisibleMainPage" /> -->
    <OpenModal v-if="openModal" :val="modalContents" />
  </v-main>
</template>

<script>
import OpenModal from "../components/OpenModal.vue";
export default {
  name: "Main",
  props: {},
  components: {
    OpenModal,
  },
  data() {
    return {
      openModal: false,
      no: 0, // 数値格納用
      distance: 0, // スワイプした座標距離
      pageY: 0,
      touchHoldTolerance: 0,
      endY: 0,
      startY: 0,
      moveY: 0, // スワイプ中の y座標
      dist: 20, // スワイプを感知する最低距離（ピクセル単位）
      titleText: "a", // モーダルのテキストを変更する
      bodyText: "",
      modalContents: [
        {
          level: 1,
          titleText: "お好み焼きはピクリと動いた",
          bodyText: `え?
            なんかしました?
            そよ風が吹いたかと思いました。
            その程度でお好み焼きを食べられると思っているとは...笑止千万!!`,
        },
        {
          level: 2,
          titleText: "惜しい！あとひと押し!!",
          bodyText: `
            惜しい！
            あと少し!
            あと少し距離を伸ばそう!
            お好み焼きまであと一歩!!`,
        },
        {
          level: 3,
          titleText: "お好み焼き名人を襲名",
          bodyText: `
            とんでもないセンスに満ち溢れていますね...
            手首のスナップ...
            そして力の入れ具合...
            もはや名人です。`,
          twitter: `https://twitter.com/intent/tweet?&text=我、お好み焼き返し名人なり!!%0a%0aお好み焼きを返す技術力が今、試される...%0aスマホから遊んでね。%0a%23お好み焼き%0a%23くそアプリ%0a%23お好み焼きをひっくり返すだけのアプリ%0a&url=https://zen-sinoussi-c18c33.netlify.app/`,
        },
        {
          level: 4,
          titleText: "お好み焼きは星になった",
          bodyText: `どうして...?
              どうしてそんなに力を入れたんですか...?
              お好み焼きもまさか星になるとは思ってなかったと思います。
              お好み焼きを作るときは必ず保護者の方と一緒に作ってください。
              `,
        },
      ],
      gifSource: require("../assets/images/topping_okonomiyaki.gif"),
    };
  },
  methods: {
    swipeStart: function (e) {
      const isTouchDevice = window.ontouchstart !== undefined;
      // デバイスがタッチ対応の時
      if (isTouchDevice) {
        this.startY = e.changedTouches[0].pageY;
      } // デバイスがタッチ非対応の時
      else {
        this.startY = e.pageY;
      }
    },
    swipeEnd: function (e) {
      const isTouchDevice = window.ontouchstart !== undefined;
      if (isTouchDevice) {
        this.moveY = e.changedTouches[0].pageY;
      } else {
        this.endY = e.pageY;
        this.moveY = this.startY - this.endY;
      }
      this.result();
    },
    result: function () {
      const moveY = this.moveY;
      if (moveY > 0) {
        const okonomiyaki = document.getElementById("okonomiyaki");
        //level1
        if (moveY < 200) {
          okonomiyaki.classList = "okonomiyaki_up_level1";
          setTimeout(() => {
            this.openModal = true;
            this.modalContents = this.modalContents[0];
          }, 3000);
        }
        //level2
        else if (200 <= moveY && moveY < 400) {
          okonomiyaki.classList = "okonomiyaki_up_level2";
          setTimeout(() => {
            this.openModal = true;
            this.modalContents = this.modalContents[1];
          }, 3000);
        }
        //level3
        else if (400 <= moveY && moveY < 450) {
          okonomiyaki.classList = "okonomiyaki_up_level3";
          const ura = document.getElementById("uragaeshi");
          ura.classList.add("uragaeshi");

          // 名人のgifを遅延表示させるメソッド
          setTimeout(() => {
            const image = document.createElement("img");
            image.src = this.gifSource;
            image.id = "meizin";
            image.alt = "完成動画";
            image.style.zIndex = 100;
            document.getElementById("swipe_area").appendChild(image);
            // 名人のモーダルを遅延表示させる
            setTimeout(() => {
              this.openModal = true;
              this.modalContents = this.modalContents[2];
            }, 4000);
          }, 3200);
        }
        //level4
        else {
          okonomiyaki.classList = "okonomiyaki_up_level4";
          setTimeout(() => {
            this.openModal = true;
            this.modalContents = this.modalContents[3];
          }, 3000);
        }
      }
    },
  },
};
</script>

<style lang="scss">
/* プレイ画面 */
#container {
  width: 100%;
  height: 100vh;
  background: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

main {
  background-color: palegreen;
}

#swipe_area {
  position: relative;
  width: 100vw;
  height: 100vh;
}

img {
  width: 40vw;
  position: absolute;
  top: 10vh;
  left: 0;
  right: 0;
  margin: auto;
  /* 画像のドラッグ無効化 */
  -webkit-user-drag: none;
}
@media screen and (max-width: 600px) {
  img {
    width: 90vw;
  }
}

.teppan {
  z-index: 1;
}

.kemuri1 {
  z-index: 100;
  animation: kemu1 9s infinite;
}

@keyframes kemu1 {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.25;
  }
  100% {
    opacity: 0;
  }
}
.kemuri2 {
  animation: kemu1 9s infinite;
}
.kemuri3 {
  animation: kemu1 9s infinite;
}

#okonomiyaki {
  z-index: 50;
}
.okonomiyaki {
  animation: puru 3s infinite;
}

@keyframes puru {
  0% {
    transform: translate(2px, 0px);
  }
  5% {
    transform: translate(-2px, 0px);
  }
  10% {
    transform: translate(2px, 0px);
  }
  15% {
    transform: translate(-2px, 0px);
  }
  20% {
    transform: translate(2px, 0px);
  }
  25% {
    transform: translate(-2px, 0px);
  }
  30% {
    transform: translate(0px, 0px);
  }
}

.okonomiyaki_up_level1 {
  animation: flow1 2s forwards;
}
@keyframes flow1 {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
}

.okonomiyaki_up_level2 {
  animation: flow2 2s forwards;
}
@keyframes flow2 {
  0% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(120deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

/* 完璧 */
.okonomiyaki_up_level3 {
  animation: flow3 2s forwards;
  transition-property: display;
}

@keyframes flow3 {
  0% {
    transform: translateY(0px);
  }
  60% {
    opacity: 0;
  }
  75% {
    transform: rotate(180deg);
    opacity: 0;
  }
  100% {
    transform: rotate(0deg);
    opacity: 0;
  }
}

#uragaeshi {
  z-index: 50;
  opacity: 0;
}
.uragaeshi {
  animation: flow3_1 2s forwards;
}

@keyframes flow3_1 {
  0% {
    transform: translateY(0px);
  }
  60% {
    opacity: 1;
  }
  75% {
    transform: rotate(180deg);
    opacity: 1;
  }
  100% {
    transform: rotate(0deg);
    opacity: 1;
  }
}

.okonomiyaki_up_level4 {
  animation: flow4 2s forwards;
}

@keyframes flow4 {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-100vh);
  }
}
</style>
