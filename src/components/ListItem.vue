<template>
  <li><span v-if="dragHandle" class="drag-handler">:::</span>{{ item }}</li>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    item: String,
    dragHandle: false
  }
});
</script>

<style scoped>
li {
  padding: 5px;
  margin: 1px;
  border: 1px solid #cccccc;
}

span {
  margin: 0px 3px;
}

.drag-handler :hover {
  cursor: pointer;
}

.sortable-ghost {
  opacity: 0;
}
</style>
