<template>
  <div style="margin: 50px;">
    <p>追加可能なリスト</p>
    <draggable element="ul">
      <list-item
        v-for="item in list"
        :key="list.indexOf(item)"
        :item="item"
      ></list-item>
    </draggable>
    <input type="text" v-model="input"/>
    <button @click="addItem"> add </button>
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
    return { input: "" };
  },
  methods: {
    addItem: function(e) {
      e.preventDefault();
      this.list = this.list.concat(this.input);
      this.input = "";
    }
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

input {
  margin: 0 5px;
}
</style>
