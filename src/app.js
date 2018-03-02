import Vue from "vue";
import List from "./components/List";

Vue.config.productionTip = false;

const board = [
  [
    { id: 1, 'title': 'セフィリア＝アークス' },
    { id: 2, 'title': 'ベルゼー＝ロシュフォール' },
    { id: 3, 'title': 'エミリオ＝ロウ' },
    { id: 4, 'title': 'クランツ＝マドゥーク' },
  ],
  [
    { id: 5, 'title': 'ナイザー＝ブラッカイマー' },
    { id: 6, 'title': 'アヌビス' },
    { id: 7, 'title': 'ジェノス＝ハザード' },
    { id: 8, 'title': 'バルドリアス＝S＝ファンギーニ' },
  ],
  [
    { id: 9, 'title': 'デイビッド＝ペッパー' },
    { id: 10, 'title': 'リン＝シャオリー' },
    { id: 11, 'title': 'ベルーガ＝J＝ハード' },
    { id: 12, 'title': 'メイソン＝オルドロッソ' },
  ],
];

const app = new Vue({
  el: "#app",
  data: {
    board: board
  },
  components: { List },
  template: '<div style="margin: 50px; display: flex">\
    <List\
      style="display: flex; flex-direction: column; width: 300px;"\
      v-for="list in board"\
      v-model="board"\
      :list="list"\
    ></List>\
  </div>'
});
