<template>
  <div style="margin: 50px;">
    <p>複数列リスト</p>
    <div style="display: flex">
      <draggable
        :options="options"
        element="ul"
        v-for="list in board"
        :key="board.indexOf(list)"
      >
        <list-item
          v-for="item in list"
          :key="list.indexOf(item)"
          :item="item"></list-item>
      </draggable>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ListItem from "./ListItem";
import draggable from "vuedraggable";

export default Vue.extend({
  components: { draggable, ListItem },
  props: ["board"],
  data() {
    return {
      options: {
        group: "board",
        animation: 100
      }
    };
  }
});
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #cccccc;
  margin: 5px;
}
</style>
