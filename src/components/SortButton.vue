<template>
  <button
    class="sort__button"
    :class="this.isActiveClass"
    @click="$emit('changeSortDirection', direction)"
  >
    {{ sortType }}
  </button>
</template>

<script>
export default {
  name: "SortButton",
  emits: ["changeSortDirection"],
  props: {
    sortType: {
      type: String,
    },
    direction: {
      type: String,
    },
  },
  computed: {
    isActiveClass() {
      let sortType = this.$store.state.sort.sortType;
      return sortType === this.direction ? "sort__button--active" : "";
    },
  },
};
</script>

<style>
.sort__button {
  cursor: pointer;
  padding: 6px 12px;
  background-color: grey;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: inherit;
}
.sort__button--active {
  background-color: #29db30;
}
</style>
