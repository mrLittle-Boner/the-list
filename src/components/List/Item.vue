<template>
  <li @click="getItem(id)">- {{ title }} { main: {{ isMain }} }</li>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Item",
  props: {
    title: {
      type: String,
      required: true,
    },
    isMain: {
      type: Boolean,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      getItem: "GET_ITEM_BY_ID",
    }),
  },
};
</script>

<style scoped lang="css"></style>
