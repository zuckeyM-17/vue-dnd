import Vue from "vue";
import List from "./components/List";
import MultiList from "./components/MultiList";
import AddibleList from "./components/AddibleList";
import ListWithDragHandle from "./components/ListWithDragHandle";

Vue.config.productionTip = false;

const list = [
  { id: 1, title: "トレイン＝ハートネット" },
  { id: 2, title: "スヴェン＝ボルフィード" },
  { id: 3, title: "イヴ" },
  { id: 4, title: "リンスレット＝ウォーカー" }
];

const board = [
  [
    { id: 1, title: "セフィリア＝アークス" },
    { id: 2, title: "ベルゼー＝ロシュフォール" },
    { id: 3, title: "エミリオ＝ロウ" },
    { id: 4, title: "クランツ＝マドゥーク" }
  ],
  [
    { id: 5, title: "ナイザー＝ブラッカイマー" },
    { id: 6, title: "アヌビス" },
    { id: 7, title: "ジェノス＝ハザード" },
    { id: 8, title: "バルドリアス＝S＝ファンギーニ" }
  ],
  [
    { id: 9, title: "デイビッド＝ペッパー" },
    { id: 10, title: "リン＝シャオリー" },
    { id: 11, title: "ベルーガ＝J＝ハード" },
    { id: 12, title: "メイソン＝オルドロッソ" }
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
