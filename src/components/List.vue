<template>
  <div style="margin: 50px;">
    <p>1列リスト</p>
    <draggable element="ul">
      <list-item
        v-for="item in list"
        :key="list.indexOf(item)"
        :item="item"></list-item>
    </draggable>
  </div>
</template>

<script>
import Vue from "vue";
import ListItem from "./ListItem";
import draggable from "vuedraggable";

export default Vue.extend({
  components: { draggable, ListItem },
  props: ["list"]
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
