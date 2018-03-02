<template>
  <li><span class="drag-handler"><i class="fas fa-genderless"></i></span>{{ item.title }}</li>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: ["item"]
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

span :hover {
  cursor: pointer;
}

.sortable-ghost {
  opacity: 0;
}
</style>
