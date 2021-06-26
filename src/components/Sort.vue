<template>
  <div class="sort">
    <SortButton
      :sortType="'A-Z'"
      :direction="'asc'"
      @changeSortDirection="changeSort"
    />
    <SortButton
      :sortType="'Z-A'"
      :direction="'desc'"
      @changeSortDirection="changeSort"
    />
  </div>
</template>

<script>
import { CHANGE_SORT_DIRECTION } from "../store/actions.type";
import SortButton from "./SortButton.vue";
export default {
  name: "AppSort",
  components: {
    SortButton,
  },
  methods: {
    changeSort(dir) {
      this.$store.dispatch(CHANGE_SORT_DIRECTION, dir);
    },
  },
};
</script>

<style>
.sort {
  margin-top: 10px;
  display: flex;
  gap: 15px;
}
</style>
