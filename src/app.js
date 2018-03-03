import Vue from "vue";
import List from "./components/List";
import ListItem from "./components/ListItem";
import draggable from "vuedraggable";

Vue.config.productionTip = false;

const list = [
  { id: 1, title: "トレイン＝ハートネット" },
  { id: 2, title: "スヴェン＝ボルフィード" },
  { id: 3, title: "イヴ" },
  { id: 4, title: "リンスレット＝ウォーカー" }
];

const app1 = new Vue({
  el: "#app1",
  data: { list: list },
  components: { ListItem, draggable },
  template:
    '<div style="margin: 50px;">\
    <p>1列リスト</p>\
    <draggable\
      element="ul"\
      style="width: 300px; border: 1px solid #cccccc"\
    >\
      <list-item\
        v-for="item in list"\
        :key="item.id"\
        :item="item"></list-item>\
    </draggable>\
  </div>'
});

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

const app2 = new Vue({
  el: "#app2",
  data: { board: board },
  components: { List },
  template:
    '<div style="margin: 50px;">\
      <p>複数列リスト</p>\
      <div style="display: flex">\
      <List\
        v-for="list in board"\
        v-model="board"\
        :list="list"\
      ></List>\
    </div>\
    </div>'
});
