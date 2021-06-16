<template>
  <form>
    <input
      @input="setSearchValue({ value: $event.target.value })"
      :value="searchValue"
      type="text"
    />
    <!-- <button>Search</button> -->
    <label>
      Aa
      <input type="checkbox" @change="toggleCaseSens" :checked="caseSens" />
    </label>
  </form>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Search",
  computed: {
    ...mapGetters({
      searchValue: "GET_SEARCH_VALUE",
      caseSens: "GET_SEARCH_SENSITIVE",
    }),
  },
  methods: {
    ...mapMutations({
      setSearchValue: "SET_SEARCH_VALUE",
      toggleCaseSens: "TOGGLE_CASE_SENS",
    }),
  },
};
</script>

<style scoped lang="css">
form {
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
}

input {
  padding: 4px 2px;
  margin-bottom: 10px;
}
</style>
