<template>
  <draggable
    :options="options"
    element="ul"
  >
    <list-item
      v-for="item in list"
      :key="item.id"
      :item="item"></list-item>
  </draggable>
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
        handle: ".drag-handler",
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
