<template>
  <div class="search-wrapper">
    <form @submit.prevent="searchItems" class="search">
      <input class="search__input" v-model="searchValue" type="text" />
      <button class="search__clear" type="button" @click="clearInput">
        <i class="fas fa-times"></i>
      </button>
    </form>
    <button
      class="search__case-sense"
      :class="{ 'search__case-sense--active': caseSensitive }"
      @click="toggleCaseSens"
    >
      Az
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { CHANGE_CASE_SENSITIVE } from "../store/mutations.type";
import { SEARCH_ITEMS } from "../store/actions.type";
export default {
  name: "AppSearch",
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    clearInput() {
      this.searchValue = "";
    },
    toggleCaseSens() {
      this.$store.commit(CHANGE_CASE_SENSITIVE);
    },
    searchItems() {
      this.$store.dispatch(SEARCH_ITEMS, this.searchValue);
    },
  },
  computed: {
    ...mapGetters(["caseSensitive"]),
  },
};
</script>

<style>
.search {
  margin-top: 10px;
  max-width: 250px;
  position: relative;
}
.search__input {
  padding: 6px 20px 4px 5px;
  border: none;
  border-radius: 4px;
  width: 100%;
}
.search__clear {
  position: absolute;
  top: 0px;
  width: 25px;
  height: 25px;
  right: 0px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.search__case-sense {
  margin-top: 5px;
  background-color: grey;
  border: none;
  color: whitesmoke;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: inherit;
  cursor: pointer;
}

.search__case-sense--active {
  background-color: #29db30;
}
</style>
