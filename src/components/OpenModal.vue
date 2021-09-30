<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="500" persistent>
      <v-card>
        <v-card-title class="text-h5">
          {{ $attrs.val.titleText }}
        </v-card-title>
        <v-card-text style="white-space: pre-line;"
          ><p>{{ $attrs.val.bodyText }}</p>
          <v-btn
            href="twitter"
            target="_blank"
            rel="noopener noreferrer"
            text
            style="padding: 0;"
            ><i class="fab fa-twitter"></i>
          </v-btn>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="reset()">
            {{ reload }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <!-- <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel"></h5>
        </div>
        <div class="modal-body" id="modalBody"></div>
        <div class="modal-footer">
          <button
            type="button"
            id="modalButton"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          ></button>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "OpenModal",
  data() {
    return {
      dialog: true,
      reload: "もう一度挑戦する",
      twitter:
        "https://twitter.com/intent/tweet?&text=我、お好み焼き返し名人なり!!%0a%0aお好み焼きを返す技術力が今、試される...%0aスマホから遊んでね。%0a%23お好み焼き%0a%23くそアプリ%0a%23お好み焼きをひっくり返すだけのアプリ%0a&url=https://zen-sinoussi-c18c33.netlify.app/",
    };
  },
  // created: {
  //   function() {
  //     this.title = this.modalContents[0].titleText;
  //   },
  // },
  methods: {
    reset: function () {
      location.reload();
    },
  },
};
</script>

<style>
#overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
#content {
  z-index: 2;
  width: 50%;
  padding: 1em;
  background: #fff;
}
</style>
