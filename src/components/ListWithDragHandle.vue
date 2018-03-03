<template>
  <div style="margin: 50px;">
    <p>ドラッグハンドルありのリスト</p>
    <draggable
      element="ul"
      :options="options"
    >
      <list-item
        v-for="item in list"
        :key="list.indexOf(item)"
        :item="item"
        :dragHandle="true"
        ></list-item>
    </draggable>
  </div>
</template>

<script>
import Vue from "vue";
import ListItem from "./ListItem";
import draggable from "vuedraggable";

export default Vue.extend({
  components: { draggable, ListItem },
  props: ["list"],
  data() {
    return {
      options: {
        handle: ".drag-handler"
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
