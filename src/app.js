import Vue from "vue";
import List from "./components/List";
import MultiList from "./components/MultiList";
import AddibleList from "./components/AddibleList";
import ListWithDragHandle from "./components/ListWithDragHandle";

Vue.config.productionTip = false;

const list = [
  "トレイン＝ハートネット",
  "スヴェン＝ボルフィード",
  "イヴ",
  "リンスレット＝ウォーカー"
];

const board = [
  [
    "セフィリア＝アークス",
    "ベルゼー＝ロシュフォール",
    "エミリオ＝ロウ",
    "クランツ＝マドゥーク"
  ],
  [
    "ナイザー＝ブラッカイマー",
    "アヌビス",
    "ジェノス＝ハザード",
    "バルドリアス＝S＝ファンギーニ"
  ],
  [
    "デイビッド＝ペッパー",
    "リン＝シャオリー",
    "ベルーガ＝J＝ハード",
    "メイソン＝オルドロッソ"
  ]
];

new Vue({
  el: "#list",
  data: { list: list },
  components: { List },
  template: '<list :list="list"></list>'
});

new Vue({
  el: "#multi-list",
  data: { board: board },
  components: { MultiList },
  template: '<multi-list :board="board"></multi-list>'
});

new Vue({
  el: "#addible-list",
  data: { list: list },
  components: { AddibleList },
  template: '<addible-list :list="list"></editable-list>'
});

new Vue({
  el: "#list-with-drag-handle",
  data: { list: list },
  components: { ListWithDragHandle },
  template: '<list-with-drag-handle :list="list"></list-with-drag-handle>'
});
