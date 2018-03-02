<template>
  <draggable
    v-model="list"
    :options="options"
    element="ul"
  >
    <ListItem
      v-for="item in list"
      :key="item.id"
      :item="item"></LIstItem>
  </draggable>
</template>

<script>
import Vue from "vue";
import ListItem from "./ListItem";
import draggable from 'vuedraggable';

export default Vue.extend({
  components: { draggable, ListItem },
  props: ["list"],
  data() {
    return {
      options: {
        handle: '.drag-handler',
        group: 'board',
        animation: 100,
      }
    };
  },
});
</script>
